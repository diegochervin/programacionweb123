//PROYECTO MIS LIBROS
//class constructora
class Libro{
    constructor(id, autor, titulo, precio){
        //atributos-propiedades
       this.id = id,
       this.autor = autor,
       this.titulo = titulo,
       this.precio = precio
    }
    //métodos en class se declaran por fuera del constructor
    mostrarInfoLibro(){
       console.log(`El libro fue escrito por ${this.autor} su titulo es ${this.titulo} y su precio es ${this.precio}`)
    }
    calcularIva(){
        this.precio = this.precio * 1.21
    }
    exponerCatalogo(){
        console.log(this.id, this.titulo, this.autor, this.precio)
    }
 }
 //Instanciación de objetos: 
 const libro1 = new Libro(1,"Jorge Luis Borges", "Aleph", 800)
 const libro2 = new Libro(2,"Gabriel García Marquez", "Cien años de Soledad", 4500)
 const libro3 = new Libro(3,"Isabel Allende", "Paula", 2800)
 const libro4 = new Libro(4,"Jorge Luis Borges","Ficciones", 1400)
 const libro5 = new Libro(5,"Mario Benedetti", "Andamios", 2200)
 const libro6 = new Libro(6,"Mario Vargas Llosa", "La ciudad y los perros", 2800)

 //argar array con objetos
 let biblioteca = [libro1,libro2,libro3,libro4,libro5,libro6]
 let carrito = []
//funciones
function cargarLibro(){
    let autorIng = prompt(`Ingrese el nombre del autor del libro`)
    let tituloIng = prompt(`Ingrese el nombre del titulodel libro`)
    let precioIng = Number(prompt(`Ingrese el precio del libro`))
    let libroNuevo = new Libro(biblioteca.length+1, autorIng, tituloIng, precioIng)
    console.log(libroNuevo)
    //sumar al array
    biblioteca.push(libroNuevo)
}
function mostrarCatalogo(arr){
    arr.forEach((e)=>e.exponerCatalogo() )
}
function mostrarInfoDetallada(array){
    console.log(`Mostrar biblio con for Each`)
    array.forEach(
        function(eleme){
        eleme.mostrarInfoLibro()
    }
    )

}
function menu(){
    //finalizarMenu datoBandera
    let finalizarMenu = false
    //condicion finalizarMenu != true
    while(finalizarMenu == false){
    
        let opcion = prompt(`Ingrese la opción que desea:
                            1 - Cargar libro
                            2 - Mostrar info detallada de cada libro
                            3 - Mostrar biblio
                            4 - Ordenar 
                            5 - Agregar al carrito
                            6 - Calcular total 
                            7 - 
                            8 - Buscar data por titulo o autor
                            9 - Eliminar libro
                            0 - Salir del menú`)
        switch(opcion){
            case "1":
                cargarLibro()
            break
            case "2":
                mostrarInfoDetallada(biblioteca)
            break
            case "3":
                mostrarCatalogo(biblioteca)
            break
            case "4":
                let opcionOrdenar = prompt(`Ingrese el criterio por el que desea ordenar:
                1 - Menor a mayor por precio
                2 - Mayor a menor
                3 - Alfabeticamente por titulo
                4 - Alf z -a por titulo`)
                switch(opcionOrdenar){
                    case "1":
                        ordenarMenorMayorPrecio(biblioteca)
                    break
                    case "2":
                        ordMayorMenor(biblioteca)
                    break
                    case "3":
                        alfTitulo(biblioteca)
                    break
                    case "4":
                        ordenarZAtitulo(biblioteca)
                    break
                    default:
                        console.log(`La opción seleccionada ${opcionOrdenar} no existe`)
                    break
                }
            break
            case "5":
                agregarAlCarrito(biblioteca, carrito)
            break
            case "6":
                calcularTotal(carrito)
            break
            case "8":
                buscarData(biblioteca)
            break
            case "9":
                borrarLibro(biblioteca)
            break
            case "0":
                console.log("Gracias por utilizar nuestra app")
                finalizarMenu = true
            break
            default:
                console.log(`La opción seleccionada ${opcion} no existe`)
            break
        }
    }
}
function buscarTitulo(array){
    let tituloBuscado = prompt("Ingrese el titulo del libro que desea")
    let buscarTitulo = array.find((libro)=> libro.titulo.toLowerCase() == tituloBuscado.toLowerCase() )
    //CÓMO MOSTRAR EL ELEMENTO EN CASO DE QUE ENCONTREMOS
    //CÓMO MOSTRAR OTRO MSJ SI NO ENCONTRAMOS NADA
    if(buscarTitulo != undefined){
        buscarTitulo.mostrarInfoLibro()
    }else{
        console.log(`El libro ${tituloBuscado} no está disponible`)
    }
}
function buscarData(array){
    //filter que nos permitabuscar en titulo y autor
    let infoBuscar = prompt(`Ingrese lo que desea buscar en título o autor`)
    let busqueda = array.filter((libro)=> libro.titulo.toLowerCase().includes(infoBuscar.toLowerCase()) || libro.autor.toLowerCase().includes(infoBuscar.toLowerCase()))
    //CONDICIONAL COINCIDENCIAS
    if(busqueda.length == 0){
        console.log(`No se encontraron coincidencias en el autor o titulo con ${infoBuscar}`)
    }else{
        mostrarCatalogo(busqueda)
    }
}

//function ordenar menor a mayor:
function ordenarMenorMayorPrecio(array){
    console.log(`Ordenado de menor a mayor por precio:`)
    //copiar/clonar array
    let arrayMenorMayor = [].concat(array)
    arrayMenorMayor.sort((a, b)=> a.precio - b.precio)
    mostrarCatalogo(arrayMenorMayor)
}
function ordMayorMenor(array){
    console.log(`Ordenado de mayor a menor por precio`)
    let copia = [].concat(array)
    copia.sort((n1, n2)=> n2.precio - n1.precio)
    mostrarCatalogo(copia)
}
function alfTitulo(ar){
    console.log(`catalogo ordenado de la A-> por titulo`)
    let arrayAlfTitulo = [].concat(ar)
    ar.sort((a,b)=>{
        if(a.titulo < b.titulo){
            return -1
        }
        if(a.titulo > b.titulo){
            return 1
        }
        return 0
    })
    mostrarCatalogo(arrayAlfTitulo)
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
    mostrarCatalogo(arrayTituloZA)
}
function borrarLibro(array){
    //muestracat por consola
    mostrarCatalogo(array)
    //pide id del libro a eliminar
    let idEliminar = Number(prompt(`INgrese el id a eliminar, en consola está el catalogo`))
    //encuentra id del libro
    array.forEach( (book)=> {
        if(book.id == idEliminar){
            
            let indice = array.indexOf(book)
            array.splice(indice, 1)
            //elimina ese libro -> splice(donde comienza trabajar, cuantos voy eliminar)
            console.log(`EL libro con el id ${idEliminar} fue elimnado. EL catalogo actualizado es:`)
            mostrarCatalogo(array)
        }
        //probar findIndex()
        // let index = array.findIndex((libro)=>libro.id == idEliminar)
        // array.splice(index, 1)
        //que pasa si el idEliminar ingresado no existe, hacer cndicinal que valide eso
    })
}
function agregarAlCarrito(arrayStock, arrayCarrito){
    //mostrar Catalogo para que usuario sepa la oferta
    mostrarCatalogo(arrayStock)
    //preguntar id del libro deseado
    let idLibroComprado = Number(prompt(`Mire el catalogo en consola y selecione la ide del libro que desea agregar`))
    //buscar en el array stock el libro elegido
    let libroComprado = arrayStock.find((libro)=>libro.id == idLibroComprado)
    //evaluar si el libroComrado existe, en caso de que si pushearlo sino NO 
    //planteo no puedo volver a sumar el mismo libro al carrito
    if(libroComprado == undefined){
        console.log(`El id ${idLibroComprado} no existe en nuestro catalogo`)
    }else{
        //planteo no puedo volver a sumar el mismo libro al carrito
        let libroEnCarrito = arrayCarrito.find((book)=> book.id == libroComprado.id)
        if(libroEnCarrito == undefined){
            //pushear al array del carrito
            arrayCarrito.push(libroComprado)
        }else{
            console.log(`Este libro ya existe en el carrito`)
            libroComprado.exponerCatalogo()
        }
    }
    //chequear el carrito
    console.log(arrayCarrito)
}
function calcularTotal(carrito){
    //solución con forEach
    let total = 0
    //recorremos el array, accedemos a la propiedad y la acumulamos en la variable
    carrito.forEach((libro)=> total += libro.precio)
    console.log(`El total de su compra es ${total}`)
    //solución con for of
    let totalForOf = 0
    for(let book of carrito){
        //acumular total
        totalForOf += book.precio
    }
    console.log(`El total calculado con un FOr of es ${totalForOf}`)
    //solución con reduce método avanzado
    //dos parámetros primer function donde acumulo, segundo donde arranco el acumulador
    //el primer parametro que es la function donde acumulo, tiene dos parametros el primero es la variable que acumulo el segundo el elemento
    let totalReduce = carrito.reduce((total, libro)=> total= total + libro.precio,0)
    console.log(totalReduce)
}

//CODIGO:
menu()

//toSorted https://midu.dev/to-reversed-to-spliced-to-sorted-with/