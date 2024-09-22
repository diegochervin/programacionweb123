//CICLOS
// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

//CICLO FOR por conteo
//desde; hasta; actualización 
//mostrar numeros del 0 al 10
for(let index = 0; index <=10 ; index = index + 1){
    console.log(index)
}
//preguntarle al usuario un número y devolverle la tabla de multiplicar del 0 al 10
// let numM = parseInt(prompt("Ingrese el num que desea multiplicar"))
// //sugar syntax i = i + 1 es equivalente a i++
// for(let index = 0; index <=10 ; index++){
//     console.log(`${numM} x ${index} = ${numM * index}`)
// }

//sumar perimetro de un poligono preguntando los lados al usuario
let cantLados = Number(prompt("Ingrese la cantidad de lados de su figura"))
let perimetro = 0
for(let i = 1; i <= cantLados; i++){
    let lado = Number(prompt("Ingrese la medida del lado n° " + i))
    console.log(lado)
    while(isNaN(lado)){
        lado = Number(prompt("ATENCION DATO INCORRECTO. Ingrese la medida del lado n° " + i))
    }
    perimetro = perimetro + lado
    // console.log(`El perimetro parcial es ${perimetro}`)
}
console.log(`El perimetro de la figura de ${cantLados} lados es ${perimetro}`)

//CICLOS CONDICIONALES
//while - do while
//do while: se ejecuta AL MENOS una vez y mientras se cumpla la condición
//while se ejecuta mientras se cumpla la condición 
// do{
//     instrucciones a ejecutar al menos una vez
// }while(condición a evaluar)
// let adivinanza = false
// do{
//     let rta = prompt(`Qué tiene seis cara y 21 ojos`)
//     if(rta.toLowerCase() == "dado"){
//         console.log(`Felictaciones :D la rta es correcta`)
//         alert(`Felictaciones :D la rta es correcta`)
//         adivinanza = true
//     }else{
//         console.log(`La respuesta ${rta} no es válida`)
//         alert("RTA INCORRECTA")
//     }
// }while(adivinanza == false)
//cantidad de intentos agregarle a la adivinanza 

// NaN = Not a Number
// let num = "cinco"
// while(isNaN(num)){
//     console.log("Esto es un Not a Number")
//     num = Number(prompt("Atención no es number, ingrese el dato correctamente"))
// }
