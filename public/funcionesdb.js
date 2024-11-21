const mysql = require("mysql");


// Conexión a la base de datos
let conexion = mysql.createConnection({
    host: "localhost",
    database: "ferrobat",
    user: "root",
    password: ""
});

conexion.connect((error)=>{
    if(error){
        throw error
        
    }else {
        console.log(`conexion exitosa a la BD`)
    }
})



function consulta(instruccion) {
    conexion.query(instruccion, (error, data) => {
        if (error) {
            throw error;
        } else {
            console.log(`Esta es la instrucción ejecutada: ${instruccion}`);
            // Iterar sobre los resultados y mostrarlos
            for (let objeto of data) {
                console.log(objeto.marca, objeto.modelo, objeto.precio, objeto.stock);
            }
        }
    });
}

function insertarBateria(marca, modelo, precio, stock) {
    // Crear la instrucción de inserción
    const insert = `INSERT INTO baterias (marca, modelo, precio, stock) 
                    VALUES ("${marca}", "${modelo}", ${precio}, ${stock})`;

    // Ejecutar la consulta de inserción
    conexion.query(insert, function(err, resultado) {
        if (err) {
            throw err; // Lanzar error si ocurre algún problema
        } else {
            console.log('Batería insertada correctamente');
            console.log(resultado);

            // Después de insertar, hacer una consulta para obtener todas las baterías
            let consultaGeneral = `SELECT * FROM baterias`;
            consulta(consultaGeneral); // Llamar a la función consulta para mostrar los resultados
        }
    });
}

