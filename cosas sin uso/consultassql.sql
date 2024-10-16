-- Nos filtra los impares
-- SELECT * FROM usuarios WHERE MOD(id, 2) = 1;

--A) mostrar nombre y telefono de los clientes que su nombre empieza con "L" "M" "S"
--SELECT nombre, telefono FROM `clientes` WHERE nombre LIKE "L%" OR nombre LIKE "M%" OR nombre like "S%" ;

--B) mostrar las mascotas que sean gato o hamster y su edad igual o mayor a 3
--SELECT * FROM `mascotas` WHERE (especie = "gato" OR especie = "hamster") and edad >= 3;

--C) mostrar las compras realizadas en Sep del 2023
-- SELECT * FROM `compras` WHERE fecha_compra LIKE "2023-09-%";

--D) mostrar los clientes que su id sea impar
-- SELECT * FROM tu_tabla WHERE MOD(cliente_id, 2) = 1;

--E) mostrar el promedio de stock de cada categoria
-- SELECT categoria, AVG(stock) as StockPromedio FROM productos GROUP BY categoria;



--F) mostrar las categorias que su stock sea mayor al promedio
--SELECT nombre FROM `productos` WHERE stock >= (SELECT AVG(stock) FROM productos);
