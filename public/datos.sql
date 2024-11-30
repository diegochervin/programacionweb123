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

 /* [
    { "id":1 ,"marca": "Ferrobat", "modelo": "12X65", "precio": 85000, "stock": 10, "imagen": "12x65.jpg" },
    { "id":2 ,"marca": "Moura", "modelo": "M20GD", "precio": 145000, "stock": 10, "imagen": "m20gd.jpg" },
    { "id":3 ,"marca": "Willard", "modelo": "UB620", "precio": 155000, "stock": 10, "imagen": "ub620.jpg" },
    { "id":4 ,"marca": "Ferrobat", "modelo": "12x70", "precio": 100000, "stock": 10, "imagen": "12x70.jpg" },
    { "id":5 ,"marca": "Ferrobat", "modelo": "12x80", "precio": 110000, "stock": 10, "imagen": "12x80.jpg" },
    { "id":6 ,"marca": "Moura", "modelo": "M22GD", "precio": 165000, "stock": 10, "imagen": "m22gd.jpg" },
    { "id":7 ,"marca": "Ferrobat", "modelo": "prueba1", "precio": 150, "stock": 0, "imagen": "prueba1.jpg" },
    { "id":8 ,"marca": "Ferrobat", "modelo": "prueba2", "precio": 150, "stock": 0, "imagen": "prueba2.jpg" },
    { "id":9 ,"marca": "Pepo", "modelo": "prueba2", "precio": 150, "stock": 0, "imagen": "prueba2.jpg" }
  ]
  */

  CREATE TABLE pedidos ( id INT AUTO_INCREMENT PRIMARY KEY, id_usuario INT, -- clave foránea de la tabla usuario id_bateria INT, -- clave foránea de la tabla baterias cantidad INT NOT NULL, total DECIMAL(10, 2), fecha_pedido DATETIME DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario), FOREIGN KEY (id_bateria) REFERENCES baterias(id_bateria) );