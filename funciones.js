
// funcion : bloque de codigo con una tarea concreta
// tres formas de declarar funciones
//concepto: hoisting -> funciones ciudaddes de primer mundo, se leen primero y luego se ejecuta el codigo

//Primera forma: explicita utulizamos la palabra reservada y le ponemos nombre


//declaracion de la funcion
//funcion sin parametro y sin retorno
function pedirNombre(){ 
    let nombre = prompt(`Hola, como te llamas`)
    saludarAlumno(nombre)
}


function saludarAlumno(nombreAlumnno) {
    console.log(`Hola querido ${nombreAlumnno}`)
}


//invocar funcion´
pedirNombre()

//invocamos funtion con parametro
//saludarAlumno("Vanesa")
//saludarAlumno("Lucas")
//saludarAlumno()

//segunda forma: anonima
const sumar = function(num1, num2){
    console.log(num1+num2)
    return num1+num2
}
const restar = function(num1, num2){ 
    console.log(num1-num2)
    let resta = num1-num2
    return resta
}

const div = function(c3po,r2d2){ 
    console.log(c3po/r2d2)
    return c3po/r2d2
}
let primeraSuma = sumar(4,5)
let resultadoResta = restar(7,5)
let resultadoDivision = div(15,3)


//tercera forma: flecha o arrow
