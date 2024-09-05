// estructura de memoria:[]
// tiene indice que comienza en 0


let objeto = {
    nombre: "adriana",
    apellido: "gonzalez"
}
let vacioArray = []
console.log(vacioArray)

//que puedo guardar un array? Cualquier cosa en JS

let arrayNumbers = [7,18,34,35,101,43]
console.log(arrayNumbers)

//elementos de un array ACCEDO por indice o posicion (en los objetos accedo por el nombre de la propiedad)
console.log(arrayNumbers[3])

const arrayBoolean = [true, false, false]
console.log(arrayBoolean)

let arrayString = ["mate", "Pelota", "numero", "termo"]
console.log(arrayString)

let arrayVarios = ["llave", 54, true, NaN, objeto, arrayNumbers, 43, undefined]
console.log(arrayVarios)
console.log(arrayVarios[4])

//metodos de arrays: acciones que puedo aplicar a este topo de estructura de memoria
//metodo simples

// agregar elementos
//PUSH agrega al final
//sumar de a uno
arrayNumbers.push(19)
console.log(arrayNumbers)

//sumar de a varios
arrayNumbers.push(10, 16)
console.log(arrayNumbers)

//agregar al principio
arrayNumbers.unshift(1)
console.log(arrayNumbers)

//eliminar elementos
arrayVarios.pop()
console.log(arrayVarios)

//eliminar el primer elemento
arrayVarios.shift()
console.log(arrayVarios)

// splice(donde arranca a trabajar, cuantos elimina, elementps a agregar)
console.log(arrayNumbers)
//eliminar 18 34 35 y agregar el 8
arrayNumbers.splice(2,3,8)
console.log(arrayNumbers)

//tambien puedo pasarle 2 parametros
arrayNumbers.splice(0,2)
console.log(arrayNumbers)

//reverse invierte el array
arrayNumbers.reverse()
console.log(arrayNumbers)

arrayNumbers.push(24)
//mostrarlos como string unidos por X
console.log(arrayNumbers.join(" - "))
console.log(arrayNumbers.join("/"))

//recorrer un array: 
for(let i = 0; i < 6; i++){
console.log(arrayNumbers[i])
}

//recorre en forma dinamica todo el array no importa la cantidad
//utilizamos prop length para recorrerlo siempre de pubta a punta
for(let i = 0; i < arrayNumbers.length; i++){
    console.log(arrayNumbers[i])
    }
    
/* si empiezo el i en 1 hay que modificar el = y el -1
    for(let i = 1; i <= arrayNumbers.length; i++){
        console.log(arrayNumbers[i-1])
        }
*/ 

console.log(arrayVarios[4].nombre)