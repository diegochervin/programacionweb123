

let nombre = prompt("Ingrese su nombre")
console.log("El nombre es: " + nombre)

let apellido = prompt("Ingrese su Apellido")
console.log("El apellido es: " + apellido)

let edad = parseInt(prompt("Ingrese su edad"))
console.log("Su edad es : " + edad)

if(nombre == "" || apellido == "" ){
    console.log("No puede realizar un input vacio para su (nombre/apellido)")
    
}else if(edad >= 18 ){
    console.log("Puede comprar")
}else if(edad < 18){
    console.log("Usted aún no cumplió la mayoría de edad, no puede comprar ennuestra tienda")
}

