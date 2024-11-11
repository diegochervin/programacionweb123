//class constructora
class Libro{
    constructor(id, autor, titulo, precio, imagen ="libronuevo.jpg"){
        //atributos-propiedades
       this.id = id,
       this.autor = autor,
       this.titulo = titulo,
       this.precio = precio,
       this.imagen = imagen,
       this.cantidad = 1
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
    exponerCarrito(){
        console.log(this.id, this.titulo, this.autor, this.precio, this.cantidad)

    }
    sumarUnidad(){
        this.cantidad += 1
    }
    restarUnidad(){
        this.cantidad = this.cantidad - 1
    }
    sumarUnidades(cant){
        this.cantidad += cant
    }
 }
 //Instanciación de objetos: 
 const libro1 = new Libro(1,"Jorge Luis Borges", "Aleph", 800, "AlephBorges.jpg")
 const libro2 = new Libro(2,"Gabriel García Marquez", "Cien años de Soledad", 4500, "CienSoledadMarquez.jpg")
 const libro3 = new Libro(3,"Isabel Allende", "Paula", 2800, "PaulaAllende.jpg")
 const libro4 = new Libro(4,"Jorge Luis Borges","Ficciones", 1400, "FiccionesBorges.jpg")
 const libro5 = new Libro(5,"Mario Benedetti", "Andamios", 2200 ,"AndamiosBenedetti.jpg")
 const libro6 = new Libro(6,"Mario Vargas Llosa", "La ciudad y los perros", 2800, "CiudadPerrosVargasLlosa.jpg")

//  const libroPrueba = new Libro(7, "GOnza", "Aprender JS", undefined,"imagen")
//  console.log(libroPrueba)
//seteos de arrays stock(biblioteca) y carrito
let biblioteca  = []
console.log(biblioteca)
if(localStorage.getItem("biblioteca")){
    //debería darle de vuelta la estructura -- como mantener la cantidad
    //el array biblioStorage es para traermela info que capturao del browser
    let bibliotecaStorage = JSON.parse(localStorage.getItem("biblioteca"))
    //ciclo for para recorrer
    bibliotecaStorage.forEach((libro)=> 
    {//libro: el objeto que capture del storage
        //instanciar los objetos en la class
        let libroConClass = new Libro(libro.id, libro.autor, libro.titulo, libro.precio, libro.imagen)
        // console.log(libroConClass)
        //pushear los objetos que ya tiene la class en el array de biblioteca(mi stock)
        biblioteca.push(libroConClass)
    })
    console.log(biblioteca)
}else{
    console.log(`Cargamos biblio por primera vez`)
    biblioteca = [libro1,libro2,libro3,libro4,libro5,libro6]
    //estoy creando la clave biblioteca
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca))
}
 let carrito = [] 
 //que pasa cuando me traigo del storage el carrito ->
 //preguntar si existe esa key en el storage
 if(localStorage.getItem("carrito")){
    let carritoStorage = JSON.parse(localStorage.getItem("carrito"))
    for(let libroStorage of carritoStorage){
        
        //creo el libro con la class
        let libroClass = new Libro(libroStorage.id, libroStorage.autor, libroStorage.titulo, libroStorage.precio, libroStorage.imagen)
        //reasigno la cantidad con lo guardado en el storage
        libroClass.cantidad = libroStorage.cantidad
        //pushear al array
        carrito.push(libroClass)
    }
 }

let estanteria = []

//carga con fetch array estanteria
//Método url, acción (sino ponemos el segundo parámetro es un GET)
//URL DEL FETCH ES DESDE EL HTML AL JSON (NO DEL JS AL JSON)
fetch("libros.json")
.then((resp)=>resp.json())
.then((dataLibros)=>{
    //recorro el array que acabo de captura y lo instacncio con la class en el array estanteria
    for(let book of dataLibros){
        let libroNuevo = new Libro(book.id, book.autor, book.titulo, book.precio, book.imagen)
        estanteria.push(libroNuevo)
    }
})
//consologuamos estanteria aca afuera está vacio
console.log(estanteria)
//sino simulamos servidor (no utilizamos live server) aparece algo así:
// from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol