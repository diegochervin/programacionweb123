// estructura de memoria:[]
// tiene indice que comienza en 0


let objeto = {
    nombre: "adriana",
    apellido: "gonzalez"
}
let vacioArray = []
console.log(vacioArray)

//que puedo guardar un array? Cualquier cosa en JS

let arrayCarrito = [7,18,34,35,101,43]
console.log(arrayCarrito)

//elementos de un array ACCEDO por indice o posicion (en los objetos accedo por el nombre de la propiedad)
console.log(arrayCarrito[3])

const arrayBoolean = [true, false, false]
console.log(arrayBoolean)

let arrayString = ["mate", "Pelota", "numero", "termo"]
console.log(arrayString)

let arrayVarios = ["llave", 54, true, NaN, objeto, arrayCarrito, 43, undefined]
console.log(arrayVarios)
console.log(arrayVarios[4])

//metodos de arrays: acciones que puedo aplicar a este topo de estructura de memoria
//metodo simples

// agregar elementos
//PUSH agrega al final
//sumar de a uno
arrayCarrito.push(19)
console.log(arrayCarrito)

//sumar de a varios
arrayCarrito.push(10, 16)
console.log(arrayCarrito)

//agregar al principio
arrayCarrito.unshift(1)
console.log(arrayCarrito)

//eliminar elementos
arrayVarios.pop()
console.log(arrayVarios)

//eliminar el primer elemento
arrayVarios.shift()
console.log(arrayVarios)

// splice(donde arranca a trabajar, cuantos elimina, elementps a agregar)
console.log(arrayCarrito)
//eliminar 18 34 35 y agregar el 8
arrayCarrito.splice(2,3,8)
console.log(arrayCarrito)

//tambien puedo pasarle 2 parametros
arrayCarrito.splice(0,2)
console.log(arrayCarrito)

//reverse invierte el array
arrayCarrito.reverse()
console.log(arrayCarrito)

arrayCarrito.push(24)
//mostrarlos como string unidos por X
console.log(arrayCarrito.join(" - "))
console.log(arrayCarrito.join("/"))

//recorrer un array: 
for(let i = 0; i < 6; i++){
console.log(arrayCarrito[i])
}

//recorre en forma dinamica todo el array no importa la cantidad
//utilizamos prop length para recorrerlo siempre de pubta a punta
for(let i = 0; i < arrayCarrito.length; i++){
    console.log(arrayCarrito[i])
    }
    
/* si empiezo el i en 1 hay que modificar el = y el -1
    for(let i = 1; i <= arrayNumbers.length; i++){
        console.log(arrayNumbers[i-1])
        }
*/ 

console.log(arrayVarios[4].nombre)