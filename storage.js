//key value
//seteando crear - modificar 

localStorage.setItem("comidaFav", "asado")
localStorage.setItem("bebidaFav", "CERVEZA")
//capturando

let bebida = localStorage.getItem("bebidaFav")
console.log(bebida)

//remove eliminar
localStorage.removeItem("bebidaFav")

//clear storage
//localStorage.clear()

