let containerBaterias = document.getElementById("containerBaterias");
renderBaterias(local, carrito);

// Función que renderiza las baterías
function renderBaterias(local, carrito) {
  // Limpia el container antes de volver a agregar productos
  containerBaterias.innerHTML = '';

  // Recorre cada batería y genera la tarjeta
  for (let bateria of local) {
    console.log("Generando tarjeta para:", bateria);
    let bateriaNuevoDiv = document.createElement("div");
    bateriaNuevoDiv.className = "col-12 col-md-6 col-lg-4";
    bateriaNuevoDiv.innerHTML = `
      <div id="${bateria.id}" class="card product-card" data-marca="${bateria.marca}" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;" src="static/img/${bateria.imagen}" alt="${bateria.modelo}">
        <div class="card-body">
          <h4 class="card-title">${bateria.modelo}</h4>
          <p>Marca: ${bateria.marca}</p>
          <p class="precio">Precio: ${bateria.precio}</p>
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

    // Agregamos el event listener al botón dentro del ciclo for
    let botonAgregar = document.getElementById(`agregar-carrito-${bateria.id}`);
    botonAgregar.addEventListener('click', () => {
      console.log("local: ", local);
      console.log("carrito: ", carrito);
      agregarAlCarrito(bateria.id, local, carrito);
    });
  }
}

// Función para agregar productos al carrito
function agregarAlCarrito(bateriaId, arrayStock, carrito) {
  // Buscar en el array stock la batería elegida
  let bateriaComprado = arrayStock.find(bateria => bateria.id == bateriaId);

  if (bateriaComprado) {
    // Obtener la cantidad ingresada
    let cantidadIngresada = Number(document.getElementById(`cantidad-${bateriaId}`).value);

    // Verificar que la cantidad ingresada no exceda el stock disponible
    if (cantidadIngresada > bateriaComprado.stock) {
      alert(`No es posible agregar ${cantidadIngresada} unidades. Solo tenemos ${bateriaComprado.stock} en stock.`);
    } else {
      // Buscar si la batería ya está en el carrito
      let bateriaEnCarrito = carrito.find(bat => bat.id == bateriaComprado.id);

      if (!bateriaEnCarrito) {
        // Si no está en el carrito, agregar la batería con la cantidad ingresada
        let bateriaClon = { ...bateriaComprado, cantidad: cantidadIngresada }; // Clonar objeto
        carrito.push(bateriaClon);
        alert(`Se han agregado ${cantidadIngresada} unidades de la batería ${bateriaComprado.modelo}.`);
      } else {
        // Si ya está en el carrito, verificar si la cantidad sumada supera el stock disponible
        if ((cantidadIngresada + bateriaEnCarrito.cantidad) > bateriaComprado.stock) {
          alert(`No es posible agregar ${cantidadIngresada} unidades. Ya tienes ${bateriaEnCarrito.cantidad} en el carrito y solo tenemos ${bateriaComprado.stock} en stock.`);
        } else {
          // Si no supera el stock, agregar la cantidad al carrito
          bateriaEnCarrito.cantidad += cantidadIngresada;
          alert(`Se han agregado ${cantidadIngresada} unidades adicionales de la batería ${bateriaComprado.modelo}. Ahora tienes ${bateriaEnCarrito.cantidad} en total.`);
        }
      }

      // Actualizar el carrito en localStorage
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }
}

// Mover el eventListener para el carrito fuera de agregarAlCarrito
document.getElementById('carrito').addEventListener('click', (event) => {
  // Prevenir que el enlace recargue la página
  event.preventDefault();
  // Recuperar el carrito del localStorage
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  mostrarCarritoConFormato(carrito);
});

// Función para mostrar el carrito
function mostrarCarritoConFormato(arrayCarrito) {
  if (arrayCarrito.length === 0) {
    alert("El carrito está vacío.");
  } else {
    // Filtrar las baterías que tienen cantidad mayor a 0
    let bateriasConCantidad = arrayCarrito.filter(bateria => bateria.cantidad > 0);
    
    if (bateriasConCantidad.length === 0) {
      alert("No hay productos con cantidad en el carrito.");
      return;
    }

    // Construir una cadena de texto para mostrar en el alert
    let mensaje = "Carrito de compras:\n";
    bateriasConCantidad.forEach(bateria => {
      mensaje += `\n Bateria ID #${bateria.id} - Marca: ${bateria.marca}, Modelo: ${bateria.modelo}, Precio: $ ${bateria.precio}, Cantidad en carrito: ${bateria.cantidad}, Total $ ${(bateria.cantidad * bateria.precio)}`;
    });

    // Mostrar toda la información en un solo alert
    alert(mensaje);
  }
}


let coincidencias = document.getElementById('coincidencias');
let buscador = document.getElementById('buscar');


// Función para manejar los filtros y el ordenamiento
function aplicarFiltrosYOrdenamiento() {
  let marcaSeleccionada = document.getElementById('filtro-marca').value.toLowerCase();
  let ordenSeleccionada = document.getElementById('ordenarModelos').value.toLowerCase();
  let busqueda = buscador.value.toLowerCase();
  // Filtrar por marca
  let bateriasFiltradas = local.filter(bateria => {
    let productoMarca = bateria.marca.toLowerCase();
    return marcaSeleccionada === '' || productoMarca === marcaSeleccionada;
  });

  if (radio1.checked) {
    bateriasFiltradas = bateriasFiltradas.filter(bateria => bateria.stock > 0);
  }

  // Ordenar el array filtrado
  if (ordenSeleccionada === 'alfabetoaz') {
    bateriasFiltradas.sort((a, b) => a.modelo.localeCompare(b.modelo));
  } else if (ordenSeleccionada === 'alfabetoza') {
    bateriasFiltradas.sort((a, b) => b.modelo.localeCompare(a.modelo));
  } else if (ordenSeleccionada === 'preciomenor') {
    bateriasFiltradas.sort((a, b) => a.precio - b.precio);
  } else if (ordenSeleccionada === 'preciomayor') {
    bateriasFiltradas.sort((a, b) => b.precio - a.precio);
  }
 
  let bateriaBuscada = buscarData(bateriasFiltradas, busqueda)


  // Renderizar los productos filtrados y ordenados
  renderBaterias(bateriaBuscada, local, carrito);
}

// Inicialmente renderiza todas las baterías


// Agregar los eventos onchange para aplicar filtros y ordenamiento
document.getElementById('filtro-marca').addEventListener('change', aplicarFiltrosYOrdenamiento);
document.getElementById('ordenarModelos').addEventListener('change', aplicarFiltrosYOrdenamiento);
document.getElementById(`buscar`).addEventListener('input', aplicarFiltrosYOrdenamiento)





// Función para buscar en un array de baterías
function buscarData(array, valor) {
  // Verificar si 'array' es un array antes de aplicar 'filter'
  if (!Array.isArray(array)) {
    console.error("El argumento no es un array:", array);
    return []; // Retorna un array vacío si no es un array
  }

  let busqueda = array.filter(bateria => 
    bateria.modelo.toLowerCase().includes(valor) || 
    bateria.marca.toLowerCase().includes(valor)
  );

  if (busqueda.length === 0) {
    coincidencias.innerText = `No se encontraron coincidencias con "${valor}".`;
  } else {
    coincidencias.innerText = "";
  }

  return busqueda; // Devuelve el array de baterías encontradas
}


let radio1 = document.getElementById('flexRadioDefault1');
let radio2 = document.getElementById('flexRadioDefault2');

radio1.addEventListener("change", aplicarFiltrosYOrdenamiento);
radio2.addEventListener("change", aplicarFiltrosYOrdenamiento);