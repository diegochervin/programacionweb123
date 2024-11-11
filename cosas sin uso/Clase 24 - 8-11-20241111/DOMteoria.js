// DOM: DOcument Object MOdel
//DOs formas de acceder al DOM: getElement - querySelector(comparte sintaxis con CSS #id .class tags)
//jquery

//con getElement tenemos tres formas de acceder al documento
//Capturar nodos con etiquetas obtengo un HTMLCOllection
let h2Etiquetas = document.getElementsByTagName("h3")
console.log(h2Etiquetas)

//acceder por class
//también devuelve un HTML collection
let subtitulos = document.getElementsByClassName("subtitulo")
console.log(subtitulos)

//acceder por id
//devuelve un elemento o nodo
let nombreGOnza = document.getElementById("nombre")
console.log(nombreGOnza)


//OTRA FORMA DE ACCEDER AL DOM
//querySelector -- sintaxis siilar a CSS
//acceder por tag
let liEtiquetas = document.querySelectorAll("li")
console.log(liEtiquetas)
//acceder por class
let paisClass = document.querySelectorAll(".pais")
console.log(paisClass)
//acceder por id
let paisDeMessi = document.querySelector("#Messi")
console.log(paisDeMessi)

for(let pais of paisClass){
    //texto que contiene propo .textContent
    console.log(pais.textContent)
    //innerHTML contenido html que contiene la etiqueta
    pais.innerHTML = `<strong>${pais.textContent}</strong>`
}
//Modificar
//innerText solo modificamos texto
paisDeMessi.innerText = `Tierra de Maradona`

//innerHTML cambia contenido y también texto
nombreGOnza.innerHTML = `<p id="nombreLedesma">Gonzalo Facundo Ledesma</p>`

//crear etiqueas 
let ciudadNueva = document.createElement("li")
//agregar texto a etiqueta creada
ciudadNueva.innerText = "Cordoba"
//agregar class
ciudadNueva.className = "ciudad"
console.log(ciudadNueva)

//insertarlo en la lista
let listaCiudades = document.getElementById("listaCiudades")
console.log(listaCiudades)
listaCiudades.className ="colorVerde"
//append sirve para insertar
listaCiudades.append(ciudadNueva)

//eliminar remove
nombreGOnza.remove()

let ciudades = document.getElementsByClassName("ciudad")
console.log(ciudades[2])
ciudades[2].innerText = `La Paz`
console.log(ciudades)
console.log(listaCiudades)