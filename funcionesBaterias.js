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
              <input class="form-control pl-2 cantidad_comprar" type="number" id="cantidad-${bateria.id}" name="cantidad" value="1">
            </span>
          </div>
          <button id="agregar-carrito-${bateria.id}" class="btn btn-outline-success">Agregar al carrito</button>
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
document.getElementById(`agregar-carrito-${bateria.id}`).addEventListener('click', function() {
  agregarAlCarrito(bateria);})


  let botonAgregar = document.getElementById(`agregar-carrito-${bateria.id}`);
  botonAgregar.addEventListener('click', () => {
    agregarAlCarrito(bateria.id, local, carrito); // Llamar a la función con el ID de la batería
  })

  function agregarAlCarrito(bateriaId, arrayStock, arrayCarrito) {
    // Buscar en el array stock la batería elegida
    let bateriaComprado = arrayStock.find(bateria => bateria.id == bateriaId);
  
    if (bateriaComprado) {
      // Obtener la cantidad ingresada
      let cantidadIngresada = Number(document.getElementById(`cantidad-${bateriaId}`).value);
  
      // Verificar que la cantidad ingresada no exceda el stock disponible
      if (cantidadIngresada > bateriaComprado.stock) {
        console.log(`No es posible agregar ${cantidadIngresada} unidades. Solo tenemos ${bateriaComprado.stock} en stock.`);
      } else {
        // Buscar si la batería ya está en el carrito
        let bateriaEnCarrito = arrayCarrito.find(bat => bat.id == bateriaComprado.id);
  
        if (!bateriaEnCarrito) {
          // Si no está en el carrito, agregar la batería con la cantidad ingresada
          bateriaComprado.cantidad = cantidadIngresada;
          arrayCarrito.push(bateriaComprado);
          console.log(`Se han agregado ${cantidadIngresada} unidades de la batería con ID ${bateriaId}.`);
        } else {
          // Si ya está en el carrito, verificar si la cantidad sumada supera el stock disponible
          if ((cantidadIngresada + bateriaEnCarrito.cantidad) > bateriaComprado.stock) {
            console.log(`No es posible agregar ${cantidadIngresada} unidades. Ya tienes ${bateriaEnCarrito.cantidad} en el carrito y solo tenemos ${bateriaComprado.stock} en stock.`);
          } else {
            // Si no supera el stock, agregar la cantidad al carrito
            bateriaEnCarrito.cantidad += cantidadIngresada;
            console.log(`Se han agregado ${cantidadIngresada} unidades adicionales de la batería con ID ${bateriaId}.`);
          }
        }
  
        // Actualizar el carrito en localStorage
        localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
      }
    } else {
      console.log(`Batería con ID ${bateriaId} no encontrada.`);
    }
  }