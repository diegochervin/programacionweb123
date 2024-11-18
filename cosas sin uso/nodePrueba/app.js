// guardarDatos.js

const axios = require('axios');
const fs = require('fs');

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

  // Cargar los datos desde el archivo JSON
  fetch('productos.json')
    .then(response => response.json())
    .then(data => {
      generarProductos(data.resultado); // Llamar a la función que generará las tarjetas
    })
    .catch(error => console.log('Error al cargar el archivo JSON:', error));

  // Función para generar las tarjetas de productos
  function generarProductos(productos) {
      const container = document.getElementById("productos-container");

      productos.forEach(producto => {
          const productoDiv = document.createElement("div");
          productoDiv.classList.add("col-md-4", "mb-4");  // Agregar clases de Bootstrap para la columna y espaciado

          productoDiv.innerHTML = `
              <div class="card h-100">
                  <img src="${producto.imagenes[0]}" class="card-img-top" alt="${producto.nombre}" />
                  <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text"><strong>Marca:</strong> ${producto.marca}</p>
                      <p class="card-text"><strong>Categoría:</strong> ${producto.categoria}</p>
                      <p class="card-text"><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
                      <p class="card-text"><strong>Stock:</strong> ${producto.nivel_stock}</p>
                  </div>
                  <div class="card-footer">
                      <a href="${producto.link}" class="btn btn-primary" target="_blank">Ver más detalles</a>
                  </div>
              </div>
          `;
          
          container.appendChild(productoDiv);
      });
  }