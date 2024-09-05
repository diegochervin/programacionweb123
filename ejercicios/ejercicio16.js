let numeroIngresado = parseInt(prompt("Por favor, ingrese un número:"));
let numerosDivisibles = ""
let contadorDivisibles = 0

for (let i = 1; i <= 100; i++) {
    if (i % numeroIngresado === 0) {
        // Incrementa el contador
        contadorDivisibles++;
        // Agrega el número a la cadena de texto
        numerosDivisibles += i + " ";
    }
}
console.log(`Los números divisibles por ${numeroIngresado} son: ${numerosDivisibles.trim()}.`)

