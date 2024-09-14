//class constructora

class Bateria {
    constructor(id, marca, modelo, precio) {
        (this.id = id),
        (this.marca = marca),
        (this.modelo = modelo),
        (this.precio = precio);
      }
  
    mostrarInfoEquipo() {
      console.log(`#${this.id} es una bateria de Marca ${this.marca} , es un ${this.modelo} y su precio es $${this.precio}`)
    }

    calcularPrecioTarjeta3cuotas() {
      this.precio = this.precio * 1.30
     }
  
    exponerCatalogo() {
      console.log(this.id, this.marca, this.modelo, this.precio); }
  }
  
  //Instanciación de objetos:
  
  const bat1 = new Bateria(1, "Ferrobat", "12X65", 85000);
  const bat2 = new Bateria(2, "Moura", "M20GD", 145000);
  const bat3 = new Bateria(3, "Willard", "UB620", 155000);
  const bat4 = new Bateria(4, "Ferrobat", "12x70", 100000);
  const bat5 = new Bateria(5, "Ferrobat", "12x80", 110000);
  const bat6 = new Bateria(6, "Moura", "M22GD", 165000);
  
  let local = [];
  let carrito = [];
  local.push(bat1, bat2, bat3, bat4, bat5, bat6);

  
function calcular3cuotas(){
  local.forEach(function(bateria){
      bateria.calcularPrecioTarjeta3cuotas()
      console.log(`#${bateria.id} es una bateria de Marca ${bateria.marca} , es un ${bateria.modelo} y su precio en 3 cuotas es de $${bateria.precio}`)
  })
}
  
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
    let bateriaNueva = new Bateria(local.length + 1,nombreIng, modeloIng,precioIng);
    local.push(bateriaNueva);
  }
  
  function menu() {
    let finalizarMenu = false;
    while (finalizarMenu == false) {
      let opcion = prompt(`Ingrese la opción que desea:
                              1 - Ingresar Nueva Bateria
                              2 - Mostrar info
                              3 - Mostrar Precio en 3 cuotas
                              4 - Ordenar Precio Menor a Mayor
                              5 - Ordenar Precio Mayor a Menor
                              6 - Ordenar Alfabeticamente A-Z por Modelo
                              7 - Ordenar Alfabeticamente Z-A por modelo
                              8 - Borrar Bateria
                              9 - Buscar Modelo
                              10 - Buscar Marca
                              11 - Filtrar por precio menor 
                              12 -Filtrar Marca
                              13 - agregar al carrito
                              14 - ver total
                              0 - Salir del menú`);
      switch (opcion) {
        case "1":
          crearBateria();
          break;
        case "2":
          mostrarInfoDetallada(local);
          break;
        case "3":
          calcular3cuotas(local);
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
        case "9":
          buscarModelo(local);
          break;
        case "10":
          buscarMarca(local);
          break;
        case "11":
          filtrarPorPrecio(local);
          break; 
        case "12":
          filtrarMarca(local);
          break; 
          case "13":
          agregarAlCarrito(local, carrito);
          break; 
          case "14":
          sumaTotal(carrito);
          break; 
        default:
          console.log(`La opción seleccionada ${opcion} no existe`);
          break;
      }
    }
  }
  
   function buscarModelo(array) {
    let modeloBuscado = prompt("Ingrese el modelo a buscar");
    let buscarModelo = array.find(
      (bateria) => bateria.modelo == modeloBuscado
    );
    if (buscarModelo == undefined) {
      console.log(`el modelo ${modeloBuscado} no se encuentra`);
    } else {
      buscarModelo.mostrarInfoEquipo();
    }
  }
 
  function buscarMarca(array){
    let marcaBuscada = prompt("Ingrese el marca a buscar").toLowerCase();
    let buscarMarcaFilter = array.filter(
    (array) => array.marca.toLowerCase() == marcaBuscada
  );
  if (buscarMarcaFilter.length == 0) {
    console.log("no se encontro nada");
  } else {
    console.log(buscarMarcaFilter);
  }
}

function filtrarPorPrecio(array) {
  let precioBuscado = Number(prompt("Ingrese precio maximor"));
  let buscarFilterPrecio = array.filter((bateria) => bateria.precio < precioBuscado );
  if (buscarFilterPrecio.length == 0) {
    console.log("no hay baterias con ese precio");
  } else {
    buscarFilterPrecio.forEach((bateria) => console.log(`#${bateria.id} es una bateria de Marca ${bateria.marca} , es un ${bateria.modelo} y su precio es de $${bateria.precio}`));
  }
}

  menu();
  
   function ordenarPrecioMenorAMayor(array) {
    let arrayPrecioMenorMayor = [].concat(array);
    arrayPrecioMenorMayor.sort((a, b) => a.precio - b.precio);
    console.log(arrayPrecioMenorMayor);
  }
  
  function ordenarPrecioMayorAMenor(array) {
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
  
  function opcionBorrar(){
    let idAborrar = Number(prompt("Ingrese el ID de la bateria a borrar"));
    let opcion 
    while (opcion !== '1' && opcion !== '2') {
        opcion = prompt(`Estas seguro que queres borrar el ID #${idAborrar}
           Elige una opción: \n1. si  \n2. no`)
                 if (opcion !== '1' && opcion !== '2') {
            alert("Opción no válida. Por favor, elige 1 o 2.");
        }
    }
    if (opcion ==="2") {
         alert("Cancelado")
         menu()
         return null
         }
       return idAborrar
    }
  
  
  
  function borrarBateria(array) {
   let idAborrar = opcionBorrar()
    if (idAborrar !== null) {
        array.forEach((bat) => {
            if (bat.id == idAborrar) {
              let indice = array.indexOf(bat);
              array.splice(indice, 1);
            }
            console.log (`La bateria con el id ${idAborrar} fue eliminado.`)
            
                 });
    } 
    console.log(array)    
}


function filtrarMarca(array) {
  let filtroBuscado = Number(prompt("Ingrese la marca a buscar Elige una opción: \n1. Ferrobat  \n2. Willard \n3. Moura"));
   let marcaSeleccionada
   if (filtroBuscado === 1) { 
     marcaSeleccionada = "Ferrobat"
    //alert("Has seleccionado la marca: Ferrobat");
} else if (filtroBuscado === 2) {
     marcaSeleccionada = "Willard"
    //alert("Has seleccionado la marca: Willard");
} else if (filtroBuscado === 3) {
     marcaSeleccionada = "Moura"
    //alert("Has seleccionado la marca: Moura");
} else {
    alert("Selección no válida. Por favor, ingresa un número entre 1 y 3.");
}
  let buscarFilterMarca = array.filter((bateria) => bateria.marca === marcaSeleccionada );
  if (buscarFilterMarca.length == 0) {
    console.log("no hay baterias con esa marca");
  } else {
    buscarFilterMarca.forEach((bateria) => console.log(`#${bateria.id} es una bateria de Marca ${bateria.marca} , es un ${bateria.modelo} y su precio es de $${bateria.precio}`));
  }
}


function mostrarCatalogo(array){
  array.forEach((e)=>e.exponerCatalogo() )
}



function agregarAlCarrito(arrayStock, arrayCarrito){
  //mostrar Catalogo para que usuario sepa la oferta
  mostrarCatalogo(arrayStock)
  //preguntar id del libro deseado
  let idBateriaComprado = Number(prompt(`Mire el catalogo en consola y selecione la ide del libro que desea agregar`))
  //buscar en el array stock el libro elegido
  let bateriaComprado = arrayStock.find((libro)=>libro.id == idBateriaComprado)
  //evaluar si el libroComrado existe, en caso de que si pushearlo sino NO 
  //planteo no puedo volver a sumar el mismo libro al carrito
  if(bateriaComprado == undefined){
      console.log(`El id ${idBateriaComprado} no existe en nuestro catalogo`)
  }else{
      //planteo no puedo volver a sumar el mismo libro al carrito
      let bateriaEnCarrito = arrayCarrito.find((book)=> book.id == bateriaComprado.id)
      if(bateriaEnCarrito == undefined){
          //pushear al array del carrito
          arrayCarrito.push(bateriaComprado)
      }else{
          console.log(`Este libro ya existe en el carrito`)
          bateriaComprado.exponerCatalogo()
      }
  }
  //chequear el carrito
  console.log(arrayCarrito)
}


  function sumaTotal(carrito) {
   let totalSumado = 0;    
   carrito.forEach((bat)=> totalSumado += bat.precio)
  console.log(totalSumado)
  }
  

