//class constructora
class Libro{
    constructor(id, autor, titulo, precio){
        //atributos-propiedades
       this.id = id,
       this.autor = autor,
       this.titulo = titulo,
       this.precio = precio,
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
 const libro1 = new Libro(1,"Jorge Luis Borges", "Aleph", 800)
 const libro2 = new Libro(2,"Gabriel García Marquez", "Cien años de Soledad", 4500)
 const libro3 = new Libro(3,"Isabel Allende", "Paula", 2800)
 const libro4 = new Libro(4,"Jorge Luis Borges","Ficciones", 1400)
 const libro5 = new Libro(5,"Mario Benedetti", "Andamios", 2200)
 const libro6 = new Libro(6,"Mario Vargas Llosa", "La ciudad y los perros", 2800)

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
        let libroConClass = new Libro(libro.id, libro.autor, libro.titulo, libro.precio)
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