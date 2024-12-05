const express = require("express");
const session = require("express-session");
const mysql = require("mysql");
const loginRoutes = require("./rutas/codLogin"); // Rutas específicas de login/registro
const app = express();
const database = require("./views/database");
const cors = require("cors");
const { actualizarStock } = require('./public/funcionesdb');

// Configuraciones generales
app.set("view engine", "ejs");
app.set("port", 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors({
    origin: ["http://127.0.0.1:5501", "http://127.0.0.1:5500"]
}));

// Manejo de sesiones
app.use(
    session({
        secret: "tu_contraseña",
        resave: false,
        saveUninitialized: false,
    })
);

// Middleware global para pasar el usuario a las vistas
app.use((req, res, next) => {
    res.locals.usuario = req.session.usuario || null;
    next();
});

// Rutas principales
app.get("/", (req, res) => {
    res.render("index"); // Aquí ya estará disponible `res.locals.usuario`
});

app.get("/registro", (req, res) => {
    res.render("registro", { mensaje: "" }); // Evita errores en la vista
});

app.get("/login", (req, res) => {
    res.render("login", { mensaje: "", redirigirRegistro: false }); // Evita errores en la vista
});

app.get("/baterias", async (req, res) => {
    let connection;
    try {
        connection = await database.getConnection();
        const [rows] = await connection.query("SELECT * FROM baterias");
        res.json(rows);
    } catch (error) {
        console.error("Error al obtener baterías:", error);
        res.status(500).send("Error interno del servidor.");
    } finally {
        if (connection) connection.release(); // Libera la conexión al pool
    }
});


// Rutas específicas
app.use(loginRoutes); // Esto toma todas las rutas definidas en `codLogin.js`

// Ruta para actualizar stock
app.post("/actualizar-stock", async (req, res) => {
    const { id, nuevoStock } = req.body;
    try {
        // Aquí llamas a la función para actualizar el stock en la base de datos
        await actualizarStock(id, nuevoStock);
        res.json({ success: true, message: "Stock actualizado" });
    } catch (error) {
        console.error("Error al actualizar el stock:", error);
        res.status(500).json({ success: false, message: "Error al actualizar el stock" });
    }
});

// Configuración de puerto
app.listen(app.get("port"), () => {
    console.log(`Servidor iniciado en http://localhost:${app.get("port")}`);
});


// Ruta para el logout
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error al cerrar sesión:", err);
            return res.status(500).send("Error al cerrar sesión.");
        }
        res.redirect("/"); // Redirige al usuario a la página de login
    });
});

// Ruta para agregar una nueva batería a la base de datos
app.post("/baterias", async (req, res) => {
    const { marca, modelo, precio, stock, imagen } = req.body;

    console.log("Datos recibidos:", { marca, modelo, precio, stock, imagen });

    if (!marca || !modelo || !precio || !stock || !imagen) {
        return res.status(400).json({ success: false, message: "Todos los campos son obligatorios." });
    }
    let connection;
    try {
        connection = await database.getConnection(); 
        console.log("Conexión establecida.");
        const query = "INSERT INTO baterias (marca, modelo, precio, stock, imagen) VALUES (?, ?, ?, ?, ?)";
        const result = await connection.query(query, [marca, modelo, precio, stock, imagen]);
        console.log("Resultado de la inserción:", result);

        const nuevaBateria = {
            id: result.insertId,
            marca,
            modelo,
            precio,
            stock,
            imagen
        };

        res.status(201).json(nuevaBateria); // Responder con la nueva batería creada
    } catch (error) {
        console.error("Error al guardar la batería:", error);
        res.status(500).json({ success: false, message: "Error al guardar la batería." });
    } finally {
        if (connection) connection.release(); // Libera la conexión
    }
});


function verificarAdmin(req, res, next) {
    if (req.session.usuario && req.session.usuario.perfil === "admin") {
        next(); // Permite continuar
    } else {
        res.status(403).send("Acceso denegado: Solo los administradores pueden acceder a esta página.");
    }
}


app.get("/actualizar-stock", verificarAdmin, (req, res) => {
    res.render("actualizar-stock");
});


app.patch("/baterias/:id", async (req, res) => {
    const { id } = req.params;
    const { marca, modelo, precio, stock, imagen } = req.body;

    console.log("ID recibido:", id);
    console.log("Datos recibidos:", req.body);

    if (!id) {
        return res.status(400).json({ error: "El ID de la batería es obligatorio." });
    }

    let connection;
    try {
        connection = await database.getConnection();

        // Construir consulta dinámica para actualizar solo los campos enviados
        const campos = [];
        const valores = [];

        if (marca) {
            campos.push("marca = ?");
            valores.push(marca);
        }
        if (modelo) {
            campos.push("modelo = ?");
            valores.push(modelo);
        }
        if (precio) {
            campos.push("precio = ?");
            valores.push(precio);
        }
        if (stock) {
            campos.push("stock = ?");
            valores.push(stock);
        }
        if (imagen) {
            campos.push("imagen = ?");
            valores.push(imagen);
        }

        if (campos.length === 0) {
            return res.status(400).json({ error: "No se enviaron campos para actualizar." });
        }

        valores.push(id); // El ID va al final de los valores
        const query = `UPDATE baterias SET ${campos.join(", ")} WHERE id = ?`;
        await connection.query(query, valores);

        res.status(200).json({ message: "Batería actualizada con éxito." });
    } catch (error) {
        console.error("Error al actualizar la batería:", error);
        res.status(500).json({ error: "Error al actualizar la batería." });
    } finally {
        if (connection) connection.release();
    }
});
