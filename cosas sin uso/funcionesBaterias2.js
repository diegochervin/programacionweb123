let containerBaterias = document.getElementById('containerBaterias');

function renderBaterias(local, arrayStock, arrayCarrito) {
 
  containerBaterias.innerHTML = '';

  for (let bateria of local) {
    console.log(`Renderizando batería: ${bateria.modelo}, ${bateria.marca}`);

    let bateriaNuevoDiv = document.createElement("div");
    bateriaNuevoDiv.className = "col-12 col-md-6 col-lg-4";
    bateriaNuevoDiv.innerHTML = `
      <div id="${bateria.id}" class="card product-card" data-marca="${bateria.marca}" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;" src="static/img/${bateria.imagen}" alt="${bateria.modelo}" onerror="this.onerror=null; this.src='static/img/default.png';">
        <div class="card-body">
          <h4 class="card-title">${bateria.modelo}</h4>
          <p>Marca: ${bateria.marca}</p>
          <p class="precio">Precio: $${bateria.precio}</p>
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

    let botonAgregar = document.getElementById(`agregar-carrito-${bateria.id}`);
    botonAgregar.addEventListener('click', () => agregarAlCarrito(bateria.id, local, carrito));
  }
}

// Función para agregar productos al carrito
function agregarAlCarrito(bateriaId, local, carrito) {
  let bateriaComprado = local.find(bateria => bateria.id == bateriaId);
  
  if (bateriaComprado) {
    let cantidadIngresada = Number(document.getElementById(`cantidad-${bateriaId}`).value);
    
    if (cantidadIngresada > bateriaComprado.stock) {
      alert(`No es posible agregar ${cantidadIngresada} unidades. Solo tenemos ${bateriaComprado.stock} en stock.`);
    } else {
      let bateriaEnCarrito = carrito.find(bat => bat.id == bateriaComprado.id);
      
      if (!bateriaEnCarrito) {
        bateriaComprado.cantidad = cantidadIngresada;
        carrito.push(bateriaComprado);
        alert(`Se han agregado ${cantidadIngresada} unidades de la batería ${bateriaComprado.modelo}.`);
      } else {
        if ((cantidadIngresada + bateriaEnCarrito.cantidad) > bateriaComprado.stock) {
          alert(`No es posible agregar ${cantidadIngresada} unidades. Ya tienes ${bateriaEnCarrito.cantidad} en el carrito y solo tenemos ${bateriaComprado.stock} en stock.`);
        } else {
          bateriaEnCarrito.cantidad += cantidadIngresada;
          alert(`Se han agregado ${cantidadIngresada} unidades adicionales de la batería ${bateriaComprado.modelo}. Ahora tienes ${bateriaEnCarrito.cantidad} en total.`);
        }
      }
      
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }
}

document.getElementById('carrito').addEventListener('click', (event) => {
  event.preventDefault();
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  mostrarCarritoConFormato(carrito);
});

function mostrarCarritoConFormato(carrito) {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
  } else {
    let mensaje = "Carrito de compras:\n";
    carrito.forEach(bateria => {
      mensaje += `\n Batería ID #${bateria.id} - Marca: ${bateria.marca}, Modelo: ${bateria.modelo}, Precio: $${bateria.precio}, Cantidad en carrito: ${bateria.cantidad}, Total: $${(bateria.cantidad * bateria.precio)}`;
    });
    
    alert(mensaje);
  }
}

// Filtros y búsqueda
let coincidencias = document.getElementById('coincidencias');
let buscador = document.getElementById('buscar');

document.getElementById('filtro-marca').addEventListener('change', () => {
  console.log("Evento 'change' en filtro-marca detectado");
  aplicarFiltrosYOrdenamientoyBusqueda(local, carrito);
});

document.getElementById('ordenarModelos').addEventListener('change', () => {
  console.log("Evento 'change' en ordenarModelos detectado");
  aplicarFiltrosYOrdenamientoyBusqueda(local, carrito);
});

buscador.oninput = () => {
  console.log("Evento 'input' en el buscador detectado");
  aplicarFiltrosYOrdenamientoyBusqueda(local, carrito);
};

function aplicarFiltrosYOrdenamientoyBusqueda(local, carrito) {
  console.log("Función de filtros y búsqueda ejecutada");

  let marcaSeleccionada = document.getElementById('filtro-marca').value.toLowerCase();
  let ordenSeleccionada = document.getElementById('ordenarModelos').value.toLowerCase();
  let valor = buscador.value.toLowerCase();

  // Filtrar según marca
  let productosFiltrados = local.filter(bateria => {
    return (marcaSeleccionada === 'todas' || bateria.marca.toLowerCase() === marcaSeleccionada) &&
           (bateria.modelo.toLowerCase().includes(valor));
  });

  // Ordenar resultados
  if (ordenSeleccionada === 'modelo') {
    productosFiltrados.sort((a, b) => a.modelo.localeCompare(b.modelo));
  } else if (ordenSeleccionada === 'precio') {
    productosFiltrados.sort((a, b) => a.precio - b.precio);
  }

  // Renderizar resultados
  renderBaterias(productosFiltrados, local, carrito);
}

// Llamar a renderBaterias con el array local al cargar la página
renderBaterias(local, carrito);