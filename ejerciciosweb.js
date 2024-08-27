switch(parseInt(prompt("Ingrese un numero del 1 al 20"))){
    case 1:
        let lado1 = parseInt(prompt("Ingrese la medida del primer lado del triangulo"))
console.log("El lado 1 vale " + lado1)
let lado2 = parseFloat(prompt("Ingrese la medida del segundo lado del triangulo"))
console.log("El lado 2 vale " + lado2)
let lado3 = Number(prompt("Ingrese la medida del tercero lado del triangulo"))
console.log("El lado 3 vale " + lado3)
//crear un espacio de memoria para guardar el perimetro
let perimetro = lado1 + lado2 + lado3
console.log(`El perimetro de este triangulo es: ${perimetro}`)
    break
    case 2:
        let lado1 = parseInt(prompt("Ingrese la medida del lado del cuadrado"))
console.log("El lado 1 vale " + lado1)

let perimetro = lado1 * 4
console.log(`El perimetro de este triangulo es: ${perimetro}`)
let area = lado1 * lado1
console.log(`El perimetro de este triangulo es: ${area}`)
    break
    // es la palabra reservada que corta la estructura
    case 3:
        console.log(`Es un color primario R. Es ${color}`)
    break
    default: //igual al else
        console.log(`Elegi un numero del 1 al 20`)
    break
}