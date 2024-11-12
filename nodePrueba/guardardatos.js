const axios = require('axios');
const fs = require('fs');  // Requiere el módulo 'fs' para guardar archivos

var data = JSON.stringify({
  "user_id": 9409,
  "token": "9cism8eor7p"
});

var config = {
  method: 'post',
  url: 'https://clientes.elit.com.ar/v1/api/productos?limit=100',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  // Guardar la respuesta en un archivo JSON
  fs.writeFileSync('productos.json', JSON.stringify(response.data, null, 2)); 
  console.log('Datos guardados en productos.json');
})
.catch(function (error) {
  console.log(error);
});
