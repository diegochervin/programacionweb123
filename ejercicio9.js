let nombre = prompt("Ingrese su nombre")
console.log("El nombre es: " + nombre)

let apellido = prompt("Ingrese su Apellido")
console.log("El apellido es: " + apellido)

let valorHora = parseInt(prompt("Ingrese el valor de la hora"))
console.log("El valor de la hora es: " + valorHora)

let horas = parseInt(prompt("Ingrese las horas trabajadas"))
console.log("Las horas trabajadas son: " + horas)

let antiguedad = parseInt(prompt("Ingrese su antiguedad"))
console.log("Su antiguedad es : " + antiguedad )

let valorAntiguedad = (antiguedad * 5 / 100) + 1
console.log("valor antiguedad es : " + valorAntiguedad )

let cobro  = valorHora * horas * valorAntiguedad
console.log("El sueldo de " + nombre + " " + apellido + " es de : " + cobro )