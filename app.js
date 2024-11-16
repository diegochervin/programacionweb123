//para tener dispponible todo lo de mysql

const mysql = require('mysql');
// console.log(mysql)
// console.log(`El archivo fue conectado con exito`)

//crear la conexion usar createconnection pasarle como parametro un objeto

let conexion = mysql.createConnection({
    host: "localhost",
    database: "ferrobat",
    user: "root",
    password: ""
})
//a conectarnos:

conexion.connect(function(error){
    if (error){
        throw error
        
    }else{
        console.log("conexion exitosa")
        
    }
})

//consulta para todas las tablas select * from baterias
 const consultaGeneral = `select * from baterias`
const consultaMarca = `select * from baterias where marca = "moura"` 

// DEVOLVER DE LA BD LOS REGISTROS ID IMPAR
const consultaIDImpar = `SELECT * FROM baterias WHERE ID % 2 != 0`
const insertDiego = `INSERT INTO baterias ( marca, modelo, precio, stock, imagen) VALUES ("prueba1124", "josesit123a", 124443, 110, "prueba123.jpg")`

conexion.query(insertDiego, function(err, resultado){
    
    if(err){
        throw err
        
    } else {
        console.log(resultado)
    }
    
})

conexion.end()