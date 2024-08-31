

function solicitarPrecio() {
    let numero;
    do {
        let entrada = parseInt(prompt("Ingrese el precio del libro"));
        numero = entrada

        // Verifica si la entrada no es un número válido
        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.")
        }
    } while (isNaN(numero)); // Repite mientras no se ingrese un número válido
    return numero;
}


function solicitarAutor() {
    let nombre 
    do {
 
    let entrada = prompt("Ingrese el nombre del autor")
      nombre = entrada
    
    if (nombre === "") {
        alert("Por favor, ingrese el nombre.");
         }
      } while (nombre === "")
   
     return nombre
     }

function solicitarLibro() {
        let nombre 
        do {
     
        let entrada = prompt("Ingrese el nombre del libro")
          nombre = entrada
        
        if (nombre === "") {
            alert("Por favor, ingrese el nombre del libro.");
             }
          } while (nombre === "")
       
         return nombre
         }


         
         function sumarIVA() {
          numero = numero * 1.21

         }

         let libro1 = { 
            precio: solicitarPrecio(),
            autor: solicitarAutor(),
            titulo: solicitarLibro()
         }
         


console.log(libro1)
libro1.precio.sumarIVA()
console.log(libro1)



//finalizarMenu 




//crear un objeto
// literales abirendo llave y aclarando atrubit


