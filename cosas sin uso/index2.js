const express = require("express");
const database = require("./database");
const app = express();

app.set("port", 3000); // Cambia a un puerto no utilizado (como 3000)

app.listen(app.get("port"), () => {
  console.log("Escuchando la conexión en " + app.get("port"));
});

app.get("/baterias", async (req, res) => {
  try {
    const connection = await database.getConnection();
    const resultado = await connection.query("SELECT * FROM baterias");
    res.json(resultado); // Enviar resultados al cliente en formato JSON
    console.log(resultado);
    connection.end(); // Cierra la conexión después de usarla
  } catch (error) {
    console.error("Error al obtener datos de baterías:", error);
    res.status(500).send("Error al obtener datos de baterías");
  }
});
