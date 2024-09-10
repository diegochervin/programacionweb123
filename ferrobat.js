//class constructora

class Bateria {
  constructor(id, marca, modelo, precio) {
    //atributos-propiedades
    (this.id = id),
      (this.marca = marca),
      (this.modelo = modelo),
      (this.precio = precio);
  }

  //métodos en class se declaran por fuera del constructor
  mostrarInfoEquipo() {
    console.log(
      ` ${this.id} es una bateria de ${this.marca} , es un ${this.modelo} y su precio es $${this.precio}`
    );
  }
  calcularIva() {
    this.precio = this.precio * 1.21;
  }

  exponerCatalogo() {
    console.log(this.id, this.marca, this.modelo, this.precio);
  }
}

//Instanciación de objetos:

const bat1 = new Bateria(1, "Ferrobat", "12X65", 85000);
const bat2 = new Bateria(2, "Moura", "M20GD", 145000);
const bat3 = new Bateria(3, "Willard", "UB620", 155000);
const bat4 = new Bateria(4, "Ferrobat", "12x70", 100000);
const bat5 = new Bateria(5, "Ferrobat", "12x80", 110000);
const bat6 = new Bateria(6, "Moura", "M22GD", 165000);

let local = [];
local.push(bat1, bat2, bat3, bat4, bat5, bat6);
console.log(local);

/*
local.forEach(function(bateria){
    bateria.calcularIva()
    console.log(`EL precio con el IVA agrgado es ${bateria.precio}`)
})
*/

function mostrarInfoDetallada(array) {
  array.forEach(function (eleme) {
    eleme.mostrarInfoEquipo();
  });
}

function solicitarPrecio() {
  let precio;
  do {
    let entrada = parseInt(prompt("Ingrese el precio de la bateria"));
    precio = entrada;

    // Verifica si la entrada no es un número válido
    if (isNaN(precio)) {
      alert("Por favor, ingrese un número válido.");
    }
  } while (isNaN(precio)); // Repite mientras no se ingrese un número válido
  return precio;
}

function solicitarMarca() {
  let marca;
  do {
    let entrada = prompt("Ingrese la marca de la bateria");
    marca = entrada;

    if (marca === "") {
      alert("Por favor, ingrese la marca de la bateria");
    }
  } while (marca === "");
  return marca;
}

function solicitarModelo() {
  let modelo;
  do {
    let entrada = prompt("Ingrese el modelo de la bateria");
    modelo = entrada;

    if (modelo === "") {
      alert("Por favor, Ingrese el modelo de la bateria");
    }
  } while (modelo === "");
  return modelo;
}

function crearBateria() {
  let nombreIng = solicitarMarca();
  let modeloIng = solicitarModelo();
  let precioIng = solicitarPrecio();
  let bateriaNueva = new Bateria(
    local.length + 1,
    nombreIng,
    modeloIng,
    precioIng
  );
  local.push(bateriaNueva);
}

function menu() {
  //finalizarMenu datoBandera
  let finalizarMenu = false;
  while (finalizarMenu == false) {
    let opcion = prompt(`Ingrese la opción que desea:
                            1 - Ingresar Nueva Bateria
                            2 - Mostrar info
                            3 - Opcion 3
                            4 - Ordenar Precio Menor a Mayor
                            5 - Ordenar Precio Mayor a Menor
                            6 - Ordenar Alfabeticamente A-Z por Modelo
                            7 - Ordenar Alfabeticamente Z-A por modelo
                            8 - Borrar Bateria
                            0 - Salir del menú`);
    switch (opcion) {
      case "1":
        crearBateria();
        break;
      case "2":
        mostrarInfoDetallada(local);
        break;
      case "3":
        console.log(local);
        break;
      case "0":
        console.log("Gracias por utilizar nuestra app");
        finalizarMenu = true;
        break;
      case "4":
        ordenarPrecioMenorAMayor(local);
        break;
      case "5":
        ordenarPrecioMayorAMenor(local);
        break;
      case "6":
        ordenarModeloAZ(local);
        break;
      case "7":
        ordenarModeloZA(local);
        break;
      case "8":
        borrarBateria(local);
        break;
      default:
        console.log(`La opción seleccionada ${opcion} no existe`);
        break;
    }
  }
}

let busqueda = local.find((bat) => {
  return bat.modelo.toUpperCase() == "M20GD";
});
console.log(busqueda);

//function arrow ()=> tiene return implicito
// ()=> return debo hacerlo explicito (tengo que escribir la palabra retorno)

let busqueda2 = local.find((bat) => bat.precio > 1000 && bat.precio < 5000);
console.log(busqueda2);

function buscarModelo(array) {
  let modeloBuscado = prompt("Ingrese el modelo a buscar");
  let buscarModelo = array.find(
    (bateria) => bateria.modelo.toUpperCase() == modeloBuscado.toUpperCase()
  );
  if (buscarModelo == undefined) {
    console.log(`el modelo ${modeloBuscado} no se encuentra`);
  } else {
    buscarModelo.mostrarInfoEquipo();
  }
}
//buscarModelo(estanteria)

//filter devuelve todo lo que coincida con la busqueda/comparacion en un array sino hay ninguna coincidencia devuelve el array vacio

let buscarMarcaFilter = local.filter(
  (bateria) => bateria.marca.toLowerCase() == "moura"
);
if (buscarMarcaFilter.length == 0) {
  console.log("no se encontro nada");
} else {
  console.log(buscarMarcaFilter);
}

let buscarFilterPrecio = local.filter((b) => b.precio < 190000);
if (buscarFilterPrecio.length == 0) {
  console.log("no hay baterias con ese precio");
} else {
  buscarFilterPrecio.forEach((equipo) => equipo.exponerCatalogo());
}

//mostrar toda la estanteria
//local.forEach((bateria)=> bateria.exponerCatalogo())

menu();

//sort: metodo destructivo altera el array original
// Sirve para ordenar
/*
let numbersArray = [3,13,11,52,1,4,101]
numbersArray.sort((num1, num2) => num1 - num2)
console.log(numbersArray)

//array de objetos

//ordenar alfabeticamente de la a-z

//funcion ordenar menor a mayor
local.sort((a,b)=> {
    
    if (a.modelo < b.modelo){
        return -1
    }
    if (a.modelo > b.modelo){
        return 1 
    }
    return 0
})
console.log(local)

//ordenar alfabeticamente de la z-a
 
local.sort((b,a)=> {
    
    if (a.marca < b.marca){
        return -1
    }
    if (a.marca > b.marca){
        return 1 
    }
    return 0
})

//funcion ordenar menor a mayor
*/
//metodo concat
function ordenarPrecioMenorAMayor(array) {
  //copiar array
  let arrayPrecioMenorMayor = [].concat(array);
  arrayPrecioMenorMayor.sort((a, b) => a.precio - b.precio);
  console.log(arrayPrecioMenorMayor);
}

function ordenarPrecioMayorAMenor(array) {
  //copiar array
  let arrayPrecioMayorMenor = [].concat(array);
  arrayPrecioMayorMenor.sort((a, b) => b.precio - a.precio);
  console.log(arrayPrecioMayorMenor);
}

function ordenarModeloAZ(array) {
  let arrayModeloMenorMayor = [].concat(array);
  arrayModeloMenorMayor.sort((a, b) => {
    if (a.modelo < b.modelo) {
      return -1;
    }
    if (a.modelo > b.modelo) {
      return 1;
    }
    return 0;
  });
  console.log(arrayModeloMenorMayor);
}

function ordenarModeloZA(array) {
  let arrayModeloMayorAMenor = [].concat(array);
  arrayModeloMayorAMenor.sort((a, b) => {
    if (b.modelo < a.modelo) {
      return -1;
    }
    if (b.modelo > a.modelo) {
      return 1;
    }
    return 0;
  });
  console.log(arrayModeloMayorAMenor);
}

//muestracat por consola
function borrarBateria(array) {
  // pide id del libro a eliminar
  // encuentra id del lbro
  // elimina ese libro
  //splice (donde comienza a trabajar, cuantos voy a eliminar)

  //console.log(local)
  let idAborrar = Number(prompt("Ingrese el precio de la bateria"));
  array.forEach((bat) => {
    if (bat.id == idAborrar) {
      let indice = array.indexOf(bat);
      array.splice(indice, 1);
    }
    // let index = array.findIndex(bat)=>bat.id == idAborrar)
    //array.splice(index, 1);
    //let BateriaEliminado = array.find((bateria)=>bateria.id == idAborrar)

    console.log(
      `El libro con el id ${idAborrar} fue eliminado. El catalogo actualizado es: `
     
    );
    mostrarInfoDetallada(local)
  });
}
