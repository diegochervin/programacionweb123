
function cargarLibro(){
    let autorIng = prompt(`Ingrese el nombre del autor del libro`)
    let tituloIng = prompt(`Ingrese el nombre del titulodel libro`)
    let precioIng = Number(prompt(`Ingrese el precio del libro`))
    let libro = {
        //propiedad: valor
        //key: value
        autor: autorIng,
        titulo: tituloIng,
        precio: precioIng
    }
    console.log(libro)
    //crear Object con los datos pedidos
    mostrarLibro(libro)
}
function mostrarLibro(objeto){
    //mostrarlo como objeto
    console.log(`El libro es ${objeto.titulo} del autor${objeto.autor} y vale ${objeto.precio}`)

}
//function agregarle el iva al objeto


//funciones
function menu(){
    //finalizarMenu datoBandera
    let finalizarMenu = false
    while(finalizarMenu ==false){
    
        let opcion = prompt(`Ingrese la opción que desea:
                            1 - Cargar libro
                            2 - Mostrar info
                            3 - Opcion 3
                            0 - Salir del menú`)
        switch(opcion){
            case "1":
                cargarLibro()
            break
            case "2":
                console.log("opc 2")
            break
            case "3":
                console.log("opc 3")
            break
            case "0":
                console.log("Gracias por utilizar nuestra app")
                finalizarMenu = true
            break
            default:
                console.log(`La opción seleccionada ${opcion} no existe`)
            break
        }
    }
}

//código
// menu()

//crear un object: 
//- literales abriendo llaves y avclarando atributo por atributo
let autoDuna = {
    modelo: "Duna",
    marca: "Fiat",
    precio: 500000
}
let auto600 = {
    modelo: "600",
    marca: "Fiat",
    precio: 250000, 
    color: "rojo"
}
console.log(autoDuna)
console.log(auto600)
//acceder atributo
autoDuna.precio = autoDuna.precio *1.21
console.log(autoDuna.precio)
console.log(autoDuna.modelo)
console.log(autoDuna)
//function constructora
//class 
menu()
function Libro(aut, tit,prec){
    this.autor = aut,
    this.titulo = tit, 
    this.precio = prec,
    this.vendido = false
}
const libroAndamios = new Libro("Mario Benedetti", "Andamios", 555)
//vendemos el libro
libroAndamios = "Borges"
libroAndamios.precio = 999
libroAndamios.vendido = true
console.log(libroAndamios)

//Objetivo para el lunes - crear menú - Crear objeto literal con una function - mostrar esa info a partir - crear function constructora 
//Posibilidad ejercicio 9 con objetos