/*Realice un cÃ³digo capaz de ayudar en dar el alta y calcular el salario de los pasantes:
En primer lugar se pedirÃ¡ cuantos pasantes van a ser dados de alta, con ese dato se procede a 
pedir el nombre de pila y la cantidad de horas a trabajar de cada pasante. 
AtenciÃ³n el nombre de pila no puede ser vacÃ­o y la cantidad de horas debe ser un dato nÃºmerico 
que no puede ser menor o igual a 0 ni mayor a 48hs (Validar estos datos. En caso de que se ingrese 
incorrectamente un dato volver a pedirlo hasta que se ingrese de forma correcta y en los 
valores mencionados).
Teniendo en cuenta que todos los pasantes cobran el mismo valor por cada hora trabajada 500, calcular cuanto ganarÃ­an en total 
en base a su cantidad de horas e informarlo mediante un alert.
Tener en cuenta que si el total ganado por el 
pasante es 15000 o mÃ¡s, se le cobra un seguro 
de trabajo que representa el 5% de su remuneraciÃ³n total, por lo tanto, tenerlo en cuenta a la hora de informarlo, dar detalle del 
total y el descuento realizado en caso de existir. */

function solicitarNumero() {
    let numero;
    do {
        let entrada = parseInt(prompt("Por favor, cantidad de pasantes a dar de alta:"));
        numero = entrada

        // Verifica si la entrada no es un número válido
        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.")
        }
    } while (isNaN(numero)); // Repite mientras no se ingrese un número válido
    return numero;
}


let cant = solicitarNumero()
console.log(cant)


function solicitarNombre() {
    let nombre 
    do {
 
    let entrada = prompt("Por favor, ingrese el nombre del pasante a dar de alta:")
      nombre = entrada
    
    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
         }
      } while (nombre === "")
   
     return nombre
     }
    

//let nombre = solicitarNombre()
//console.log(`el nombre a dar de alta es ${nombre}`)


function solicitarHoras() {
    let horas
    do {
        let entrada = parseInt(prompt("Por favor, cantidad de horas del pasantes a dar de alta:"));
        numero = entrada
    
        // Verifica si la entrada no es un número válido
        if (isNaN(numero) || numero <= 0 || numero > 48) {
            alert("Por favor, ingrese un número válido.")
        }
    } while (isNaN(numero) || numero <= 0 || numero > 48) // Repite mientras no se ingrese un número válido
    
    return numero
}

/*
let horas = solicitarHoras()
console.log(horas)
*/


let valorHora = 500

let i = 0

   do {
        
       let nombre = solicitarNombre()
        let horas = solicitarHoras()
        i = i + 1
        sueldo = valorHora * horas    
        if(sueldo >= 15000) {
            let descuento = 0.05
            let sueldoDesc = sueldo * (1 - descuento)
            let seguro = sueldo - sueldoDesc
            alert(`${nombre} va a trabajar ${horas} horas, va a pagar un seguro de ${seguro} y va a cobrar ${sueldoDesc}`)
        }else
        alert(`${nombre} va a trabajar ${horas} horas y va a cobrar ${sueldo}`)

    } while ( i < cant);

