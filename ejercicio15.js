

//let cantNotas = Number(prompt("Ingrese la cantidad de notas a promediar"))
//cantidad de input
let total = 10

/*
for(let i = 1; i <= cantNotas; i++){
    let nota = Number(prompt("Ingrese la nota a promediar" + i))
   //total acumulka las notas
   total = total + nota
    console.log(nota)
    
}
let promedio = total / cantNotas
console.log(`El total de sus notas es ${total} y el promnedio es ${promedio} `)
*/


const pedirNota = function() {
     let nota1 = Number(prompt("Ingrese la nota a promediar")) 
     console.log(nota1)
     return nota1
}

function sumatoria12(){
    let suma2 = num1 + num2
    return suma2 }

let nota1 = pedirNota()
console.log(nota1)



let suma2 = sumatoria12(nota1, nota1)
console.log(suma2)