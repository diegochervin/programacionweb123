const express = require("express");
const session = require("express-session");
const mysql = require("mysql");
const loginRoutes = require("./rutas/codLogin"); // Rutas específicas de login/registro
const app = express();

// Configuración de conexión MySQL
let conexion = mysql.createConnection({
    host: "localhost",
    database: "ferrobat",
    user: "root",
    password: ""
});


// Configuraciones generales
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

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

// Rutas específicas
app.use(loginRoutes); // Esto toma todas las rutas definidas en `codLogin.js`

// Configuración de puerto
app.listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000");
});
 