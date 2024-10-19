let btnToggle = document.getElementById("btnToggle")
//evento button
btnToggle.addEventListener("click", ()=> {
    console.log("click btn")
    //aparezca y desaparezcala clase dark mode de css
document.body.classList.toggle("darkMode")
})
if(btnToggle.innerText == "Dark") {
    btnToggle.innerText = "Light"
    
}else {
    btnToggle.innerText = "Dark"
}