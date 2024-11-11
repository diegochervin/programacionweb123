let num = 7
//si el numero es mayor a 5
if(num > 5){
    console.log(`EL num es mayor a cinco`)
}else{
    console.log(`EL num NO es mayor a 5`)
}
//operador ternario: otra forma de escribir un if else
//reemplazar anterior condicional con nueva sintaxis
// condicion ? instrucciones si es TRUE : instrucciones si es FALSE
num > 5 ? console.log(`EL num es mayor a cinco CON TERNARIO`) : console.log(`EL num NO es mayor a 5 con ternario`)

//operador || OR devuelve el segundo término en caso de que lo evaluado sea FALSY(0, undefined, null, string vacio, NaN, false)
let prueba = false
 console.log(prueba || `Es un dato falsy`)
 //nullish ?? pero devuelve sólo el segundo término en caso de que lo evaluado sea null o undefined
console.log(prueba ?? `ES un dato nullish`)

