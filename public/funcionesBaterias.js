
// Función que renderiza las baterías
function renderBaterias(estanteria, carrito) {
  // Limpia el container antes de volver a agregar productos
  containerBaterias.innerHTML = '';

  // Recorre cada batería y genera la tarjeta
  for (let bateria of estanteria) {
   
    let bateriaNuevoDiv = document.createElement("div");
    bateriaNuevoDiv.className = "col-12 col-md-6 col-lg-4";
    bateriaNuevoDiv.innerHTML = `
      <div id="${bateria.id}" class="card product-card" data-marca="${bateria.marca}" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;" src="${bateria.imagen}" alt="${bateria.modelo}">
        <div class="card-body">
          <h4 class="card-title">${bateria.modelo.toUpperCase()}</h4>
          <p>Marca: ${bateria.marca.toUpperCase()}</p>
          <p class="precio">Precio: ${bateria.precio}</p>
          <p id="stock-${bateria.stock}"class="">Stock: ${bateria.stock}</p>
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
      agregarAlCarrito(bateria.id, estanteria, carrito);
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

    // Verificar que la cantidad ingresada sea mayor que 0
    if (cantidadIngresada <= 0) {

      Swal.fire({
        title: `No es posible agregar ${cantidadIngresada} unidades.`,
        timer: 3500,
        icon: "error"
      });
      // alert(`No es posible agregar ${cantidadIngresada} unidades.`);
      return; // Detener la ejecución si la cantidad no es válida
    }

    // Verificar que la cantidad ingresada no exceda el stock disponible
    if (cantidadIngresada > bateriaComprado.stock) {
      
      Swal.fire({
        title: `No es posible agregar ${cantidadIngresada} unidades. Solo tenemos ${bateriaComprado.stock} en stock.`,
        timer: 3500,
        icon: "error"
      });
      // alert(`No es posible agregar ${cantidadIngresada} unidades. Solo tenemos ${bateriaComprado.stock} en stock.`);
      return; // Detener la ejecución si no hay suficiente stock
    }

    // Buscar si la batería ya está en el carrito
    let bateriaEnCarrito = carrito.find(bat => bat.id == bateriaComprado.id);
    if (!bateriaEnCarrito) {
      // Si no está en el carrito, agregar la batería con la cantidad ingresada
      let bateriaClon = { ...bateriaComprado, cantidad: cantidadIngresada }; // Clonar objeto
      carrito.push(bateriaClon);
      
      Toastify({
        text: `Se han agregado ${cantidadIngresada} unidades de la batería ${bateriaComprado.modelo}.`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();  
      
      // alert(`Se han agregado ${cantidadIngresada} unidades de la batería ${bateriaComprado.modelo}.`);
    
    
    } else {
      // Si ya está en el carrito, verificar si la cantidad sumada supera el stock disponible
      if ((cantidadIngresada + bateriaEnCarrito.cantidad) > bateriaComprado.stock) {
        // alert(`No es posible agregar ${cantidadIngresada} unidades. Ya tienes ${bateriaEnCarrito.cantidad} en el carrito y solo tenemos ${bateriaComprado.stock} en stock.`);
        Swal.fire({
          title: `No es posible agregar ${cantidadIngresada} unidades. Ya tienes ${bateriaEnCarrito.cantidad} en el carrito y solo tenemos ${bateriaComprado.stock} en stock.`,
          timer: 3500,
          icon: "error"
        });

        return; // Detener la ejecución si se supera el stock disponible
      } else {
        // Si no supera el stock, agregar la cantidad al carrito
        bateriaEnCarrito.cantidad += cantidadIngresada;
       
       
       
        Toastify({
          text: `Se han agregado ${cantidadIngresada} unidades adicionales de la batería ${bateriaComprado.modelo}. Ahora tienes ${bateriaEnCarrito.cantidad} en total.`,
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function(){} // Callback after click
        }).showToast();   
        
      
      
      
      }
    }

    // Actualizar el carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
}

function totalSumado(){
  let totalSumado = 0;    
  carrito.forEach(bat => totalSumado += (bat.precio * bat.cantidad));
  precioTotal.innerText = `El total de su compra es de $ ${totalSumado}`;
  if (carrito.length == 0) {
    modalBodyCarrito.innerHTML = `<h4>No hay nada en el carrito</h4>`;
    precioTotal.innerText = ``
   }
   envioGratis.innerText = ``;
   if (totalSumado >= 500000) {
     let envioGratisContainer = document.createElement("span");
     envioGratisContainer.classList.add("envio-gratis");
   
     let textoEnvioGratis = document.createElement("span");
     textoEnvioGratis.innerText = "¡Felicidades, tienes envío gratis!";
   
     let imagenEnvioGratis = document.createElement("img");
     imagenEnvioGratis.src = "./static/img/shipping_free.png"; 
     imagenEnvioGratis.alt = "Icono de envío gratis";
   
     envioGratisContainer.appendChild(textoEnvioGratis);
     envioGratisContainer.appendChild(imagenEnvioGratis);
     envioGratis.appendChild(envioGratisContainer);
   }
   return totalSumado
}

let botonCarrito = document.getElementById("botonCarrito")

botonCarrito.addEventListener("click", ()=>{
  imprimirCarrito(carrito)
})


//imprimirCarrito
function imprimirCarrito(carrito) {
  
  modalBodyCarrito.innerHTML = "";
  
  carrito.forEach((productoCarrito) => {
    // Usar nodo donde vamos a imprimir modalBodyCarrito
    modalBodyCarrito.innerHTML += `
      <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
        <div class="card-body">
          <h4 class="card-title">${productoCarrito.modelo}</h4>
          <p class="card-text">Precio unitario $${productoCarrito.precio}</p>
          <p class="card-text" id="totalUnidadesCard${productoCarrito.id}">Total de unidades ${productoCarrito.cantidad}</p>
          <p class="card-text" id="subtotalCard${productoCarrito.id}">SubTotal $${productoCarrito.cantidad * productoCarrito.precio}</p>
          <input class="form-control pl-2 cantidad_comprar" type="number" id="cantidadCarrit-${productoCarrito.id}" name="cantidad" value="${productoCarrito.cantidad}">
          <button class="btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>`;
  });


totalSumado(carrito)


  
  // Otro ciclo para recorrer el array y pasarle eventos a los inputs y botones
  carrito.forEach((productoCarrito) => {
    let inputCantidad = document.getElementById(`cantidadCarrit-${productoCarrito.id}`);

    inputCantidad.addEventListener("change", () => {
      let nuevaCantidad = parseInt(inputCantidad.value) || 0; // Asegurarse de que sea un número

      // Buscar la batería en carrito 
      let productoStock = carrito.find(producto => producto.id == productoCarrito.id);

      // Validar que la cantidad no sea menor o igual a cero
      if (nuevaCantidad <= 0) {

        
        alert(`No es posible ingresar ${nuevaCantidad} unidades.`);
        inputCantidad.value = productoCarrito.cantidad; // Restaurar valor anterior
        return;
      }

      // Validar que la cantidad no exceda el stock disponible
      if (nuevaCantidad > productoStock.stock) {

        Swal.fire({
          title: `No es posible ingresar ${nuevaCantidad} unidades. Solo hay ${productoStock.stock} unidades disponibles.`,
          timer: 3500,
          icon: "error"
        });
        // alert(`No es posible ingresar ${nuevaCantidad} unidades. Solo hay ${productoStock.stock} unidades disponibles.`);
        inputCantidad.value = productoCarrito.cantidad; // Restaurar valor anterior
        return;
      }

      // Actualizar la cantidad en el carrito
      productoCarrito.cantidad = nuevaCantidad;
      totalSumado(productoCarrito)



      // Actualizar el localStorage
      localStorage.setItem("carrito", JSON.stringify(carrito));

      // Actualizar la visualización en el DOM
      document.getElementById(`totalUnidadesCard${productoCarrito.id}`).innerText = `Total de unidades ${productoCarrito.cantidad}`;
      document.getElementById(`subtotalCard${productoCarrito.id}`).innerText = `SubTotal $${productoCarrito.cantidad * productoCarrito.precio}`;

      // Opción para actualizar todo el carrito o solo por partes
      // imprimirCarrito(arrayCarrito) // Si deseas actualizar todo el carrito
    });

    // Evento para eliminar el producto del carrito
    document.getElementById(`botonEliminar${productoCarrito.id}`).onclick = () => {
      // Sacarlo del array carrito
      let indiceEliminar = carrito.indexOf(productoCarrito);
      carrito.splice(indiceEliminar, 1);

      // Actualizar el localStorage
      localStorage.setItem("carrito", JSON.stringify(carrito));

      // Eliminar del DOM
      let cardCarrito = document.getElementById(`productoCarrito${productoCarrito.id}`);
      cardCarrito.remove();
      totalSumado(carrito)

      // Mostrar mensaje si el carrito está vacío
      if (carrito.length == 0) {
        modalBodyCarrito.innerHTML = `<h4>No hay nada en el carrito</h4>`;
        precioTotal.innerText = ``
        
      }
    };
  });
}

// Función para generar los filtros de marca
function generarFiltrosDeMarca() {
  const filtroContainer = document.getElementById('filtro-marcas-dinamico');
  filtroContainer.innerHTML = ''; // Limpiar el contenedor

  // Crear el filtro para "TODAS"
  const filtroTodas = document.createElement('div');
  filtroTodas.innerHTML = `
    <input type="radio" name="filter-marca" id="filtro-marca-todos" value="" onclick="aplicarFiltrosYOrdenamiento()" checked>
    <label for="filtro-marca-todos">TODAS</label>
  `;
  filtroContainer.appendChild(filtroTodas);

  // Extraer las marcas únicas del array de baterías
  const marcasExistentes = [...new Set(estanteria.map(bateria => bateria.marca))];

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



// Función para manejar los filtros y el ordenamiento
function aplicarFiltrosYOrdenamiento() {
  // Obtener la marca seleccionada
  let marcaSeleccionada = document.querySelector('input[name="filter-marca"]:checked')?.value.toLowerCase();
  
  // Obtener la opción de ordenamiento seleccionada
  let ordenSeleccionada = document.querySelector('input[name="order-by"]:checked')?.value.toLowerCase();
  
  // Obtener el valor del buscador
  let busqueda = document.getElementById('buscar').value.toLowerCase();
  
  // Filtrar por marca
  let bateriasFiltradas = estanteria.filter(bateria => {
    let productoMarca = bateria.marca.toLowerCase();
    return marcaSeleccionada === '' || productoMarca === marcaSeleccionada;
  });

  // Filtrar por stock
  if (document.getElementById('radio1').checked) {
    bateriasFiltradas = bateriasFiltradas.filter(bateria => bateria.stock > 0);
  }

  // Utilizar la función buscarData para buscar y obtener el resultado
  let bateriaBuscada = buscarData(bateriasFiltradas, busqueda);

  // Ordenar el array filtrado
  if (ordenSeleccionada === 'alfabetoaz') {
    bateriaBuscada.sort((a, b) => a.modelo.localeCompare(b.modelo));
  } else if (ordenSeleccionada === 'alfabetoza') {
    bateriaBuscada.sort((a, b) => b.modelo.localeCompare(a.modelo));
  } else if (ordenSeleccionada === 'preciomenor') {
    bateriaBuscada.sort((a, b) => a.precio - b.precio);
  } else if (ordenSeleccionada === 'preciomayor') {
    bateriaBuscada.sort((a, b) => b.precio - a.precio);
  }
 
  // Renderizar los productos filtrados y ordenados
  renderBaterias(bateriaBuscada, estanteria, carrito);
  
}


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


async function cargarBateria(array, array2) {
  // Crear objeto de la nueva batería
  const bateriaNueva = {
      marca: marcaInput.value.toUpperCase(),
      modelo: modeloInput.value,
      precio: Number(precioInput.value),
      stock: Number(stockInput.value),
      imagen: "https://github.com/diegochervin/programacionweb123/blob/main/public/static/img/prueba2.jpg?raw=true"
  };

  try {
      // Realizar POST a la API para agregar la batería a la base de datos
      const response = await fetch("/baterias", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(bateriaNueva)
      });

      if (!response.ok) {
          throw new Error("Error al guardar la batería en la base de datos.");
      }

      const nuevaBateriaDB = await response.json(); // Respuesta del servidor con la batería guardada

      // Agregar la batería al array local (opcional)
      array.push(nuevaBateriaDB);

      // Resetear los inputs
      marcaInput.value = "";
      precioInput.value = "";
      modeloInput.value = "";
      stockInput.value = "";

      // Verificar si la marca ya está en el array de marcas existentes
      if (!array2.includes(bateriaNueva.marca)) {
          array2.push(bateriaNueva.marca); // Agregar la marca si no está
          localStorage.setItem("marcasExistentes", JSON.stringify(array2)); // Guardar en localStorage
      }

      // Actualizar el DOM
      renderBaterias(array);
      generarFiltrosDeMarca();

      console.log("Batería guardada:", nuevaBateriaDB);
      console.log("Marcas actualizadas:", array2);

  } catch (error) {
      console.error("Error al cargar la batería:", error);
      alert("Hubo un problema al agregar la batería. Por favor, inténtalo nuevamente.");
  }
}






  
  document.addEventListener("DOMContentLoaded", () => {
    const modalAgregarCarrito = new bootstrap.Modal(document.getElementById('modalAgregarCarrito'));
    const modalFinalCompra = new bootstrap.Modal(document.getElementById('modalFinalCompra'));
  
    let botonFinalizarCompra = document.getElementById("botonFinalizarCompra");
  
    function finalizarCompra(arrayCarrito) {
      if (arrayCarrito.length > 0) {
          let totalComprado = totalSumado(arrayCarrito);
  
          modalAgregarCarrito.hide(); // Cierra el modal del carrito
          modalFinalCompra.show(); // Muestra el modal para completar datos
      } else {
          console.log("No hay nada en el carrito; no puedes finalizar la compra.");
      }
      return carrito;
  }
  
  botonFinalizarCompra.addEventListener("click", () => {
      carrito = finalizarCompra(carrito);
  });
  
  document.getElementById("confirmarCompraBtn").addEventListener("click", async (event) => {
      const form = document.getElementById("formFinalCompra");
  
      if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
      }
  
      form.classList.add("was-validated");
  
      if (form.checkValidity()) {
          const nombre = document.getElementById("nombre").value;
          const apellido = document.getElementById("apellido").value;
          const email = document.getElementById("email").value;
          const telefono = document.getElementById("telefono").value;
          const fechaActual = new Date().toISOString();
          console.log(fechaActual);
          const suma = totalSumado(carrito);
          
  
          if (suma > 0) {
              try {
                  // Crear pedido en la base de datos
                  const responsePedido = await fetch('/crear-pedido', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                          fecha: fechaActual,
                          monto: suma
                      })
                  });
  
                  const dataPedido = await responsePedido.json();
                  if (dataPedido.success) {
                      console.log("Pedido creado exitosamente en la base de datos.");
  
                      // Actualizar stock en la base de datos
                      for (let item of carrito) {
                          let producto = estanteria.find((bateria) => bateria.id === item.id);
  
                          if (producto) {
                              producto.stock -= item.cantidad; // Actualiza stock localmente
  
                              try {
                                  const responseStock = await fetch('/actualizar-stock', {
                                      method: 'POST',
                                      headers: {
                                          'Content-Type': 'application/json'
                                      },
                                      body: JSON.stringify({
                                          id: producto.id,
                                          nuevoStock: producto.stock
                                      })
                                  });
  
                                  const dataStock = await responseStock.json();
                                  if (dataStock.success) {
                                      console.log(`Stock de ${producto.modelo} actualizado correctamente en la base de datos.`);
                                  } else {
                                      console.error(`Error al actualizar el stock de ${producto.modelo}`);
                                  }
                              } catch (error) {
                                  console.error("Error al actualizar el stock:", error);
                              }
                          }
                      }
  
                      // Mostrar mensaje de éxito al usuario
                      Swal.fire({
                          title: "Muchas gracias por tu compra!",
                          text: `Compra confirmada para ${nombre.toUpperCase()} ${apellido.toUpperCase()}. Tiene 24 hs para completar el pago. Le llegará un mail con el instructivo.`,
                          icon: "success",
                          timer: 5000,
                      });
  
                      modalFinalCompra.hide(); // Cierra el modal de finalización de compra
                      modalAgregarCarrito.hide(); // Cierra el modal del carrito
  
                      carrito = [];
                      localStorage.removeItem("carrito");
                      renderBaterias(estanteria, carrito);
                      localStorage.setItem("estanteria", JSON.stringify(estanteria));
                  } else {
                      console.error("Error al crear el pedido.");
                  }
              } catch (error) {
                  console.error("Error al procesar la compra:", error);
              }
          } else {
              console.log("El total del carrito debe ser mayor a 0 para finalizar la compra.");
          }
      }
  });
  




// Llamar a la función para cargar las baterías
setTimeout (()=> { renderBaterias(estanteria, carrito)}, 2000)

setTimeout(()=>{ getID()},3500 )
function getID(){
  let containerBaterias = document.getElementById("containerBaterias");
  let coincidencias = document.getElementById('coincidencias');
  let buscador = document.getElementById('buscar');
//capturas input form Cargar Bateria
let modalAgregarCarrito = document.getElementById("modalAgregarCarrito");
let usuarioInput = document.getElementById("usuarioInput");
let passInput = document.getElementById("passInput");
let precioTotal = document.getElementById("precioTotal")
let marcaInput = document.getElementById("marcaInput")
let autorInput = document.getElementById("modeloInput")
let precioInput = document.getElementById("precioInput")
let stockInput = document.getElementById("stockInput")
let guardarBateriaBtn = document.getElementById("guardarBateriaBtn");

if (guardarBateriaBtn) {
  guardarBateriaBtn.addEventListener("click", () => {
      cargarBateria(estanteria, marcasExistentes);
  });
} else {
  console.error("El botón guardarBateriaBtn no está definido.");
}


}
})



