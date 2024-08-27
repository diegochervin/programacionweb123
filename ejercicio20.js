function solicitarNumero() {
    let numero;
    do {
        let entrada = prompt("Por favor, ingrese un número:");
        numero = parseInt(entrada);

        // Verifica si la entrada no es un número válido
        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numero)); // Repite mientras no se ingrese un número válido

    return numero;
}

let numeroIngresado = solicitarNumero();
let a = 0
let b = 1
let temporal = 0

for (let i = 2; i < numeroIngresado; i++) {
let temporal = a + b
console.log(temporal)
a = b
b = temporal
}

