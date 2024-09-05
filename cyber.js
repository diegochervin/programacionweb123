let estanteria = []

function solicitarPrecio() {
    let numero;
    do {
        let entrada = parseInt(prompt("Ingrese el precio de la reparacion"));
        numero = entrada

        // Verifica si la entrada no es un número válido
        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.")
        }
    } while (isNaN(numero)); // Repite mientras no se ingrese un número válido
    return numero;
}

function solicitarTelefono() {
    let numero;
    do {
        let entrada = parseInt(prompt("Ingrese el telefono"));
        numero = entrada

        // Verifica si la entrada no es un número válido
        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.")
        }
    } while (isNaN(numero)); // Repite mientras no se ingrese un número válido
    return numero;
}


function solicitarPersona() {
    let nombre
    do {

        let entrada = prompt("Ingrese el nombre y Apellido")
        nombre = entrada

        if (nombre === "") {
            alert("Por favor, ingrese el nombre y apelldo.");
        }
    } while (nombre === "")

    return nombre
}

function solicitarNumeroSerie() {
        let entrada = prompt("Ingrese el Numero de Serie")
        return entrada
     }


function solicitarEquipo() {
    let nombre
    do {

        let entrada = prompt("Ingrese el modelo del equipo")
        nombre = entrada

        if (nombre === "") {
            alert("Por favor, ingrese el nombre y apelldo.");
        }
    } while (nombre === "")

    return nombre
}

function solicitarFalla() {
    let nombre
    do {

        let entrada = prompt("Ingrese la falla del equipo del equipo")
        nombre = entrada

        if (nombre === "") {
            alert("Por favor, ingrese la falla del equipo.");
        }
    } while (nombre === "")

    return nombre
}

function solicitarAccesorio() {
       let accesorio = prompt("Ingrese los accesorios")
        
        return accesorio
    }

function solicitarPresupuesto() {
    let opcion 

    // Bucle que continúa hasta que el usuario elija 1 o 2
    while (opcion !== '1' && opcion !== '2') {
        opcion = prompt("Elige una opción:1. Presupuestar  2. Hacer directamente");

        if (opcion !== '1' && opcion !== '2') {
            alert("Opción no válida. Por favor, elige 1 o 2.");
        }
    }


    if (opcion === '1') {
        opcion = "presupuestar"
        solicitarPrecio()
        // Llama a la función de presupuestar aquí
    } else if (opcion === '2') {
       opcion = "hacer"
    }
    return opcion
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
                console.log(estanteria)
            break
            case "3":
                console.log("opc 3")
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


function mostrarInfoDetallada(array){
    
    for (let i = 0; i < array.lenght; i++ ){
        array[i].mostrarInfoDetallada
    } 

}



menu()
function cargarEquipo() {
let equipo = {
   
   
    nombre: solicitarPersona(),
    telefono: solicitarTelefono(),
    modelo: solicitarEquipo(),
    numero_serie: solicitarNumeroSerie(),
    falla: solicitarFalla(),
    accesorios: solicitarAccesorio(),
    presupuesto: solicitarPresupuesto()
    
}
estanteria.push(equipo)
}


