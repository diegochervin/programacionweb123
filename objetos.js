//objects: metodos propiedades y metodos
// objetos literales

const libroFiccion = {
  //key : value
  titulo: "ficcion",
  autor: "borges",
  precio: 777,
};

console.log(libroFiccion);

//acceder a una propiedad
//primer forma

console.log(libroFiccion.titulo);

//segunda forma
console.log(libroFiccion["autor"]);

//reasignar el valor de los atributos
libroFiccion.precio = libroFiccion.precio * 0.9;
console.log(libroFiccion.precio);

//segunda forma de crear objetos
// funcion constructora:

//declaramos la funcion
function Auto(modeloIngresado, mar, precio) {
  (this.modelo = modeloIngresado),
    (this.marca = mar),
    (this.precio = precio),
    //metodos(funciones o acciones)
    (this.calcularIva = ()=>  this.precio * 0.21),
    (this.precioFinal = ()=> this.precio + this.calcularIva),
    (this.mostrarInfo = function () {
      console.log(
        `el auto es de la marca ${this.marca} , su modelo es ${this.modelo} y su precio es ${this.precio}`
      );
    });
  this.actualizarPrecio = function () {
    this.precio = Number(prompt("Ingrese su nuevo precio"));
   
  };
}
//invocamos funcion constructora UTILIZAR new
const fiat600 = new Auto("600", "Fiat", 100);

console.log(fiat600);
fiat600.mostrarInfo();

const chevy = new Auto("CHevy", "chevrolet", 700000);
chevy.mostrarInfo();



fiat600.mostrarInfo();

//recorrer un objeto por dentro propiedad a propiedad
//for(let prop in fiat600){
   // console.log(prop)
    //console.log(fiat600[prop])
//}

class Libro{

constructor(titulo, autor, precio){
    //decido propiedades que necesito o conviene para nuestro objeto
    this.titulo = titulo,
    this.autor = autor,
    this.precio = precio,
    this.vendido = false
}

mostrarDatalibro(){
console.log(`el libro es ${this.autor} del autor ${this.autor} y su precio es ${this.precio}`) }

precioLibro(){
    console.log(`el precio es ${this.precio}`) }


comprarLibro(){
    let ingreso = prompt(`desea comprar el libro ${this.titulo} con un precio de ${this.precio} y el autor ${this.autor} `)
        if (ingreso.toLowerCase() == "si" ) {
        this.consultarPlata()
    } else {
        alert("no queres comprar")
    }    

}


consultarPlata(){
    let ingreso = Number(prompt("Ingrese cuanta plata tiene"))
    if (ingreso < this.precio) {
        alert("No te alcanza para comprar")
    } else {
        this.vendido = true
    }
}


}

const aleph = new Libro("Aleph", "Borges", 753)
aleph.mostrarDatalibro()


aleph.comprarLibro()
aleph.mostrarDatalibro()
console.log(aleph.vendido)

