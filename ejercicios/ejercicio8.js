let valorHora = parseInt(prompt("Ingrese el valor de la hora"))
console.log("El valor de la hora es: " + valorHora)

let horas = parseInt(prompt("Ingrese las horas trabajadas"))
console.log("Las horas trabajadas son: " + horas)

let facturacionMes = valorHora * horas
console.log("Por mes facturamos : " + facturacionMes )

let facturacionAno  = valorHora * horas * 12
console.log("Por año vamos a facturar : " + facturacionAno )