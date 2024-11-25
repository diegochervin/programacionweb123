const mysql = require("mysql");

// Conexión a la base de datos
let conexion = mysql.createConnection({
    host: "localhost",
    database: "ferrobat",
    user: "root",
    password: ""
});

conexion.connect((error) => {
    if (error) {
        throw error;
    } else {
        console.log(`Conexión exitosa a la BD`);
    }
});

function consulta(instruccion) {
    conexion.query(instruccion, (error, data) => {
        if (error) {
            throw error;
        } else {
            console.log(`Instrucción ejecutada: ${instruccion}`);
            for (let objeto of data) {
                console.log(objeto.marca, objeto.modelo, objeto.precio, objeto.stock);
            }
        }
    });
}

function insertarBateria(marca, modelo, precio, stock) {
    const insert = `INSERT INTO baterias (marca, modelo, precio, stock) 
                    VALUES ("${marca}", "${modelo}", ${precio}, ${stock})`;

    conexion.query(insert, (err, resultado) => {
        if (err) {
            throw err;
        } else {
            console.log("Batería insertada correctamente");
            console.log(resultado);
        }
    });
}

function actualizarStock(id, nuevoStock) {
    const update = `UPDATE baterias 
                    SET stock = ${nuevoStock} 
                    WHERE id = ${id}`;

    conexion.query(update, (err, resultado) => {
        if (err) {
            console.error("Error al actualizar el stock:", err);
        } else {
            console.log(`Stock actualizado correctamente para ID ${id}.`);
            console.log(`Filas afectadas: ${resultado.affectedRows}`);
        }
    });
}

module.exports = {
    consulta,
    insertarBateria,
    actualizarStock,
};
