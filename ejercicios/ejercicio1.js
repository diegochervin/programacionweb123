//EJERCICIO 1 de la GUIA: Averiguar el perimetro de un triángulo

//parsear: transformar de string a number
let lado1 = parseInt(prompt("Ingrese la medida del primer lado del triangulo"))
console.log("El lado 1 vale " + lado1)
let lado2 = parseFloat(prompt("Ingrese la medida del segundo lado del triangulo"))
console.log("El lado 2 vale " + lado2)
let lado3 = Number(prompt("Ingrese la medida del tercero lado del triangulo"))
console.log("El lado 3 vale " + lado3)
//crear un espacio de memoria para guardar el perimetro
let perimetro = lado1 + lado2 + lado3
console.log(`El perimetro de este triangulo es: ${perimetro}`)
// validación a agregar: que ningún lado mida más que los otros dos sumados
