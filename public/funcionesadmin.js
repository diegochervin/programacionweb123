function renderBaterias(estanteria, carrito) {
    // Limpia el container antes de volver a agregar productos
    containerBaterias.innerHTML = "";
  
    // Recorre cada batería y genera la tarjeta
    for (let bateria of estanteria) {
      let bateriaNuevoDiv = document.createElement("div");
      bateriaNuevoDiv.className = "col-12 col-md-6 col-lg-4 mb-4";
      bateriaNuevoDiv.innerHTML = `
        <div id="${bateria.id}" class="card product-card" data-marca="${bateria.marca}">
          <img class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" src="${bateria.imagen}" alt="${bateria.modelo}">
          <div class="card-body">
            <h5 class="card-title">${bateria.modelo}</h5>
            
            <div class="form-group mb-3">
              <label for="nuevo-modelo-${bateria.id}" class="form-label">Nuevo Modelo</label>
              <input type="text" id="nuevo-modelo-${bateria.id}" class="form-control" placeholder="Ingrese nuevo modelo">
            </div>
  
           
            <div class="form-group mb-3">
             <p>Marca: ${bateria.marca}</p>
              <label for="nueva-marca-${bateria.id}" class="form-label">Nueva Marca</label>
              <input type="text" id="nueva-marca-${bateria.id}" class="form-control" placeholder="Ingrese nueva marca">
            </div>

           
            <div class="form-group mb-3">
            <p class="precio">Precio: ${bateria.precio}</p>
              <label for="nuevo-precio-${bateria.id}" class="form-label">Nuevo Precio</label>
              <input type="number" id="nuevo-precio-${bateria.id}" class="form-control" placeholder="Ingrese nuevo precio">
            </div>
  
            <div class="form-group mb-3">
             <p id="stock-${bateria.stock}"class="">Stock: ${bateria.stock}</p>
              <label for="nuevo-stock-${bateria.id}" class="form-label">Nuevo Stock</label>
              <input type="number" id="nuevo-stock-${bateria.id}" class="form-control" placeholder="Ingrese nuevo stock">
            </div>

             <div class="form-group mb-3">
              <label for="nueva-foto-${bateria.id}" class="form-label">Nueva Foto</label>
              <input type="text" id="nueva-imagen-${bateria.id}" class="form-control" placeholder="Ingrese link nueva foto">
            </div>

            
            <button id="boton-actualizar-${bateria.id}" class="btn btn-primary btn-block mb-3">
              Actualizar
            </button>
            
          </div>
        </div>`;
      
      containerBaterias.append(bateriaNuevoDiv);
  
      // Capturamos los elementos dinámicos con getElementById
      let nuevoPrecio = document.getElementById(`nuevo-precio-${bateria.id}`);
      let nuevaMarca = document.getElementById(`nueva-marca-${bateria.id}`);
      let nuevoModelo = document.getElementById(`nuevo-modelo-${bateria.id}`);
      let nuevoStock = document.getElementById(`nuevo-stock-${bateria.id}`);
      let nuevaImagen = document.getElementById(`nueva-imagen-${bateria.id}`);
      let botonActualizar = document.getElementById(`boton-actualizar-${bateria.id}`);
  
      // Agregar funcionalidad al botón "Actualizar"
      botonActualizar.addEventListener("click", () => {
        actualizarBateria(
          bateria.id,
          nuevoModelo.value,
          nuevaMarca.value,
          nuevoPrecio.value,
          nuevoStock.value,
          nuevaImagen.value
        );
      });
    }
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
    renderBaterias(bateriaBuscada, estanteria);
    
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
  
  async function actualizarBateria(id) {
    // Obtén los valores actuales de los inputs (si se está editando directamente en el DOM)
    const nuevaMarca = document.getElementById(`nueva-marca-${id}`)?.value.trim();
    const nuevoModelo = document.getElementById(`nuevo-modelo-${id}`)?.value.trim();
    const nuevoPrecio = document.getElementById(`nuevo-precio-${id}`)?.value;
    const nuevoStock = document.getElementById(`nuevo-stock-${id}`)?.value;
    const nuevaImagen = document.getElementById(`nueva-imagen-${id}`)?.value;

    // Crea un objeto con los datos actualizados
    const bateriaActualizada = {};

    if (nuevaMarca) bateriaActualizada.marca = nuevaMarca.toUpperCase();
    if (nuevoModelo) bateriaActualizada.modelo = nuevoModelo;
    if (nuevoPrecio) bateriaActualizada.precio = Number(nuevoPrecio);
    if (nuevoStock) bateriaActualizada.stock = Number(nuevoStock);
    if (nuevaImagen) bateriaActualizada.imagen = nuevaImagen;

    // Si tienes los datos predefinidos, puedes enviarlos como argumento adicional
    const datosExtras = arguments[1];
    if (datosExtras) {
        Object.assign(bateriaActualizada, datosExtras);
    }

    try {
        const response = await fetch(`http://localhost:3000/baterias/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bateriaActualizada),
        });

        if (!response.ok) {
            throw new Error("Error al actualizar la batería en la base de datos.");
        }

        const resultado = await response.json();
        console.log("Batería actualizada:", resultado);

        alert("Batería actualizada con éxito");
        cargarEstanteria(); // Recargar los datos en el DOM
    } catch (error) {
        console.error("Error al actualizar la batería:", error);
        alert("Hubo un problema al actualizar la batería.");
    }
}

  
  
  
  
  // Llamar a la función para cargar las baterías
  setTimeout (()=> { renderBaterias(estanteria)}, 2000)
  
  setTimeout(()=>{ getID()},3500 )
  function getID(){
    let containerBaterias = document.getElementById("containerBaterias");
    let coincidencias = document.getElementById('coincidencias');
    let buscador = document.getElementById('buscar');
  //capturas input form Cargar Bateria
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
  
  
  
  