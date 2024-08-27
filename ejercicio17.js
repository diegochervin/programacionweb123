let montoinicial = parseInt(prompt("ingrese el monto inicial"))
let montoObjetivo = parseInt(prompt("ingrese el monto objetivo"))


while (montoinicial > montoObjetivo) {
    alert("el valor inicial esta mal")
    montoinicial = parseInt(prompt("ingrese el monto inicial"))
    montoObjetivo = parseInt(prompt("ingrese el monto objetivo"))
} 

let tasa = parseFloat(prompt("ingrese la tasa de interes"))
let tasa2 = tasa / 100
let tasafinal = tasa2 + 1

let resultado = montoinicial * tasafinal
let i = 0

// sacar interes

    do {
    
 
           resultado = resultado * tasafinal
            console.log("el monto total anualizado es " + resultado) 
            
            // acumulador de años
            i = i + 1
            
     
    } while (resultado < montoObjetivo);
    console.log("el monto inial es " + montoinicial)
    console.log("sos millo el resultado es : " + resultado)
    console.log("la cantidad de años es " + i)

