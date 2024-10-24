//CAPTURAD DE DOM
let containerLibros = document.getElementById("containerLibros")
let selectOrden = document.getElementById("selectOrden")
let buscador = document.getElementById("buscador")
let coincidencias = document.getElementById("coincidencias")
let guardarLibroBtn = document.getElementById("guardarLibroBtn")
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
            <button id="agregarCarritoBtn${libro.id}" onclick="console.log('compraste ${libro.titulo}')" class="btn btn-success" data-bs-toggle="tooltip" data-bs-placement="left" title="${libro.titulo}">Agregar al carrito</button>
            </div>
        </div>`
        containerLibros.append(divNuevoLibro)
        //capturarlo dentro del foarEach y pasarle evento
        // document.getElementById(`agregarCarritoBtn${libro.id}`).addEventListener("click", ()=>{
        //     console.log(`Compraste el ${libro.titulo}`)
        // })
    })

}
//funciones de ordenamiento:
function ordMayorMenor(array){
    console.log(`Ordenado de mayor a menor por precio`)
    let copia = [].concat(array)
    copia.sort((n1, n2)=> n2.precio - n1.precio)
    imprimirCatalogo(copia)
}
function ordenarMenorMayorPrecio(array){
    console.log(`Ordenado de menor a mayor por precio:`)
    //copiar/clonar array
    let arrayMenorMayor = [].concat(array)
    arrayMenorMayor.sort((a, b)=> a.precio - b.precio)
    imprimirCatalogo(arrayMenorMayor)
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
function buscarData(array,valor){
    //filter que nos permitabuscar en titulo y autor
    let busqueda = array.filter((libro)=> libro.titulo.toLowerCase().includes(valor.toLowerCase()) || libro.autor.toLowerCase().includes(valor.toLowerCase()))
    //CONDICIONAL COINCIDENCIAS
    if(busqueda.length == 0){
        console.log(`No se encontraron coincidencias en el autor o titulo con ${valor}`)
        coincidencias.innerText = `No se encontraron coincidencias en el autor o titulo con ${valor}`
        // imprimirCatalogo(busqueda)
        containerLibros.innerHTML = ""
    }else{
        coincidencias.innerText = ""
        imprimirCatalogo(busqueda)
    }
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
    switch(selectOrden.value){
        case "0":
            imprimirCatalogo(biblioteca)
        break
        case "1":
            ordMayorMenor(biblioteca)
        break
        case "2":
            ordenarMenorMayorPrecio(biblioteca)
        break
        case "3":
            alfTituloAZ(biblioteca)
        break
        case "4":
            ordenarZAtitulo(biblioteca)
        break
    }
})
//elegir evento que consideren mejor para la experiencia de usuario (ej: change, input, click, etc)
buscador.oninput= ()=>{
    console.log(buscador.value)
    buscarData(biblioteca,buscador.value)
}
//evento btn guardar libro
guardarLibroBtn.addEventListener("click", ()=>{
    cargarLibro(biblioteca)
})
//Código:
imprimirCatalogo(biblioteca)


//https://es.javascript.info/introduction-browser-events#controladores-de-eventos