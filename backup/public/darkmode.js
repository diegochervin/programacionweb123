document.addEventListener("DOMContentLoaded", () => {
    let btnToggle = document.getElementById("btnToggle");



if(localStorage.getItem("modoOscuro")){
    if(JSON.parse(localStorage.getItem("modoOscuro")) == true){
        document.body.classList.toggle("darkMode")
        btnToggle.innerText = "Light"
    }
}else{
    //entra por primera vez y setea clave
    console.log("No existe preferencia")
    localStorage.setItem("modoOscuro", false)
}
//evento button
btnToggle.addEventListener("click", ()=>{
    console.log("click btn")
    //aparezca y desaparezca la clase darkMode de CSS
    document.body.classList.toggle("darkMode")

    if(JSON.parse(localStorage.getItem("modoOscuro")) == false){
        localStorage.setItem("modoOscuro", true)
        btnToggle.innerText = "Light"
    }else{
        localStorage.setItem("modoOscuro", false)
        btnToggle.innerText = "Dark"
    }
})});