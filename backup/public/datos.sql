create database ferrobat

CREATE TABLE baterias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    precio INT NOT NULL,
    stock INT NOT NULL,
    imagen VARCHAR(255),
    cantidad INT DEFAULT 0
);

-- primer insert
INSERT INTO baterias (marca, modelo, precio, stock, imagen)
VALUES
    ('Ferrobat', '12X65', 85000, 10, '12x65.jpg'),
    ('Moura', 'M20GD', 145000, 10, 'm20gd.jpg'),
    ('Willard', 'UB620', 155000, 10, 'ub620.jpg'),
    ('Ferrobat', '12x70', 100000, 10, '12x70.jpg'),
    ('Ferrobat', '12x80', 110000, 10, '12x80.jpg'),
    ('Moura', 'M22GD', 165000, 10, 'm22gd.jpg'),
    ('Ferrobat', 'prueba1', 150, 0, 'prueba1.jpg'),
    ('Ferrobat', 'prueba2', 150, 0, 'prueba2.jpg');


-- crear tabla usuarios
CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(30) NOT NULL
  );