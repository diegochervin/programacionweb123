CREATE TABLE Productos(
    producto_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    categoria VARCHAR(255),
    precio INT NOT NULL,
    stock INT NOT NULL,
    vencimiento DATE
);
CREATE TABLE Servicios(
    servicio_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255),
    valor INT NOT NULL
);
CREATE TABLE Clientes (
    cliente_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(35) NOT NULL,
    direccion VARCHAR(255),
    telefono BIGINT
);
CREATE TABLE Mascotas(
    mascota_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    edad INT,
    especie VARCHAR(255),
    raza VARCHAR(255),
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES Clientes(cliente_id)
);
CREATE TABLE Compras(
    compra_id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    producto_id INT,
    cantidad INT,
    fecha_compra DATE,
    FOREIGN KEY (cliente_id) REFERENCES Clientes(cliente_id),
    FOREIGN KEY (producto_id) REFERENCES Productos(producto_id)
);
CREATE TABLE ServiciosSolicitados(
    solicitud_id INT AUTO_INCREMENT PRIMARY KEY,
    servicio_id INT,
    mascota_id INT,
    fecha_solicitud DATE,
    FOREIGN KEY (servicio_id) REFERENCES Servicios(servicio_id),
    FOREIGN KEY (mascota_id) REFERENCES Mascotas(mascota_id)
);
