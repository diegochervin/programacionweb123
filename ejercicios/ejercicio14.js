let nombre = prompt("Ingrese su nombre")
console.log("El nombre es: " + nombre)

let apellido = prompt("Ingrese su Apellido")
console.log("El apellido es: " + apellido)

let DNI = parseInt(prompt("Ingrese su DNI"))
console.log("Su DNI es : " + DNI)

let nota1 = parseFloat(prompt("Ingrese la primer nota obtenida"))
console.log("La primer nota es: " + nota1)

let nota2 = parseFloat(prompt("Ingrese la segunda nota obtenida"))
console.log("La segunda nota es: " + nota2)

let nota3 = parseFloat(prompt("Ingrese la tercer nota obtenida"))
console.log("La tercer nota es: " + nota3)


let promedio  = (nota1 + nota2 + nota3)/3
let sumaNota = (nota1 + nota2 + nota3)
console.log(`La nota promedio de ${nombre} ${apellido} con numero de DNI ${DNI} es de ${promedio} y la sumatoria es de ${sumaNota}`)


if(promedio == 10){
    console.log("ha promocionado la materia con nota máxima.")
}else if(promedio >= 8 && promedio < 10){
    console.log("Está promocionado/a")
}else if(promedio >= 4 && promedio < 8 ){
    console.log(`Estas aprobado/a`)
}else{
    console.log("Está desaprobado")
}
