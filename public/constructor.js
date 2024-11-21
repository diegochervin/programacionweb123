// class constructora

class Bateria {
  constructor(id, marca, modelo, precio, stock, imagen) {
    (this.id = id),
      (this.marca = marca.toUpperCase()),
      (this.modelo = modelo),
      (this.precio = precio),
      (this.imagen = imagen),
      (this.stock = stock),
      (this.cantidad = 0);
  }

  mostrarInfoEquipo() {
    console.log(
      `#${this.id} es una bateria de Marca ${this.marca} , es un ${this.modelo} y su precio es $${this.precio}`
    );
  }

  calcularPrecioTarjeta3cuotas() {
    this.precio = this.precio * 1.3;
  }

  exponerCatalogo() {
    console.log(
      this.id,
      this.marca,
      this.modelo,
      this.precio,
      this.cantidad,
      this.stock
    );
  }

  sumarUnidades(cant) {
    this.cantidad += cant;
  }

  restarUnidades(cant) {
    this.cantidad -= cant;
  }
}

let estanteria = [];

// Función para cargar las baterías desde el JSON
  async function cargarEstanteria() {
    try {
      const resp = await fetch('baterias.json');
      const dataBateria = await resp.json();
      // Llenamos el array estanteria con las baterías
      estanteria = dataBateria.map(bat => new Bateria(bat.id, bat.marca, bat.modelo, bat.precio, bat.stock, bat.imagen));
      // Una vez cargadas las baterías, generar los filtros de marcas
      generarFiltrosDeMarca();
      // Renderizar las baterías (puedes ajustar esta parte según tu necesidad)
      renderBaterias(estanteria, carrito);
    } catch (error) {
      console.error('Error al cargar las baterías:', error);
    }
  }
  cargarEstanteria();


const carrito = [];
if (localStorage.getItem("carrito")) {
  const carritoStore = JSON.parse(localStorage.getItem("carrito"));
  // ciclo for para recorrer, el array localStore es para traerme la info que capturamos del browser
  carritoStore.forEach((bat) =>
    // batstorage el objeto que capture del storage
    {
      const carritoClass = new Bateria(
        bat.id,
        bat.marca,
        bat.modelo,
        bat.precio,
        bat.stock,
        bat.imagen
      );
      carritoClass.cantidad = bat.cantidad;
      carrito.push(carritoClass);
    }
  );
}

const marcasExistentes = [];

marcasExistentes.forEach((bateria) => {
  const marcaMayuscula = bateria.marca.toUpperCase();
  if (!marcasExistentes.includes(marcaMayuscula)) {
    marcasExistentes.push(marcaMayuscula);
  }
});

