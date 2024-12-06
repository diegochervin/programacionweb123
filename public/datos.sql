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
    ('Ferrobat', '12X65', 85000, 10, 'https://github.com/diegochervin/programacionweb123/blob/main/public/static/img/12x65.jpg?raw=true'),
    ('Moura', 'M20GD', 145000, 10, 'https://github.com/diegochervin/programacionweb123/blob/main/public/static/img/m20gd.jpg?raw=true'),
    ('Willard', 'UB620', 155000, 10, 'https://github.com/diegochervin/programacionweb123/blob/main/public/static/img/ub620.jpg?raw=true'),
    ('Ferrobat', '12x70', 100000, 10, 'https://github.com/diegochervin/programacionweb123/blob/main/public/static/img/12x70.jpg?raw=true'),
    ('Ferrobat', '12x80', 110000, 10, 'https://github.com/diegochervin/programacionweb123/blob/main/public/static/img/12x80.jpg?raw=true'),
    ('Moura', 'M22GD', 165000, 10, 'https://github.com/diegochervin/programacionweb123/blob/main/public/static/img/m22gd.jpg?raw=true'),
    ('Ferrobat', 'prueba1', 150, 0, 'https://github.com/diegochervin/programacionweb123/blob/main/public/static/img/prueba2.jpg?raw=true'),
    ('Ferrobat', 'prueba2', 150, 0, 'https://github.com/diegochervin/programacionweb123/blob/main/public/static/img/prueba2.jpg?raw=true'),
     ('Ferrobat', '12X650', 123, 10, 'https://github.com/diegochervin/programacionweb123/blob/main/public/static/img/prueba2.jpg?raw=true'),
    ('Moura', 'M2000GD', 321, 10, 'https://github.com/diegochervin/programacionweb123/blob/main/public/static/img/prueba2.jpg?raw=true'),
    ('Pepo', 'pepito', 83000, 3, 'https://github.com/diegochervin/programacionweb123/blob/main/public/static/img/prueba2.jpg?raw=true');


-- crear tabla usuarios
CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    perfil VARCHAR(30)
  );

