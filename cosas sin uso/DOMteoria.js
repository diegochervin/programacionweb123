//DOM DOCUMENT OBJECT MODEL

// DOS FORMAS DE ACCEDER AL DOM, getElement - querySelector (comparte la sintaxis de css #id .class tags)

//con getElement tenemos tres formas de acceder al documento
//caputarar nodos con etiquetas obtengo un HtmLCollection


let h3Etiquetas = document.getElementsByTagName("h3")
console.log(h3Etiquetas)


//acceder por class
//tb devuelve un HTML collection

let paises = document.getElementsByClassName("pais")
console.log(paises)


//acceder por ID

let nombreDIego = document.getElementById("nombre")
console.log(nombreDIego)

//otra forma de acceder al dom con Queryselecctor
//acceder por tag

let liEtiquetas = document.querySelectorAll("li")
console.log(liEtiquetas)

//acceder por class
let paisClass = document.querySelectorAll(".pais")
console.log(paisClass)

//acceder por ID NO usar el selecctorALL
let paisdeMessi = document.querySelector("#messi")
console.log(paisdeMessi)

for(let pais of paisClass){
    //texto que contiene propo.textContent
    console.log(pais.textContent)
    //innerHTML contenido html que contiene la etiqueta

pais.innerHTML = `<strong>${pais.textContent}</strong>`

}
//modificar texto con innerText
paisdeMessi.innerText = `Tierra de Maradona`

//innerHtml cambia contenido y tambien texto si queremos
nombreDIego.innerHTML = `<p id="nombreDiego">Diego Chervin</p>`



//crear etiquetas
let ciudadNueva = document.createElement("li")
//agregar texto a etiqueta creada
ciudadNueva.innerText = "Cordoba"
//agregar class
ciudadNueva.className = "ciudad"
console.log(ciudadNueva)

//insertarlo en la lista
let listaCiudades = document.getElementById("listaciudades")
console.log(listaCiudades)

//append sirve para insertar
listaCiudades.append(ciudadNueva)

//eliminar remove
nombreDIego.remove()

let ciudades = document.getElementsByClassName("ciudad")
console.log(ciudades[2])
ciudades[2].innerText = `La Paz`