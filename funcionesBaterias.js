let containerBaterias = document.getElementById("containerBaterias");

function renderBaterias(local) {
  // Limpia el container antes de volver a agregar productos
  containerBaterias.innerHTML = '';

  // Recorre cada batería y genera la tarjeta
  for (let bateria of local) {
    let bateriaNuevoDiv = document.createElement("div");
    bateriaNuevoDiv.className = "col-12 col-md-6 col-lg-4";
    bateriaNuevoDiv.innerHTML = `
      <div id="${bateria.id}" class="card product-card" data-marca="${bateria.marca}" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;" src="static/img/${bateria.imagen}" alt="${bateria.modelo}">
        <div class="card-body">
          <h4 class="card-title">${bateria.modelo}</h4>
          <p>Marca: ${bateria.marca}</p>
          <p class="">Precio: ${bateria.precio}</p>
          <p class="">Stock: ${bateria.stock}</p>
          <div class="col-md-3 pull-left mt-2 pl-0 mb-3 cantidad_div">
            <label class="control-label cantidad mt-0">Cantidad</label>
            <span class="bmd-form-group is-filled">
              <input class="form-control pl-2 cantidad_comprar" type="number" id="cantidad" name="cantidad" value="1">
            </span>
          </div>
          <button id="agregar-carrito" class="btn btn-outline-success">Agregar al carrito</button>
        </div>
      </div>`;
    containerBaterias.append(bateriaNuevoDiv);
  }
}

// Función que combina el filtro y el ordenamiento
function aplicarFiltrosYOrdenamiento() {
  let marcaSeleccionada = document.getElementById('filtro-marca').value.toLowerCase();
  let ordenSeleccionada = document.getElementById('ordenarModelos').value.toLowerCase();
  
  // Filtrar por marca
  let bateriasFiltradas = local.filter(bateria => {
    let productoMarca = bateria.marca.toLowerCase();
    return marcaSeleccionada === '' || productoMarca === marcaSeleccionada;
  });

  // Ordenar el array filtrado
  if (ordenSeleccionada === 'alfabetoaz') {
    bateriasFiltradas.sort((a, b) => a.modelo.localeCompare(b.modelo)); // Ordena alfabéticamente de A a Z
  } else if (ordenSeleccionada === 'alfabetoza') {
    bateriasFiltradas.sort((a, b) => b.modelo.localeCompare(a.modelo)); // Ordena alfabéticamente de Z a A
  } else if (ordenSeleccionada === 'preciomenor') {
    bateriasFiltradas.sort((a, b) => a.precio - b.precio); // Ordena por precio de menor a mayor
  } else if (ordenSeleccionada === 'preciomayor') {
    bateriasFiltradas.sort((a, b) => b.precio - a.precio); // Ordena por precio de mayor a menor
  }

  // Renderizar los productos filtrados y ordenados
  renderBaterias(bateriasFiltradas);
}

// Inicialmente renderiza todas las baterías
renderBaterias(local);

// Agregar los eventos onchange para aplicar filtros y ordenamiento
document.getElementById('filtro-marca').addEventListener('change', aplicarFiltrosYOrdenamiento);
document.getElementById('ordenarModelos').addEventListener('change', aplicarFiltrosYOrdenamiento);