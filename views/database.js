
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql.createPool({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  connectionLimit: 10, // Número máximo de conexiones simultáneas
});

const getConnection = () => pool.getConnection(); // Obtener una conexión del pool

module.exports = {
  getConnection,
  pool, // Exporta el pool si necesitas usarlo directamente
};
