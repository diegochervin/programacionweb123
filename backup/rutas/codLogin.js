const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
const app = express();

let conexion = mysql.createConnection({
    host: "localhost",
    database: "ferrobat",
    user: "root",
    password: ""
})

app.post("/")
//objetos para llamar los metodos express

