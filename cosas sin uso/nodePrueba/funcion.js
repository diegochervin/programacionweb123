// Cargar los datos desde el archivo JSON
fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    // Llamar a la función que generará las tarjetas con los productos cargados
    generarProductos(data.resultado);
    // Llamar a la función para generar los filtros de marcas (asumido que los datos contienen "marca")
    generarFiltrosDeMarca(data.resultado);
  })
  .catch(error => console.log('Error al cargar el archivo JSON:', error));

// Función para generar las tarjetas de productos
function generarProductos(productos) {
  const container = document.getElementById("productos-container");
  container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos productos

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

// Función para manejar los filtros y el ordenamiento
function aplicarFiltrosYOrdenamiento() {
  // Obtener la marca seleccionada
  let marcaSeleccionada = document.querySelector('input[name="filter-marca"]:checked')?.value.toLowerCase();

  // Obtener la opción de ordenamiento seleccionada
  let ordenSeleccionada = document.querySelector('input[name="order-by"]:checked')?.value.toLowerCase();

  // Obtener el valor del buscador
  let busqueda = document.getElementById('buscar').value.toLowerCase();

  // Filtrar por marca
  let productosFiltrados = productos.filter(producto => {
    let productoMarca = producto.marca.toLowerCase();
    return marcaSeleccionada === '' || productoMarca === marcaSeleccionada;
  });

  // Filtrar por stock
  if (document.getElementById('radio1').checked) {
    productosFiltrados = productosFiltrados.filter(producto => producto.nivel_stock > 0);
  }

  // Utilizar la función buscarData para buscar y obtener el resultado
  let productosBuscados = buscarData(productosFiltrados, busqueda);

  // Ordenar el array filtrado
  if (ordenSeleccionada === 'alfabetoaz') {
    productosBuscados.sort((a, b) => a.modelo.localeCompare(b.modelo));
  } else if (ordenSeleccionada === 'alfabetoza') {
    productosBuscados.sort((a, b) => b.modelo.localeCompare(a.modelo));
  } else if (ordenSeleccionada === 'preciomenor') {
    productosBuscados.sort((a, b) => a.precio - b.precio);
  } else if (ordenSeleccionada === 'preciomayor') {
    productosBuscados.sort((a, b) => b.precio - a.precio);
  }

  // Renderizar los productos filtrados y ordenados
  generarProductos(productosBuscados);
}

// Función para buscar en un array de productos
function buscarData(array, valor) {
  let busqueda = array.filter(producto => 
    producto.modelo.toLowerCase().includes(valor) || 
    producto.marca.toLowerCase().includes(valor)
  );

  if (busqueda.length === 0) {
    coincidencias.innerText = `No se encontraron coincidencias con "${valor}".`;
  } else {
    coincidencias.innerText = "";
  }

  return busqueda; // Devuelve el array de productos encontrados
}

// Función para generar los filtros de marca
function generarFiltrosDeMarca(productos) {
  const filtroContainer = document.getElementById('filtro-marcas-dinamico');
  filtroContainer.innerHTML = ''; // Limpiar el contenedor

  // Crear el filtro para "TODAS"
  const filtroTodas = document.createElement('div');
  filtroTodas.innerHTML = `
    <input type="radio" name="filter-marca" id="filtro-marca-todos" value="" onclick="aplicarFiltrosYOrdenamiento()" checked>
    <label for="filtro-marca-todos">TODAS</label>
  `;
  filtroContainer.appendChild(filtroTodas);

  // Extraer las marcas únicas del array de productos
  const marcasExistentes = [...new Set(productos.map(producto => producto.marca))];

  // Crear filtros para cada marca en el array marcasExistentes
  marcasExistentes.forEach((marca) => {
    const filtroMarca = document.createElement('div');
    filtroMarca.innerHTML = `
      <input type="radio" name="filter-marca" id="filtro-marca-${marca}" value="${marca}" onclick="aplicarFiltrosYOrdenamiento()">
      <label for="filtro-marca-${marca}">${marca}</label>
    `;
    filtroContainer.appendChild(filtroMarca);
  });
}

// Variable para almacenar los productos
let productos = [];

// Llamar a la función para cargar los productos
fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    productos = data.resultado;  // Asumimos que los datos están en "resultado"
    generarProductos(productos);  // Renderizar los productos
    generarFiltrosDeMarca(productos);  // Generar los filtros de marcas
  })
  .catch(error => console.log('Error al cargar el archivo JSON:', error));
