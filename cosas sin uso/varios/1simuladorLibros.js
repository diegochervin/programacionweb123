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
 console.log(biblioteca)
 //otra forma de cargar el array
 let libreria = []
 libreria.push(libro1,libro2,libro3,libro4)

 libreria.forEach(function(book){
    book.calcularIva()
    console.log(`EL precio con el IVA calculado es ${book.precio}`)
 })
function cargarLibro(){
    let autorIng = prompt(`Ingrese el nombre del autor del libro`)
    let tituloIng = prompt(`Ingrese el nombre del titulodel libro`)
    let precioIng = Number(prompt(`Ingrese el precio del libro`))
    let libroNuevo = new Libro(biblioteca.length+1, autorIng, tituloIng, precioIng)
    console.log(libroNuevo)
    //sumar al array
    biblioteca.push(libroNuevo)
}

function mostrarInfoDetallada(array){
    // for(let i = 0; i < array.length; i++){
    //     array[i].mostrarInfoLibro()
    // }
    //for of forma de recorrer un array
    // for(let elemento of array ){
    //     elemento.mostrarInfoLibro()
    // }
    // for(let obj of array){
    //     console.log(obj)
    // }
    //recorrer con método avanzados forEach
    console.log(`Mostrar biblio con for Each`)
    array.forEach(
        function(eleme){
        eleme.mostrarInfoLibro()
    }
    )

}
//funciones
function menu(){
    //finalizarMenu datoBandera
    let finalizarMenu = false
    //condicion finalizarMenu != true
    while(finalizarMenu == false){
    
        let opcion = prompt(`Ingrese la opción que desea:
                            1 - Cargar libro
                            2 - Mostrar info detallada de cada libro
                            3 - Mostrar biblio
                            0 - Salir del menú`)
        switch(opcion){
            case "1":
                cargarLibro()
            break
            case "2":
                mostrarInfoDetallada(biblioteca)
            break
            case "3":
                console.log(biblioteca)
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


menu()


//Objetivo para el lunes - crear menú - Crear objeto literal con una function - mostrar esa info a partir - crear function constructora 
//Posibilidad ejercicio 9 con objetos



