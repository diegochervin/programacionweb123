// Array con datos de productos
const productos = [
    {
      imagen: "./static/img/12x65.jpg",
      precio: 100,
      stock: 10,
      marca: "XYZ"
    },
    {
      imagen: "./static/img/ub620.jpg",
      precio: 200,
      stock: 5,
      marca: "ABC"
    },
    {
      imagen: "./static/img/m22gd.jpg",
      precio: 150,
      stock: 8,
      marca: "DEF"
    }
  ];
  
  // Función para generar las tarjetas
  function generarTarjetas() {
    const container = document.getElementById('tarjetas-container');
    
    productos.forEach(producto => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta');
      
      tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="Producto">
        <div class="informacion">
          <p>Precio: $${producto.precio}</p>
          <p>Stock: ${producto.stock}</p>
          <p>Marca: ${producto.marca}</p>
          <div class="cantidad">
            <label for="cantidad-${producto.marca}">Cantidad:</label>
            <input type="number" id="cantidad-${producto.marca}" name="cantidad" min="1" max="${producto.stock}" value="1">
          </div>
          <button class="agregar-carrito">Agregar al carrito</button>
        </div>
      `;
      
      container.appendChild(tarjeta);
    });
  }
  
  // Llamamos a la función para generar las tarjetas cuando cargue la página
  window.onload = generarTarjetas;