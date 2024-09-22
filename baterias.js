


  
  function menu() {
    let finalizarMenu = false;
    while (finalizarMenu == false) {
      let opcion = prompt(`Ingrese la opción que desea:
                              1 - Ingresar Nueva Bateria al sistema
                              2 - Mostrar info
                              3 - Mostrar Precio en 3 cuotas
                              4 - Ordenar Precio Menor a Mayor
                              5 - Ordenar Precio Mayor a Menor
                              6 - Ordenar Alfabeticamente A-Z por Modelo
                              7 - Ordenar Alfabeticamente Z-A por modelo
                              8 - Borrar Bateria
                              9 - Buscar Modelo
                              10 - Buscar Marca
                              11 - Filtrar por precio maximo 
                              12 - Filtrar Marca
                              13 - Agregar bateria al carrito
                              14 - Ver total carrito
                              15 - Sacar del carrito un modelo
                              16 - Mostrar carrito
                              17 - Restar del carrito
                              18 - Mostrar carrito con Formato
                              0 - Salir del menú`);
      switch (opcion) {
        case "0":
          console.log("Gracias por utilizar nuestra app");
          finalizarMenu = true;
          break;       
        case "1":
          crearBateria();
          break;
        case "2":
          mostrarInfoDetallada(local);
          break;
        case "3":
          calcular3cuotas(local);
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
          case "15":
          sacarCarrito(carrito);
          break; 
          case "16":
          mostrarCarrito(carrito);
          break;
          case "17":
          restarUnidades(carrito);
          break;
          case "18":
          mostrarCarritoConFormato(carrito);
          break;
        default:
          console.log(`La opción seleccionada ${opcion} no existe`);
          break;
      }
    }
  }
  
   

  menu();
  
  

