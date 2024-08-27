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

function solicitarNumero2() {
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

let numeroIngresado2 = solicitarNumero2();

while (numeroIngresado <= numeroIngresado2)
if (numeroIngresado % 2 === 0) {
    console.log("El " + numeroIngresado + " NO  es un numero Primo")
    numeroIngresado++
} else {
    console.log("El " + numeroIngresado + " es un numero Primo")
    numeroIngresado++
}
