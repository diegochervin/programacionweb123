const express = require("express");
const session = require("express-session");

const mysql = require("mysql");

let conexion = mysql.createConnection({
    host: "localhost",
    database: "ferrobat",
    user: "root",
    password: ""
})


//objetos para llamar los metodos express

const app = express();




//configuraciones

app.set("view engine", "ejs");

//rutas a cada pagina

app.get("/", function(req,res){
    res.render("index")
});

app.get("/registro", function(req,res){
    res.render("registro")
});

//manejo de sesiones
app.use(session({
    secret: "tu_contraseña",
    resave: false,
    saveUninitialized: false
}));
//fin manejo de sesion


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"));

app.post("/validar", function (req, res) {
    const datos = req.body;

    let nom = datos.nom;
    let ape = datos.ape;
    let email = datos.email;
    let pass = datos.pass;

    // Consulta segura para buscar el email
    const buscar = "SELECT * FROM usuario WHERE email = ?";

    conexion.query(buscar, [email], function (error, rows) {
        if (error) {
            console.error("Error al buscar el email:", error);
            res.status(500).send("Error en la búsqueda del usuario.");
        } else {
            let mensaje;
            if (rows.length > 0) {
                mensaje = "El email ya está registrado.";
                res.render("registro", {mensaje});
            } else {
                // Si no existe, registrar el nuevo usuario
                const registrar = "INSERT INTO usuario (nombre, apellido, email, password) VALUES (?, ?, ?, ?)";

                conexion.query(registrar, [nom, ape, email, pass], function (error) {
                    if (error) {
                        console.error("Error al registrar el usuario:", error);
                        res.status(500).send("Error al registrar el usuario.");
                    } else {
                        mensaje = "Usuario registrado con éxito.";
                        console.log("Datos almacenados correctamente");
                        res.render("registro", {mensaje});
                    }
                });
            }
        }
    });
});


//configurar puerto del servidor local
app.listen(3000, function(){
    console.log("servidor creado http://localhost:3000")
});

//middleware
