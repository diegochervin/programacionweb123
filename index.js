const express = require("express");
const session = require("express-session");
const mysql = require("mysql");
const loginRoutes = require("./rutas/codLogin"); // Rutas específicas de login/registro
const app = express();
const database = require("./views/database");
const cors = require("cors")

// Configuraciones generales
app.set("view engine", "ejs");
app.set("port", 3000)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors({
    origin: ["http://127.0.0.1:5501", "http://127.0.0.1:5500"]
}))

// Manejo de sesiones
app.use(
    session({
        secret: "tu_contraseña",
        resave: false,
        saveUninitialized: false,
    })
);

// Rutas principales
app.get("/", (req, res) => {
    res.render("index");
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
        const result = await connection.query("SELECT * FROM baterias");
        res.json(result);
        return result;  
    } catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).send("Error interno del servidor.");
    } finally {
        if (connection) await connection.end();
    }
});


// Rutas específicas
app.use(loginRoutes); // Esto toma todas las rutas definidas en `codLogin.js`

// Configuración de puerto
app.listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000");
});
 