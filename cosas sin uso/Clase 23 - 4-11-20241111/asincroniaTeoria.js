//asincronia
//BLOG JON MIRCHA: teoría
// https://jonmircha.com/javascript-asincrono

//setTimeout
//dos parametros(función, tiempo en Milisegundo)
// console.log(`Inicio del proceso`)
// setTimeout(()=>{
//     console.log("Ejecución de la orden")
// }, 0)
// console.log(`Fin del proceso`)

//imprimir palabra letra por letra

// for(let letra of "Bienvenidos al CFP n° 41"){
//     setTimeout(()=>{
//         console.log(letra)
//     },1000)
// }
// let timer =0
// for(let letra of "Bienvenidos al CFP n° 41"){
//     timer+=1000
//     setTimeout(()=>{
//         console.log(letra)
//     }, timer)
// }
// setInterval(()=>{
//     console.log("Hola")
// },1000)

// let i = 10 

// let intervalo = setInterval(()=>{
//     console.log(i)
//     i--
//     if(i == 0){
//         clearInterval(intervalo)
//         console.log(`Fin de cuenta regresiva`)
//     }
// },1000)
// console.log(`retorno del setInterval `+ intervalo)

//PROMESAS
//funtion de orden superior porque retorna una funcion

//PROMESA EN ESTADO PENDIENTE
// const eventoFuturo = ()=>{
//     return new Promise((resolve, reject)=>{
//         //no indicamos si se resuelve o no
//     })
// }
// console.log(eventoFuturo())

//PROMESA QUE PUEDE RESOLVERSE O RECHAZARSE
// const eventoFuturo = (valor)=>{
//     return new Promise((resolve, reject)=>{
//         if(valor == true){
//             resolve(`La promesa se ha cumplido, el lunes hubo facturas`)
//         }else{
//             reject(`La promesa se rechazó`)
//         }
//     })
// }
// console.log(eventoFuturo(false))
// console.log(eventoFuturo(true))

//agregamos asincronia a la prmise
// const eventoFuturo = (valor)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(valor == true){
//                 resolve(`La promesa se ha cumplido, el lunes hubo facturas`)
//             }else{
//                 reject(`La promesa se rechazó`)
//             }

//         },4000)
//     })
// }
// // //Problema de esperar resolución 
// // console.log(eventoFuturo(false))
// // console.log(eventoFuturo(true))

// //para trabajar con la respuesta de esa promesa debo esperar la respuesta y tener como acceder a esa respuesta
// eventoFuturo(true)
// .then(
//     (respuesta)=>{
//         console.log(respuesta)
// })
// .catch((rta)=>{
//     console.log(`la promesa no se cumpli+o`)
//     console.log(rta)
// })
// .finally(()=>{
//     console.log(`Se ejecuta siempre sin importa el estado de la promesa. Es un fin de la promesa`)
// })

// const BD = [
//     {id: 1, nombre: 'Producto 1', precio: 1500},
//     {id: 2, nombre: 'Producto 2', precio: 2500},
//     {id: 3, nombre: 'Producto 3', precio: 3500},
//     {id: 4, nombre: 'Producto 4', precio: 3500},
//  ]

//  const pedirProductos = ()=>{
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res(BD)
//         }, 3000)
//     })
//  }

//  pedirProductos()
//  .then((rta)=>{
//     let arrayProductos = rta
//     console.log(arrayProductos)
//  })
//  .finally(()=>{
//     console.log(`La petición de los productos ya fue realizada`)
//  })

 //desestructurar 

 //estructurar: 
 let nombre 
 let direccion
 let apellido 
 let clienteObj = {

 }
 let libroBorges = {
    titulo: "Aleph",
    autor: "Borges",
    precio: 1000
 }
 //desestructurar tradicional:
 //tiene que respetar si o si el nombre de los atributos 
 let {titulo, editorial, precio, Autor} = libroBorges
 console.log(titulo)
 console.log(Autor)
 console.log(editorial)
 console.log(precio)
 //desestructurar con alias
 let libroIngles = {
    price: 999,
    author: "Benedetti",
    title: "Andamios"
 }
 let {price: precioL, author: autorL} = libroIngles

 console.log(precioL)
 console.log(autorL)

 //desestructurar array -> por posición

 let numeros = [45,23,21,19,18,20]
 let [primero, , segundo, diecinueve] = numeros
 console.log(primero)
 console.log(segundo)
 console.log(diecinueve)

 //spread de objetos
 // simbolo ...
 let superLibroBorges = {
    ...libroBorges,
    editorial: "Sudamericana",
    edicion : "cuarta"
 }
 console.log(superLibroBorges)

 let minimo = Math.min(...numeros)
 console.log(minimo)

 //cuando tomo algún parámetro y le asigno un valor dentro de la declaración -> ese valor es el default
 function saludarPersona(nombre = "Desconocido"){
    console.log(`Hola ${nombre}`)
 }
 saludarPersona("GOnzalo")
 //si ponemos parametros demás no los tiene en cuenta, ni me marca error
 saludarPersona("Jorge", "Osvaldo", "Perez")
 //cuando falta algún parámetro lo interpreta como undefined
 saludarPersona()
 
 Swal.fire({
    title: 'Bienvenida',
    text: 'Do ySOmos el CFP n° 41u want to continue',
    icon: 'info',
    confirmButtonText: 'Aceptar',
    showCloseButton: true,
  showCancelButton: true,
  timer: 5000
  })