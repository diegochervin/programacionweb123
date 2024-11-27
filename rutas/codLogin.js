const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bcrypt = require("bcrypt"); // Importar bcrypt
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  
});

const getConnection = ()=> connection;

// Manejo del login
router.post("/login", (req, res) => {
    const { email, pass } = req.body;

    if (!email || !pass) {
        return res.render("login", {
            mensaje: "Todos los campos son obligatorios.",
            redirigirRegistro: false,
        });
    }

    const buscar = "SELECT * FROM usuario WHERE email = ?";
    connection.query(buscar, [email], (error, rows) => {
        if (error) {
            console.error("Error en la consulta:", error);
            return res.status(500).send("Error en el servidor.");
        }

        if (rows.length === 0) {
            return res.render("login", {
                mensaje: "El correo no está registrado. ¿Deseas registrarte?",
                redirigirRegistro: true,
            });
        }

        const user = rows[0];

        // Comparar la contraseña con el hash almacenado
        bcrypt.compare(pass, user.password, (err, isMatch) => {
            if (err) {
                console.error("Error al comparar contraseñas:", err);
                return res.status(500).send("Error en el servidor.");
            }

            if (isMatch) {
                // Verificar el valor de la columna "perfil"
                if (user.perfil === null) {
                    console.log("Usuario sin privilegios de admin.");
                } else if (user.perfil === "admin") {
                    console.log("Usuario con privilegios de admin.");
                }

                req.session.usuario = user;
                res.redirect("/"); // Redirige al home o página principal
            } else {
                res.render("login", {
                    mensaje: "Contraseña incorrecta.",
                    redirigirRegistro: false,
                });
            }
        });
    });
});

// Manejo del registro
router.post("/validar", (req, res) => {
    const { nom, ape, email, pass } = req.body;

    if (!nom || !ape || !email || !pass) {
        return res.render("registro", { mensaje: "Todos los campos son obligatorios." });
    }

    const buscar = "SELECT * FROM usuario WHERE email = ?";
    connection.query(buscar, [email], (error, rows) => {
        if (error) {
            console.error("Error al buscar el email:", error);
            res.status(500).send("Error en el servidor.");
        } else if (rows.length > 0) {
            res.render("registro", { mensaje: "El email ya está registrado." });
        } else {
            // Encriptar la contraseña antes de guardarla
            bcrypt.hash(pass, 10, (err, hash) => {
                if (err) {
                    console.error("Error al encriptar la contraseña:", err);
                    return res.status(500).send("Error en el servidor.");
                }

                const registrar = "INSERT INTO usuario (nombre, apellido, email, password) VALUES (?, ?, ?, ?)";
                connection.query(registrar, [nom, ape, email, hash], (error) => {
                    if (error) {
                        console.error("Error al registrar el usuario:", error);
                        res.status(500).send("Error al registrar el usuario.");
                    } else {
                        res.render("registro", { mensaje: "Usuario registrado con éxito." });
                    }
                });
            });
        }
    });
});

module.exports = router;
