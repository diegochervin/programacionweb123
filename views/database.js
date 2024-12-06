
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQLHOST, // Nombre de la variable de entorno
  database: process.env.MYSQLDATABASE, // Nombre de la base de datos
  user: process.env.MYSQLUSER, // Usuario de la base de datos
  password: process.env.MYSQLPASSWORD, // Contraseña de la base de datos
  connectionLimit: 10, // Número máximo de conexiones simultáneas
});

const getConnection = () => pool.getConnection(); // Obtener una conexión del pool



module.exports = {
  getConnection,
  pool, // Exporta el pool si necesitas usarlo directamente
};
