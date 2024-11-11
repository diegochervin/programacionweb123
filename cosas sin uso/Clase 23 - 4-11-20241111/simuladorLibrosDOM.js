//CAPTURAD DE DOM
let containerLibros = document.getElementById("containerLibros")
let selectOrden = document.getElementById("selectOrden")
let buscador = document.getElementById("buscador")
let coincidencias = document.getElementById("coincidencias")
let guardarLibroBtn = document.getElementById("guardarLibroBtn")
let modalBodyCarrito = document.getElementById("modalBodyCarrito")
let botonCarrito = document.getElementById("botonCarrito")
let totalCarrito = document.getElementById("totalCarrito")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let loaderLibros = document.getElementById("loaderLibros")
//capturas input form Cargar libro
let tituloInput = document.getElementById("tituloInput")
let autorInput = document.getElementById("autorInput")
let precioInput = document.getElementById("precioInput")
//FUNCIONES 
function imprimirCatalogo(array){
    containerLibros.innerHTML = ""
    array.forEach((libro) => {
        //creo etiqueta:
        let divNuevoLibro = document.createElement("div")
        divNuevoLibro.classList = "col-12 col-md-6 col-lg-4 my-4 mx-0"
        divNuevoLibro.innerHTML = `
        <div id="${libro.id}" class="card" style="width: 18rem;">
            <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${libro.imagen}" alt="${libro.titulo} de ${libro.autor}">
            <div class="card-body">
                <h4 class="card-title">${libro.titulo}</h4>
                <p>Autor: ${libro.autor}</p>
                <!--Agregamos ternario-->
                <p >Precio: <strong class="${libro.precio  < 2000? "precioOferta" : "precio"}">${libro.precio}</strong></p>
            <button id="agregarCarritoBtn${libro.id}" class="btn btn-success" data-bs-toggle="tooltip" data-bs-placement="left" title="${libro.titulo}">Agregar al carrito</button>
            </div>
        </div>`
        containerLibros.append(divNuevoLibro)
        //capturarlo dentro del foarEach y pasarle evento
        document.getElementById(`agregarCarritoBtn${libro.id}`).addEventListener("click", ()=>{
            console.log(`Compraste el ${libro.titulo}`)
            agregarAlCarrito(biblioteca, carrito, libro)
        })
    })

}
//function agregarAlCarrito()
function agregarAlCarrito(arrayStock, arrayCarrito, elemento){
    
    //fijarnos si está en el carrito 
    let libroEnCarrito = arrayCarrito.find((book)=> book.id == elemento.id)
    
    if(libroEnCarrito == undefined){
        //pushear al array del carrito
        arrayCarrito.push(elemento)
        console.log(carrito)
        //SETEAR STORAGE
        localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
        //toastify
        Toastify({
            text: "Agregaste el libro al carrito " + elemento.titulo,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
    }else{
        //quiero agregarle uno de cantidad 
        //pusheamos a libroEnCarrito ya que es el que encontre en el array carrito
        libroEnCarrito.sumarUnidad()
        libroEnCarrito.exponerCarrito()
        //ACTUALIZAR QUE SUME UNA UNIDAD AL STORAGE
        localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
        //toastify
        Toastify({
            text: "Agregaste el libro al carrito " + libroEnCarrito.titulo +" ya tiene en el carrito " + libroEnCarrito.cantidad,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
    }
    
}

//imprimirCarrito
function imprimirCarrito(arrayCarrito){
    //reseteamos el DOM del modal
    modalBodyCarrito.innerHTML = ""
    //para ver si el carrito esta vacio:
    if(arrayCarrito.length == 0){
        modalBodyCarrito.innerHTML = `<h4>No hay nada en el carrito</h4>`
    }
    //pintamos cada card
    arrayCarrito.forEach((productoCarrito)=>{
        //usar nodo donde vamos a imprimir modalBodyCarrito
        modalBodyCarrito.innerHTML += `
        <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
                 <div class="card-body">
                        <h4 class="card-title">${productoCarrito.titulo}</h4>
                    
                         <p class="card-text">Precio unitario $${productoCarrito.precio}</p>
                         <p class="card-text" id="totalUnidadesCard${productoCarrito.id}">Total de unidades ${productoCarrito.cantidad}</p> 
                         <p class="card-text" id="subtotalCard${productoCarrito.id}">SubTotal ${productoCarrito.cantidad * productoCarrito.precio}</p>
                         <button class= "btn btn-success" id="sumarUnidad${productoCarrito.id}"><i class=""></i>+1</button>
                         <button class= "btn btn-danger" id="restarUnidad${productoCarrito.id}"><i class=""></i>-1</button> 
                         <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}" ><i class="fas fa-trash-alt"></i></button>
                 
                         </div>    
            </div>`

        })

    //otro ciclo para reccorer el array y pasarle eventos a los btns sumarUnidad, restarUnidad y eliminar
    arrayCarrito.forEach((productoCarrito)=>{
        //SUMAR UNIDAD:
        //capturar btn
        let botonSumarUnidad = document.getElementById(`sumarUnidad${productoCarrito.id}`)
        //pasarle evento al btn
        botonSumarUnidad.addEventListener("click", ()=>{
            //sumarle unidad
            productoCarrito.sumarUnidad()
            //tamos viendo
            console.log(`Al libro ${productoCarrito.titulo} tiene ahora con la unidad sumada ${productoCarrito.cantidad}`)
            //setear storage para que actualice y quede
            localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
            //elegir actualizarlo por TODO el carrito opcion 1 o por partes opción 2
            //reemprimir todo el carrito: para pisarlo OPCION 1
            // imprimirCarrito(arrayCarrito)
            //captura cantidad unidad y subTotal para reescribir
            //total unidades
            document.getElementById(`totalUnidadesCard${productoCarrito.id}`).innerText = `Total de unidades ${productoCarrito.cantidad}`
            //capturar subTotal y actualizarlo
            document.getElementById(`subtotalCard${productoCarrito.id}`).innerText = `SubTotal ${productoCarrito.cantidad * productoCarrito.precio}`
            //calculamos y mostramos total
            let total= calcularTotal(arrayCarrito)
            mostrarTotalEnCarrito(total)
        })

        //RESTAR UNIDAD
        //capturo btn y pasar evento
        document.getElementById(`restarUnidad${productoCarrito.id}`).addEventListener("click", ()=>{
            //evaluar si puede restar, es decir, si la cantidad va a ser menor a uno (NO DEJAR QUE RESTE)
            if(productoCarrito.cantidad > 1){
                //restarUnidad
                productoCarrito.restarUnidad()
                console.log(`Estoy restando una unidad de ${productoCarrito.titulo}, ahora tiene ${productoCarrito.cantidad}`)
                //storage actualizar 
                localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
                //reflejar en el DOM
                //captura cantidad unidad y subTotal para reescribir
            //total unidades
            document.getElementById(`totalUnidadesCard${productoCarrito.id}`).innerText = `Total de unidades ${productoCarrito.cantidad}`
            //capturar subTotal y actualizarlo
            document.getElementById(`subtotalCard${productoCarrito.id}`).innerText = `SubTotal ${productoCarrito.cantidad * productoCarrito.precio}`
                }else{
                console.log(`NO puede seguir restando unidades  a ${productoCarrito.titulo}`)
            }
            //calculamos y mostramos total
            let total= calcularTotal(arrayCarrito)
            mostrarTotalEnCarrito(total)
        })

        //ELIMINAR CARRITO
        document.getElementById(`botonEliminar${productoCarrito.id}`).onclick = ()=>{
            //sacarlo del array carrito
            // busco el indice
            let indiceEliminar = arrayCarrito.indexOf(productoCarrito)
            console.log(indiceEliminar)
            //splice: indice y desp cantidad a borrar
            arrayCarrito.splice(indiceEliminar, 1)
            console.log(arrayCarrito)

            //eliminar del storage -- actualizar con el carrito sin el producto que acabamos de eliminar
            localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
            //eliminar del DOM
            //opcion uno: pintar TODO EL CARRITO DE VUELTA
            // imprimirCarrito(arrayCarrito)
            //opcion dos eliminar nodo con ese producto
            let cardCarrito = document.getElementById(`productoCarrito${productoCarrito.id}`)
            cardCarrito.remove()
            if(arrayCarrito.length == 0){
                modalBodyCarrito.innerHTML = `<h4>No hay nada en el carrito</h4>`
            }
            //calculamos y mostramos total
            let total= calcularTotal(arrayCarrito)
            mostrarTotalEnCarrito(total)
        }
    })

    //CALCULAR TOTAL LUEGO DE LOS CICLOS DE PINTA Y ASIGNAR EVENTOS DE CADA CARD
    let total= calcularTotal(arrayCarrito)
    mostrarTotalEnCarrito(total)
}
//function calcularTotal
function calcularTotal(carrito){
    //solución con reduce método avanzado
    //dos parámetros primer function donde acumulo, segundo donde arranco el acumulador
    //el primer parametro que es la function donde acumulo, tiene dos parametros el primero es la variable que acumulo el segundo el elemento
    let totalReduce = carrito.reduce((total, libro)=> total= total + (libro.precio * libro.cantidad),0)
    return totalReduce
}
//function mostrarTotal en bodyCarrito
function mostrarTotalEnCarrito(tot){
    //condicional común:
    // if(tot > 0){
    //     totalCarrito.innerHTML = `El total de su compra es <strong>${tot}</strong>`
    // }else{
    //     totalCarrito.innerHTML =""
    // }
    //reemplazar por ternario
    tot > 0 ? totalCarrito.innerHTML = `El total de su compra es <strong>${tot}</strong>` : totalCarrito.innerHTML =""
}
// finalizar compra
function finalizarCompra(arrayCarrito){
    //fijarse si algo en el carrito y permitir o no
    if(arrayCarrito.length > 0){
        let totalComprado = calcularTotal(arrayCarrito)
        totalCarrito.innerHTML = `Gracias por su compra, debe pagarnos ${totalComprado}`
        console.log(`Gracias por su compra, debe pagarnos ${totalComprado}`)
        //limpiar array a nivel carrito
        arrayCarrito = []

        //limpiar de storage
        localStorage.removeItem("carrito")
        //agraderle y limpiar DOM
        modalBodyCarrito.innerHTML = ""
    }else{
        console.log(`No hay nada en el carrito no podes finalizar la compra`)
    }
    return arrayCarrito
}
//funciones de ordenamiento:
function ordMayorMenor(array){
    console.log(`Ordenado de mayor a menor por precio`)
    let copia = [].concat(array)
    copia.sort((n1, n2)=> n2.precio - n1.precio)
    return copia
}
function ordenarMenorMayorPrecio(array){
    console.log(`Ordenado de menor a mayor por precio:`)
    //copiar/clonar array
    let arrayMenorMayor = [].concat(array)
    arrayMenorMayor.sort((a, b)=> a.precio - b.precio)
    return arrayMenorMayor
}
function alfTituloAZ(ar){
    console.log(`catalogo ordenado de la A-> por titulo`)
    let arrayAlfTitulo = [].concat(ar)
    arrayAlfTitulo.sort((a,b)=>{
        if(a.titulo < b.titulo){
            return -1
        }
        if(a.titulo > b.titulo){
            return 1
        }
        return 0
    })
   return arrayAlfTitulo
}
function ordenarZAtitulo(array){
    //ordenar por titulo de la z a la a
    let arrayTituloZA = array.toSorted((a,b)=>{
            if(a.titulo > b.titulo){
                return -1
            }
            if(a.titulo < b.titulo){
                return 1
            }
            return 0
        
    })
    return arrayTituloZA
}
//función de búsqueda
function buscarDatayOrdenar(array,valor){
    //filter que nos permitabuscar en titulo y autor
    let arrayFiltrado = array.filter((libro)=> libro.titulo.toLowerCase().includes(valor.toLowerCase()) || libro.autor.toLowerCase().includes(valor.toLowerCase()))
    switch(selectOrden.value){
        case "0":
            imprimirCatalogo(arrayFiltrado)
        break
        case "1":
            arrayFiltrado = ordMayorMenor(arrayFiltrado)
        break
        case "2":
            arrayFiltrado = ordenarMenorMayorPrecio(arrayFiltrado)
        break
        case "3":
            arrayFiltrado = alfTituloAZ(arrayFiltrado)
        break
        case "4":
            arrayFiltrado = ordenarZAtitulo(arrayFiltrado)
        break
    }
    //CONDICIONAL COINCIDENCIAS
    if(arrayFiltrado.length == 0){
        console.log(`No se encontraron coincidencias en el autor o titulo con ${valor}`)
        coincidencias.innerText = `No se encontraron coincidencias en el autor o titulo con ${valor}`
        // imprimirCatalogo(busqueda)
        containerLibros.innerHTML = ""
    }else{
        coincidencias.innerText = ""
        // imprimirCatalogo(busqueda)
    }
    console.log(arrayFiltrado)
    return arrayFiltrado
}
//función cargar libro mediante el modal
function cargarLibroForm(array){
    //capturo FORM
    //opción uno capturar el form
    let formCargarLibro = document.getElementById("formCargarLibro")
    //console.log para chequear inputs y su valores
    console.log(formCargarLibro)
    console.log(formCargarLibro[0].value)
    console.log(formCargarLibro[1].value)
    console.log(formCargarLibro[2])
    let libroNuevo = new Libro(array.length+1, formCargarLibro[1].value, formCargarLibro[0].value, Number(formCargarLibro[2].value), "libroNuevo.jpg")
    console.log(libroNuevo)
    //resetear modal
    formCargarLibro.reset()
    // //sumar al array
    array.push(libroNuevo)
    //actualizamos biblio en storage
    localStorage.setItem("biblioteca", JSON.stringify(array))
    //actualizar DOM
    imprimirCatalogo(array)
}
//función para cargar libros  con imputs en ID
function cargarLibro(array){
    //capturo cada input
    console.log(autorInput.value)
    //validación 
    // if(Number(precioInput.value) < 1 ){

    // }
    let libroNuevo = new Libro(array.length+1, autorInput.value, tituloInput.value, Number(precioInput.value), "libroNuevo.jpg")
    console.log(libroNuevo)
    //resetear input por input
    autorInput.value = ""
    precioInput.value = ""
    tituloInput.value = ""
    // //sumar al array
    array.push(libroNuevo)
    //actualizamos biblio en storage
    localStorage.setItem("biblioteca", JSON.stringify(array))
    //actualizar DOM
    imprimirCatalogo(array)
}
//Eventos:
selectOrden.addEventListener("change", ()=>{
    console.log(selectOrden.value)
    //buscarData para tener en cuenta si existe algo en el input del buscador:
    let array = buscarDatayOrdenar(biblioteca, buscador.value)
    imprimirCatalogo(array)
    
})
//elegir evento que consideren mejor para la experiencia de usuario (ej: change, input, click, etc)
buscador.oninput= ()=>{
    console.log(buscador.value)
    let arr = buscarDatayOrdenar(biblioteca,buscador.value)
    imprimirCatalogo(arr)
}
//evento btn guardar libro
guardarLibroBtn.addEventListener("click", ()=>{
    cargarLibro(biblioteca)
})
//btn dispara modal carrito
botonCarrito.addEventListener("click", ()=>{
    imprimirCarrito(carrito)
})
//finalizar compra
botonFinalizarCompra.addEventListener("click",()=>{
    let totalCalculado = calcularTotal(carrito)
    //agregar sweet alert
    Swal.fire({
        title: "¿Quiere finalizar su compra?",
        text: `Su total a pagar sería ${totalCalculado}`,
        showDenyButton: true,
        confirmButtonText: "Finalizar compra",
        denyButtonText: `No comprar`,
        confirmButtonColor: "green"
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          carrito = finalizarCompra(carrito)
          //muestra alert emergente con nuestra customización
          Swal.fire({
            title: "Gracias por comprarnnos",
            icon: "success",
            text: `Consulte los diferentes medios de pago, su total a pagar es ${totalCalculado}`.toUpperCase()
          });
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    
})
//Código:
//simular espera con alguna function asincronica y que lo traiga en 3 segundos
setTimeout(()=>{
    imprimirCatalogo(biblioteca)
    loaderLibros.remove()
}, 3000)

//luxon fechas
//capturo todo lo de luxon en la variable DateTime
let DateTime = luxon.DateTime;
const ahora = DateTime.now()
console.log(ahora.toLocaleString(DateTime.DATETIME_FULL))
console.log(ahora.toLocaleString(DateTime.DATE_SHORT))
console.log(ahora.toLocaleString(DateTime.DATE_FULL))
//sweet alert 2
//https://sweetalert2.github.io/


//https://es.javascript.info/introduction-browser-events#controladores-de-eventos