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

    function solicitarStock() {
        let stock;
        do {
          let entrada = Number(prompt("Ingrese el stock de la bateria"));
          stock = entrada;
            if (stock === "" || stock < 0) {
            alert("Por favor, Ingrese el stock de la bateria");
          }
        } while (stock === "" || stock < 0);
        return stock;
      }

    
    function crearBateria() {
      let nombreIng = solicitarMarca();
      let modeloIng = solicitarModelo();
      let precioIng = solicitarPrecio();
      let stockIng = solicitarStock()
      let bateriaNueva = new Bateria(local.length + 1,nombreIng, modeloIng,precioIng, stockIng);
      local.push(bateriaNueva);
      localStorage.setItem("local", JSON.stringify(local))
      console.log(local)
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


      function mostrarCarritoConFormato(arrayCarrito) {
        arrayCarrito.forEach(bateria => {
            console.log(`#${bateria.id} es una bateria de Marca ${bateria.marca}, es un ${bateria.modelo} y su precio es de $${bateria.precio}, tienes ${bateria.cantidad} en el carrito, y el stock disponible es de ${bateria.stock}`);
        });
    }
     
      function buscarMarca(array){
        let marcaBuscada = prompt("Ingrese la marca a buscar").toLowerCase();
        let buscarMarcaFilter = array.filter(
        (bat) => bat.marca.toLowerCase().includes(marcaBuscada) 
      );
      if (buscarMarcaFilter.length == 0) {
        console.log("no se encontro la marca solicitada");
      } else {
        console.log(buscarMarcaFilter);
      }
    }
    
    function filtrarPorPrecio(array) {
      let precioBuscado = Number(prompt("Ingrese precio maximo"));
      let precioBuscamin = Number(prompt("Ingrese precio minimo"));
      let buscarFilterPrecio = array.filter((bateria) => bateria.precio <= precioBuscado && bateria.precio >= precioBuscamin);
      if (buscarFilterPrecio.length == 0) {
        console.log("no hay baterias con ese precio");
      } else {
        buscarFilterPrecio.forEach((bateria) => console.log(`#${bateria.id} es una bateria de Marca ${bateria.marca} , es un ${bateria.modelo} y su precio es de $${bateria.precio}`));
      }
    }

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
          if (a.modelo.toLowerCase() < b.modelo.toLowerCase()) {
            return -1;
          }
          if (a.modelo.toLowerCase() > b.modelo.toLowerCase()) {
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
                  console.log (`La bateria con el id ${idAborrar} fue eliminado.`)
                  localStorage.setItem("local", JSON.stringify(array))
                }
                
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

    
  
  function agregarAlCarrito(arrayStock, arrayCarrito) {
    // Mostrar catálogo para que el usuario sepa la oferta
    mostrarCatalogo(arrayStock);

    // Preguntar ID de la batería deseada
    let idBateriaComprado = Number(prompt(`Mire el catálogo en consola y seleccione la ID de la batería que desea agregar`))
    let cantidadIngresada = Number(prompt(`¿Qué cantidad de la batería con ID ${idBateriaComprado} desea agregar?`))

    // Buscar en el array stock la batería elegida
    let bateriaComprado = arrayStock.find((bate) => bate.id == idBateriaComprado);

    // Evaluar si la batería existe
    if (bateriaComprado === undefined) {
        console.log(`El ID ${idBateriaComprado} no existe en nuestro catálogo.`);
    } else {
        // Verificar que la cantidad ingresada no exceda el stock disponible
        if (cantidadIngresada > bateriaComprado.stock) {
            console.log(`No es posible agregar ${cantidadIngresada} unidades. Solo tenemos ${bateriaComprado.stock} en stock.`)
        } else {
            // Buscar si la batería ya está en el carrito
            let bateriaEnCarrito = arrayCarrito.find((bat) => bat.id == bateriaComprado.id)

            if (bateriaEnCarrito == undefined) {
                // Si no está en el carrito, agregar la batería con la cantidad especificada
                bateriaComprado.sumarUnidades(cantidadIngresada);
                arrayCarrito.push(bateriaComprado)

                // Actualizar el carrito en localStorage
                localStorage.setItem("carrito", JSON.stringify(carrito)); // Aquí usas `carrito`, lo cual es correcto si es tu array de carrito
                console.log(`Se han agregado ${cantidadIngresada} unidades de la batería con ID ${idBateriaComprado}.`)
            } else {
                // Si ya está en el carrito, verificar si la cantidad sumada supera el stock disponible
                if ((cantidadIngresada + bateriaComprado.cantidad) > bateriaComprado.stock) {
                    console.log(`No es posible agregar ${cantidadIngresada} unidades. Ya tienes ${bateriaComprado.cantidad} en el carrito y solo tenemos ${bateriaComprado.stock} en stock.`)
                } else {
                    // Si no supera el stock, agregar la cantidad al carrito
                    bateriaEnCarrito.cantidad += cantidadIngresada

                    // Actualizar el carrito en localStorage
                    localStorage.setItem("carrito", JSON.stringify(carrito)) // Sigue siendo correcto si `carrito` es el array principal
                    console.log(`Se han agregado ${cantidadIngresada} unidades de la batería con ID ${idBateriaComprado}.`)
                }
            }
        }
    }
}


  function restarUnidades(arrayCarrito){
    //mostrar Catalogo para que usuario sepa lo que hay en el carrito
    mostrarCatalogo(arrayCarrito)
    //preguntar id del bateria deseado
    let idBateriaCarrito = Number(prompt(`Mire el catalogo en consola y selecione la id de la bateria que quitar agregar`))
    let cantidad = Number(prompt(`que cantidad ${idBateriaCarrito} desea quitar`))
    //buscar en el arrayCarrito la bateria elegida
    let bateriaCarrito = arrayCarrito.find((bate)=>bate.id == idBateriaCarrito)
    //evaluar si el bateriaComrado existe 
   if(bateriaCarrito){
        if(bateriaCarrito.cantidad >= cantidad ) {
            //resta cantidad deseada
            bateriaCarrito.cantidad -= cantidad
            // Si la cantidad es 0 o menor, eliminar el producto del carrito
            if (bateriaCarrito.cantidad <= 0) {
                // Eliminar la batería del carrito
                arrayCarrito = arrayCarrito.filter(bate => bate.id !== idBateriaCarrito);
            }
         // Guardar el carrito actualizado en localStorage
         localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
         console.log(`Se han quitado ${cantidad} unidades de la batería con id ${idBateriaCarrito}.`);
     } else {
         console.log(`No puedes quitar más unidades de las que hay en el carrito. Solo tienes ${bateriaCarrito.cantidad} unidades.`);
     }
    } else {
        console.log(`El id ${idBateriaCarrito} no existe en el carrito.`);
    }
}
  
function sumaTotal(carrito) {
    let totalSumado = 0;    
    carrito.forEach(bat => totalSumado += (bat.precio * bat.cantidad));
    console.log(`El total de su compra es de $${totalSumado}`);
    mostrarCarritoConFormato(carrito); // Llamada a la función para mostrar el carrito
}
    
  
  function sacarCarrito(carrito) {
    mostrarCatalogo(carrito)
    let idBateriaSacar = Number(prompt(`Mire el catalogo en consola y selecione la id de la bateria que desea quitar del carrito`))
    let bateriaSacar =carrito.find((bat)=>bat.id == idBateriaSacar)
    if(bateriaSacar == undefined) {
    console.log(`El id ${idBateriaSacar} no existe en nuestro carrito`)
    } else {
    let index = carrito.indexOf(bateriaSacar)
      if (index > -1 ) {
      carrito.splice(index, 1);
      console.log(`Batería con id ${bateriaSacar.id} eliminada del carrito`);
    }
  }}

    
  function mostrarCarrito(arrayCarrito) {
      console.log(arrayCarrito)
    }
  