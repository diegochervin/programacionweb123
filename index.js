const express = require("express");

const mysql = require("mysql");

let conexion = mysql.createConnection({
    host: "localhost",
    database: "ferrobat",
    user: "root",
    password: ""
})


//objetos para llamar los metodos express

const app = express();

// app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/", function(req,res){
    res.render("registro")
});

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
            if (rows.length > 0) {
                console.log("Mail ya existe");
                res.status(400).send("El email ya está registrado.");
            } else {
                // Si no existe, registrar el nuevo usuario
                const registrar = "INSERT INTO usuario (nombre, apellido, email, password) VALUES (?, ?, ?, ?)";

                conexion.query(registrar, [nom, ape, email, pass], function (error) {
                    if (error) {
                        console.error("Error al registrar el usuario:", error);
                        res.status(500).send("Error al registrar el usuario.");
                    } else {
                        console.log("Datos almacenados correctamente");
                        res.send("Usuario registrado con éxito.");
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
