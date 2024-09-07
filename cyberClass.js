//class constructora

class Equipo{
    constructor(id, duenio, modelo, precio){
        //atributos-propiedades
       this.id = id,
       this.duenio = duenio,
       this.modelo = modelo,
       this.precio = precio
    }


//métodos en class se declaran por fuera del constructor
mostrarInfoEquipo(){
    console.log(`La recepcion N° ${this.id} es de ${this.duenio} ,es un ${this.modelo} y su precio es $${this.precio}`)
 }
 calcularIva(){
     this.precio = this.precio * 1.21
 }

 
 exponerCatalogo(){
    console.log(this.id, this.duenio, this.modelo, this.precio)
 }
}


//Instanciación de objetos: 

const imp1 = new Equipo(1,"Jorge Luis Borges", "3050", 800)
 const imp2 = new Equipo(2,"Gabriel García Marquez", "Epson L395", 4500)
 const imp3 = new Equipo(3,"Isabel Allende", "Epson L810", 2500)
 const imp4 = new Equipo(4,"Jorge Luis Borges","HP 4250", 1400)
 const imp5 = new Equipo(5,"Mario Benedetti", "Epson L3250", 2200)
 const imp6 = new Equipo(6,"Mario Vargas Llosa", "Epson L3250", 2800)

let estanteria = []
estanteria.push(imp1,imp2,imp3,imp4,imp5,imp6)
console.log(estanteria)

estanteria.forEach(function(impresora){
    impresora.calcularIva()
    console.log(`EL precio con el IVA agrgado es ${impresora.precio}`)
})




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
        let entrada = parseInt(prompt("Ingrese el precio de la reparacion"));
        precio = entrada

        // Verifica si la entrada no es un número válido
        if (isNaN(precio)) {
            alert("Por favor, ingrese un número válido.")
        }
    } while (isNaN(precio)); // Repite mientras no se ingrese un número válido
    return precio
 }

function solicitarPersona() {
  let duenio
    do {

        let entrada = prompt("Ingrese el nombre y Apellido")
        duenio = entrada

        if (duenio === "") {
            alert("Por favor, ingrese el nombre y apelldo.");
        }
    } while (duenio === "")
        return duenio
}

 function solicitarEquipo() {
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
    


function cargarEquipo() {
    let nombreIng = solicitarPersona()
    let modeloIng = solicitarEquipo()
    let precioIng = solicitarPrecio()
    let equipoNuevo = new Equipo(estanteria.length+1, nombreIng, modeloIng, precioIng)
    estanteria.push(equipoNuevo)
}


function menu(){
    //finalizarMenu datoBandera
    let finalizarMenu = false
    while(finalizarMenu ==false){
    
        let opcion = prompt(`Ingrese la opción que desea:
                            1 - Cargar equipo
                            2 - Mostrar info
                            3 - Opcion 3
                            0 - Salir del menú`)
        switch(opcion){
            case "1":
                cargarEquipo()
            break
            case "2":
                mostrarInfoDetallada(estanteria)
            break
            case "3":
                console.log(estanteria)
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


//menu()

//metodos de busqueda: find y filter
//FIND devuelve el elemnto completo si hay coincidencia (y deja de buscar)
//si no hay coincidencia devuelve undefined
//retorno la comparacion que deseo
// este find busca por modelo 

let busqueda = estanteria.find((imp)=>{
    return imp.modelo.toUpperCase() == "HP 4250"
})
console.log(busqueda)
//function arrow ()=> tiene return implicito
// ()=> return debo hacerlo explicito (tengo que escribir la palabra retorno)

let busqueda2 = estanteria.find((imp)=> imp.precio > 1000 && imp.precio < 5000)
console.log(busqueda2)


function buscarModelo(array){   
    let modeloBuscado = prompt("Ingrese el modelo del equipo")
    let buscarModelo = array.find((impresora)=> impresora.modelo.toLowerCase() == modeloBuscado.toLowerCase())
    if (buscarModelo == undefined) {
        console.log(`el modelo ${modeloBuscado} no se encuentra`)
    } else {
        
       buscarModelo.mostrarInfoEquipo()    
    }
}
//buscarModelo(estanteria)

//filter devuelve todo lo que coincida con la busqueda/comparacion en un array sino hay ninguna coincidencia devuelve el array vacio

let buscarDuenioFilter = estanteria.filter((equipo)=> equipo.duenio.toLowerCase() == "jorge luis borges" )
if (buscarDuenioFilter.length == 0) {
    console.log("no se encontro nada")
} else {
    console.log(buscarDuenioFilter)
}



let buscarFilterPrecio = estanteria.filter((b)=>b.precio < 3000)
if (buscarFilterPrecio.length == 0) {
    console.log("no hay equipos con ese precio")
} else {
    buscarFilterPrecio.forEach((equipo)=> equipo.exponerCatalogo())  
}

//mostrar toda la estanteria
estanteria.forEach((equipo)=> equipo.exponerCatalogo())  