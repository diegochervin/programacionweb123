let eventoMultiple = document.getElementById("evento-multiple")
//addEventListener("tipoEvento", handlerEvent)
eventoMultiple.addEventListener("click", saludarCFP)
//podemos pasaler más de un evento
eventoMultiple.addEventListener("click", ()=>{console.log("hola")})
eventoMultiple.addEventListener("click", function(){
    saludarPersona(inputPersona.value)
    inputPersona.value =""
})