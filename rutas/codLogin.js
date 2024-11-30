const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bcrypt = require("bcrypt"); // Importar bcrypt
const dotenv = require("dotenv");
dotenv.config();

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

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
        bcrypt.compare(pass, user.password, (err, isMatch) => {
            if (err) {
                console.error("Error al comparar contraseñas:", err);
                return res.status(500).send("Error en el servidor.");
            }

            if (isMatch) {
                req.session.usuario = {
                    id: user.id,
                    email: user.email,
                    nombre: user.nombre,
                    apellido: user.apellido,
                    perfil: user.perfil,
                };

                res.redirect("/");
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
            return res.status(500).send("Error en el servidor.");
        }

        if (rows.length > 0) {
            return res.render("registro", { mensaje: "El email ya está registrado." });
        }

        bcrypt.hash(pass, 10, (err, hash) => {
            if (err) {
                console.error("Error al encriptar la contraseña:", err);
                return res.status(500).send("Error en el servidor.");
            }

            const registrar = "INSERT INTO usuario (nombre, apellido, email, password) VALUES (?, ?, ?, ?)";
            connection.query(registrar, [nom, ape, email, hash], (error, results) => {
                if (error) {
                    console.error("Error al registrar el usuario:", error);
                    return res.status(500).send("Error al registrar el usuario.");
                }

                // Guardar el usuario registrado en la sesión
                req.session.usuario = {
                    id: results.insertId,
                    email: email,
                    nombre: nom,
                    apellido: ape,
                    perfil: null,
                };

                // Mensaje de bienvenida
                req.session.mensaje = `¡Registro exitoso! Bienvenido, ${nom} ${ape}.`;

                res.redirect("/");
            });
        });
    });
});

module.exports = router;
