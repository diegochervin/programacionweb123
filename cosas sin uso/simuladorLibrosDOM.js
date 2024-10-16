//CAPTURAD DE DOM
let containerLibros = document.getElementById("containerLibros")

//Funciones 
// for(let libro of biblioteca){
//     //creo un div que va a corresponder con cada card para cada uno de los libros
//     let libroNuevoDiv = document.createElement("div")
//     //modifico class de la etiqueta
//     libroNuevoDiv.className = "col-12, col-md-6 col-lg-4 col-xl-3 my-4 mx-0"
//     //innerHTML insertamos todo el contenido
//     libroNuevoDiv.innerHTML = `<div id="${libro.id}" class="card" style="width: 18rem;">
//     <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${libro.imagen}" alt="Aleph de Jorge Luis Borges">
//     <div class="card-body">
//         <h4 class="card-title">${libro.titulo}</h4>
//         <p>Autor: ${libro.autor}</p>
//         <p class="">Precio: ${libro.precio}</p>
//     <button id="" class="btn btn-outline-success">Agregar al carrito</button>
//     </div>
//     </div>`
//     containerLibros.append(libroNuevoDiv)
// }

function imprimirCatalogo(array){
    array.forEach((libro) => {
        //creo etiqueta:
        let divNuevoLibro = document.createElement("div")
        divNuevoLibro.classList = "col-12 col-md-6 col-lg-4 col-xl-3 my-4 mx-0"
        divNuevoLibro.innerHTML = `
        <div id="${libro.id}" class="card" style="width: 18rem;">
            <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${libro.imagen}" alt="${libro.titulo} de ${libro.autor}">
            <div class="card-body">
                <h4 class="card-title">${libro.titulo}</h4>
                <p>Autor: ${libro.autor}</p>
                <p class="">Precio: ${libro.precio}</p>
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

//Código:
imprimirCatalogo(biblioteca)