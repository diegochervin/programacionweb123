//CAPTURAD DE DOM
let containerLibros = document.getElementById("containerLibros")
let selectOrden = document.getElementById("selectOrden")
let buscador = document.getElementById("buscador")
let coincidencias = document.getElementById("coincidencias")
let guardarLibroBtn = document.getElementById("guardarLibroBtn")
let modalBodyCarrito = document.getElementById("modalBodyCarrito")
let botonCarrito = document.getElementById("botonCarrito")
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
                <p class="precio">Precio: ${libro.precio}</p>
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
    }else{
        //quiero agregarle uno de cantidad 
        //pusheamos a libroEnCarrito ya que es el que encontre en el array carrito
        libroEnCarrito.sumarUnidad()
        libroEnCarrito.exponerCarrito()
        //ACTUALIZAR QUE SUME UNA UNIDAD AL STORAGE
        localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
    }
    
}

//imprimirCarrito
function imprimirCarrito(arrayCarrito){
    modalBodyCarrito.innerHTML = ""
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
                        <button class= "btn btn-danger" "><i class=""></i>-1</button> 
                         <button class= "btn btn-danger" ><i class="fas fa-trash-alt"></i></button>
                 </div>    
            </div>`
    })
    //otro ciclio para reccorer el array y pasarle eventos a los btns sumarUnidad, restarUnidad y eliminar
    arrayCarrito.forEach((productoCarrito)=>{
        //capturar boton
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
        })
    })
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
   imprimirCatalogo(arrayAlfTitulo)
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
    imprimirCatalogo(arrayTituloZA)
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
            alfTituloAZ(arrayFiltrado)
        break
        case "4":
            ordenarZAtitulo(arrayFiltrado)
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
//Código:
imprimirCatalogo(biblioteca)


//https://es.javascript.info/introduction-browser-events#controladores-de-eventos