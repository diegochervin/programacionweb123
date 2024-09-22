

//CONDICIONALES: instrucciones donde el código tiene poder de decisión
//CONDICIÓN es una comparación
//if - else if - else

//condicional simple:
let nota = 6
// if(nota >= 4){
//     console.log(`Estas aprobado/a`)
//     console.log(`Su nota es ${nota}`)
// }
//condicional compuesto de if and else (si y sino)
// if(nota >= 4){
//     console.log(`Estas aprobado/a`)
//     console.log(`Su nota es ${nota}`)
// }else{
//     console.log(`Estas desaprobado/a`)
// }
//una condicional con varias condiciones o puntos decisiones: condiconal anidado
//&& es el operador AND
if(nota >= 4 && nota < 7){
    console.log(`Estas aprobado/a`)
    console.log(`Su nota es ${nota}`)
}else if(nota >= 7 && nota <10){
    console.log("Está promocionado/a")
}else if(nota == 10){
    console.log("Tiene nota de honor")
}else{
    console.log("Está desaprobado")
}

if(nota == 10){
    console.log("Tiene nota de honor")
}else if(nota >= 7){
    console.log("Está promocionado/a")
}else if(nota >= 4){
    console.log(`Estas aprobado/a`)
}else{
    console.log("Está desaprobado")
}

let color = "roJo"
//switch: estructura condicional. Se suele utilizar para casos puntuales (no para rangos como promedios, notas, estadisticas). Registra valores concretos
switch(color){
    case "verde":
        console.log(`Es un color primario V. Es ${color}`)
    break
    case "azul":
        console.log(`Es un color primario A. Es ${color}`)
    break
    // es la palabra reservada que corta la estructura
    case "rojo":
        console.log(`Es un color primario R. Es ${color}`)
    break
    default: //igual al else
        console.log(`NO es un color primario. EL color es ${color}`)
    break
}
//operador || 
if(color == "verde" || color =="rojo" || color =="azul"){
    console.log(`Es un color primario. Es ${color}`)
}else{
    console.log(`NO es un color primario. El color es ${color}`)
}

//mismo condicional que evalua mays y mins
//toLowerCase todo a mins
//toUpperCase todo a mays
// console.log(color.toUpperCase())
if(color.toLowerCase() == "verde" || color.toUpperCase() =="ROJO" || color.toLowerCase() =="azul"){
    console.log(`Es un color primario. Es ${color}`)
}else{
    console.log(`NO es un color primario. El color es ${color}`)
}

//voy a crear una variable que me transforma color a mins y la voy a usar en la comparación 
// let colorIngresado = prompt("ingrese el color favorito").toLowerCase()
// console.log(colorIngresado)
// let colorMins = color.toLowerCase()
// console.log(colorMins)
// if(colorMins == "verde" || colorMins =="rojo" || 
// colorMins =="azul"){
//     console.log(`Es un color primario. Es ${color}`)
// }else{
//     console.log(`NO es un color primario. El color es ${color}`)
// }
//la negación de true es false y viceversa
let dato = true
//IMPORTANTE saber que lo que está entre parentesis termina siendo un valor booleano
if(!dato == false){
    console.log("muestra msj")
}