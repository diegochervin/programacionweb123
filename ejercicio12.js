let color = prompt("ingrese un color")


if(color.toLowerCase() == "amarillo" || color.toUpperCase() =="ROJO" || color.toLowerCase() =="azul"){
    console.log(`Es un color primario. Es ${color}`)
}else{
    console.log(`NO es un color primario. El color es ${color}`)
}