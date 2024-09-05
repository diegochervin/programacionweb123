let valorHora = parseInt(prompt("Ingrese el valor de la hora"))
console.log("El valor de la hora es: " + valorHora)

let horas = parseInt(prompt("Ingrese las horas trabajadas"))
console.log("Las horas trabajadas son: " + horas)

let facturacionMes = valorHora * horas
console.log("Por mes facturamos : " + facturacionMes )

let facturacionAno  = valorHora * horas * 12
console.log("Por año vamos a facturar : " + facturacionAno )

if (facturacionAno >=  200000 && facturacionAno <  500000) {
    alert("sueldo es alto")
} else  if (facturacionAno >= 500000) {
    let impuesto = facturacionAno * 0.1
    console.log("debes pagar impuesto por : " + impuesto)
} else {
    console.log("sos pobre")
}