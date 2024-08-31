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


//con 2 espacios de memoria
/*
let a = 0
let b = 1


console.log(b)

for (let i = 1; i < numeroIngresado; i++) {
let temporal = a + b
console.log(temporal)
a = b
b = temporal
}*/

//con 2 espacios de memoria
let anterior = 2
let actual = 1


console.log(actual)

for (let i = 1; i < numeroIngresado; i++) {
console.log(actual)
anterior = actual
actual = anterior + actual
}
