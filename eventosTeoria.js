//EVENTOS:
//Son los mecánimos que tenemos en JS para controlar acciones del usuario y definir el comportamiento del sitio
//handler event: son funciones manejadoras de eventos: funciones que se ejecutan cuando sucede el evento
//handler event: arrow, anónimas y tradicional

function saludarCFP(){
    alert(`HOla cfp 41 :D`)
}
function saludarPersona(nombre){
    alert(`Hola ${nombre} :D`)
}

//SEGUNDA FORMA SEMANTICA: sólo se le puede declarar UNA handler evento por tipo de evento
let botonSemantico = document.getElementById("evento-semantico")
let inputPersona = document.getElementById("nombrePersona")
console.log(inputPersona)
console.log(inputPersona.value)
//no se pasan los parentesis cuando se asigna handler event, ej saludarCFP() NO, sino saludarCFP
botonSemantico.onclick = saludarCFP
botonSemantico.onclick = ()=>{saludarPersona(inputPersona.value)}

//PRIMERA FORMA PASAR EVENTOS MULTIPLES
let eventoMultiple = document.getElementById("evento-multiple")
//addEventListener("tipoEvento", handlerEvent)
eventoMultiple.addEventListener("click", saludarCFP)
//podemos pasaler más de un evento
eventoMultiple.addEventListener("click", ()=>{console.log("hola")})
eventoMultiple.addEventListener("click", function(){
    saludarPersona(inputPersona.value)
    inputPersona.value =""
})