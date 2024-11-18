function menu(){
    //finalizarMenu datoBandera
    let finalizarMenu = false
    while(finalizarMenu ==false){
    
        let opcion = prompt(`Ingrese la opción que desea:
                            1 - Cargar libro
                            2 - Mostrar info
                            3 - Opcion 3
                            0 - Salir del menú`)
        switch(opcion){
            case "1":
                cargarLibro()
            break
            case "2":
                console.log("opc 2")
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