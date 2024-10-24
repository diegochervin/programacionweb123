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



let botonCarrito = document.getElementById("botonCarrito")

botonCarrito.addEventListener("click", ()=>{
  imprimirCarrito(carrito)
})

//imprimirCarrito
function imprimirCarrito(carrito){
  modalBodyCarrito.innerHTML = ""
  carrito.forEach((productoCarrito)=>{
      //usar nodo donde vamos a imprimir modalBodyCarrito
      modalBodyCarrito.innerHTML += `
      <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
               <div class="card-body">
                      <h4 class="card-title">${productoCarrito.modelo}</h4>
                  
                       <p class="card-text">Precio unitario $${productoCarrito.precio}</p>
                       <p class="card-text" id="totalUnidadesCard${productoCarrito.id}">Total de unidades ${productoCarrito.cantidad}</p> 
                       <p class="card-text" id="subtotalCard${productoCarrito.id}">SubTotal ${productoCarrito.cantidad * productoCarrito.precio}</p>
                      
            
                       
                    
                       <input class="form-control pl-2 cantidad_comprar" type="number" id="cantidadCarrit-${productoCarrito.id}" name="cantidad" value="${productoCarrito.cantidad}">
                       <button class= "btn btn-danger" ><i class="fas fa-trash-alt"></i></button>
               </div>    
          </div>`
  })
  //otro ciclio para reccorer el array y pasarle eventos a los btns sumarUnidad, restarUnidad y eliminar
  carrito.forEach((productoCarrito)=>{
    let inputCantidad = document.getElementById(`cantidadCarrit-${productoCarrito.id}`);
    
    inputCantidad.addEventListener("change", () => {
      const nuevaCantidad = parseInt(inputCantidad.value) || 0; // Asegurarse de que sea un número
      productoCarrito.cantidad = nuevaCantidad; // Actualizar cantidad en el carrito
      
      // Actualizar localStorage
      localStorage.setItem("carrito", JSON.stringify(carrito));
      document.getElementById(`totalUnidadesCard${productoCarrito.id}`).innerText = `Total de unidades ${productoCarrito.cantidad}`;
      document.getElementById(`subtotalCard${productoCarrito.id}`).innerText = `SubTotal $${(productoCarrito.cantidad * productoCarrito.precio)}`;
          //elegir actualizarlo por TODO el carrito opcion 1 o por partes opción 2
          //reemprimir todo el carrito: para pisarlo OPCION 1
          // imprimirCarrito(arrayCarrito)
          
      })
  })
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

//capturas input form Cargar Bateria
let marcaInput = document.getElementById("marcaInput")
let autorInput = document.getElementById("modeloInput")
let precioInput = document.getElementById("precioInput")
let stockInput = document.getElementById("stockInput")
// Captura de los inputs del formulario
let usuarioInput = document.getElementById("usuarioInput");
let passInput = document.getElementById("passInput");
let loginBtn = document.getElementById("loginBtn");
let modalLogin = new bootstrap.Modal(document.getElementById('modalLogin')); // Instancia del modal
let modalAgregarBateria = new bootstrap.Modal(document.getElementById('modalAgregarBateria')); // Instancia del segundo modal

let modalAgregarCarrito = document.getElementById("modalAgregarCarrito");


// Función login
function login() {
  // Obtén el valor de los inputs
  let usuario = usuarioInput.value;
  let clave = passInput.value;

  // Verifica si los datos son correctos
  if (usuario === "admin" && clave === "admin") {
    // Cierra el modal de login
    modalLogin.hide();

    // Muestra el modal de agregar batería
    modalAgregarBateria.show();
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

// Asigna el evento click al botón de login
loginBtn.addEventListener("click", login);


function cargarBateria(array){
  //capturo cada input
  //validación 
  // if(Number(precioInput.value) < 1 ){

  // }
  let bateriaNueva = new Bateria(array.length+1, marcaInput.value, modeloInput.value, Number(precioInput.value), Number(stockInput.value), "prueba1.jpg")
  console.log(bateriaNueva)
  //resetear input por input
  marcaInput.value = ""
  precioInput.value = ""
  modeloInput.value = ""
  stockInput.value = ""
  // //sumar al array
  array.push(bateriaNueva)
  //actualizamos biblio en storage
  localStorage.setItem("local", JSON.stringify(array))
  //actualizar DOM
  renderBaterias(array)
}

guardarBateriaBtn.addEventListener("click", ()=>{
  cargarBateria(local)
})