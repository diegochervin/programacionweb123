//class constructora

class Bateria{
    constructor(id, marca, modelo, precio){
        //atributos-propiedades
       this.id = id,
       this.marca = marca,
       this.modelo = modelo,
       this.precio = precio
    }


//métodos en class se declaran por fuera del constructor
mostrarInfoEquipo(){
    console.log(` ${this.id} es de ${this.marca} ,es un ${this.modelo} y su precio es $${this.precio}`)
 }
 calcularIva(){
     this.precio = this.precio * 1.21
 }

 
 exponerCatalogo(){
    console.log(this.id, this.marca, this.modelo, this.precio)
 }
}


//Instanciación de objetos: 

const bat1 = new Bateria(1,"Ferrobat", "12x60", 80000)
const bat2 = new Bateria(2,"Moura", "M20GD", 107000)
const bat3 = new Bateria(3,"Willard", "UB620", 115000)
const bat4 = new Bateria(4,"Ferrobat","12x75", 140000)
const bat5 = new Bateria(5,"Ferrobat", "12x80", 220000)
const bat6 = new Bateria(6,"Moura", "M22GD", 128000)

let local  = []
local.push(bat1,bat2,bat3,bat4,bat5,bat6)
console.log(local)


/*
local.forEach(function(bateria){
    bateria.calcularIva()
    console.log(`EL precio con el IVA agrgado es ${bateria.precio}`)
})
*/



function mostrarInfoDetallada(array){
    console.log(`Mostrar Equipos con for Each`)
    array.forEach(
        function(eleme){
        eleme.mostrarInfoEquipo()
    }
    )
}


function solicitarPrecio() {
    let precio;
    do {
        let entrada = parseInt(prompt("Ingrese el precio de la bateria"));
        precio = entrada

        // Verifica si la entrada no es un número válido
        if (isNaN(precio)) {
            alert("Por favor, ingrese un número válido.")
        }
    } while (isNaN(precio)); // Repite mientras no se ingrese un número válido
    return precio
 }

function solicitarMarca() {
  let marca
    do {

        let entrada = prompt("Ingrese el nombre y Apellido")
        marca = entrada

        if (marca === "") {
            alert("Por favor, ingrese el nombre y apelldo.");
        }
    } while (marca === "")
        return marca
}

 function solicitarModelo() {
    let modelo
    do {

        let entrada = prompt("Ingrese el modelo del equipo")
        modelo = entrada

        if (modelo === "") {
            alert("Por favor, Ingrese el modelo del equipo");
        }
    } while (modelo === "")
        return modelo
}
    


function cargarBateria() {
    let nombreIng = solicitarMarca()
    let modeloIng = solicitarModelo()
    let precioIng = solicitarPrecio()
    let bateriaNueva = new Bateria(local.length+1, nombreIng, modeloIng, precioIng)
    local.push(bateriaNueva)
}


function menu(){
    //finalizarMenu datoBandera
    let finalizarMenu = false
    while(finalizarMenu ==false){
    
        let opcion = prompt(`Ingrese la opción que desea:
                            1 - Ingresar Nueva Bateria
                            2 - Mostrar info
                            3 - Opcion 3
                            0 - Salir del menú`)
        switch(opcion){
            case "1":
                cargarEquipo()
            break
            case "2":
                mostrarInfoDetallada(local)
            break
            case "3":
                console.log(local)
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




let busqueda = local.find((bat)=>{
    return bat.modelo.toUpperCase() == "M20GD"
})
console.log(busqueda)


//function arrow ()=> tiene return implicito
// ()=> return debo hacerlo explicito (tengo que escribir la palabra retorno)

let busqueda2 = local.find((bat)=> bat.precio > 1000 && bat.precio < 5000)
console.log(busqueda2)


function buscarModelo(array){   
    let modeloBuscado = prompt("Ingrese el modelo a buscar")
    let buscarModelo = array.find((bateria)=> bateria.modelo.toUpperCase() == modeloBuscado.toUpperCase())
    if (buscarModelo == undefined) {
        console.log(`el modelo ${modeloBuscado} no se encuentra`)
    } else {
        
       buscarModelo.mostrarInfoEquipo()    
    }
}
//buscarModelo(estanteria)

//filter devuelve todo lo que coincida con la busqueda/comparacion en un array sino hay ninguna coincidencia devuelve el array vacio

let buscarMarcaFilter = local.filter((bateria)=> bateria.marca.toLowerCase() == "moura" )
if (buscarMarcaFilter.length == 0) {
    console.log("no se encontro nada")
} else {
    console.log(buscarMarcaFilter)
}



let buscarFilterPrecio = local.filter((b)=>b.precio < 130000)
if (buscarFilterPrecio.length == 0) {
    console.log("no hay equipos con ese precio")
} else {
    buscarFilterPrecio.forEach((equipo)=> equipo.exponerCatalogo())  
}


//mostrar toda la estanteria
//local.forEach((bateria)=> bateria.exponerCatalogo())  