//class constructora

class Bateria {
    constructor(id, marca, modelo, precio, stock, imagen) {
        (this.id = id),
        (this.marca = marca),
        (this.modelo = modelo),
        (this.precio = precio),
        this.imagen = imagen,
        this.stock = stock,
        this.cantidad = 0
       
      }
  
    mostrarInfoEquipo() {
      console.log(`#${this.id} es una bateria de Marca ${this.marca} , es un ${this.modelo} y su precio es $${this.precio}`)
    }

    calcularPrecioTarjeta3cuotas() {
      this.precio = this.precio * 1.30
     }
  
    exponerCatalogo() {
      console.log(this.id, this.marca, this.modelo, this.precio, this.cantidad, this.stock); }
    
      sumarUnidades(cant){ 
        this.cantidad +=cant
      } 

      restarUnidades(cant){ 
        this.cantidad -= cant 
      } 
    }
    
  
  //Instanciación de objetos:
  
  const bat1 = new Bateria(1, "Ferrobat", "12X65", 85000, 10, "12x65.jpg");
  const bat2 = new Bateria(2, "Moura", "M20GD", 145000, 10, "m20gd.jpg");
  const bat3 = new Bateria(3, "Willard", "UB620", 155000, 10, "ub620.jpg");
  const bat4 = new Bateria(4, "Ferrobat", "12x70", 100000, 10, "12x70.jpg");
  const bat5 = new Bateria(5, "Ferrobat", "12x80", 110000, 10, "12x80.jpg");
  const bat6 = new Bateria(6, "Moura", "M22GD", 165000, 10, "m22gd.jpg");
  const bat7 = new Bateria(7, "Ferrobat", "prueba1", 150, 0, "prueba1.jpg")
  const bat8 = new Bateria(8, "Ferrobat", "prueba2", 150, 0, "prueba2.jpg")
  //crear storage para stock
  
  let local = [];
  if(localStorage.getItem("local")){
   let storelocalLPM = JSON.parse(localStorage.getItem("local"))
// ciclo for para recorrer, el array localStore es para traerme la info que capturamos del browser
  storelocalLPM.forEach((bat)=>
  //batstorage el objeto que capture del storage
  {
    let batConClass = new Bateria(bat.id, bat.marca, bat.modelo, bat.precio, bat.stock, bat.imagen);
    local.push(batConClass)
})
console.log(local)

  }else{
    console.log(`cargamos el local por primera vez`)
   local = [bat1, bat2, bat3, bat4, bat5, bat6, bat7, bat8]
   localStorage.setItem("local", JSON.stringify(local))
  }
  
  
  let carrito = [];
  if(localStorage.getItem("carrito")){
    let carritoStore = JSON.parse(localStorage.getItem("carrito"))
 // ciclo for para recorrer, el array localStore es para traerme la info que capturamos del browser
   carritoStore.forEach((bat)=>
   //batstorage el objeto que capture del storage
   {
   
     let carritoClass = new Bateria(bat.id, bat.marca, bat.modelo, bat.precio,bat.imagen, bat.stock)

    carritoClass.cantidad =  bat.cantidad
     carrito.push(carritoClass)
 })}



