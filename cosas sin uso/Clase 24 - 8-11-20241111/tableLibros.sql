CREATE TABLE libros(
id INT primary key AUTO_INCREMENT,
autor varchar(77),
titulo varchar(200),
precio bigINt,
cantidad INT);

INSERT INTO libros (autor, titulo, precio, cantidad) 
VALUES ("Jorges Luis Borges", "Aleph", 800, 1);
INSERT INTO libros (autor, titulo, precio, cantidad) 
VALUES ("Gabriel Garcia Marquez", "Cien años Soledad", 4500, 1);