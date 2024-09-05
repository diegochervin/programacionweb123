
let lado1 = parseInt(prompt("Ingrese la medida del primer lado del rectangulo"))
console.log("El lado 1 vale " + lado1)
let lado2 = parseFloat(prompt("Ingrese la medida del segundo lado del rectangulo"))
console.log("El lado 2 vale " + lado2)

let perimetro = (lado1 * 2) + (lado2 * 2)
console.log(`El perimetro de este triangulo es: ${perimetro}`)
let area = lado1 * lado2
console.log(`El area de este triangulo es: ${area}`)
// validación a agregar: que ningún lado mida más que los otros dos sumados
