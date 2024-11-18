--a
--SELECT COUNT(*) as servCantGatos, SUM(servicios.valor) as totalGatos FROM `mascotas` INNER JOIN serviciossolicitados on serviciossolicitados.mascota_id = mascotas.mascota_id INNER join servicios on servicios.servicio_id = serviciossolicitados.servicio_id WHERE especie = "gato";

--b
-- SELECT clientes.nombre FROM `serviciossolicitados` INNER join mascotas on serviciossolicitados.mascota_id = mascotas.mascota_id INNER JOIN clientes on clientes.cliente_id = mascotas.cliente_id where serviciossolicitados.fecha_solicitud BETWEEN "2024-09-01" AND "2024-09-04";

--c
-- SELECT SUM(servicios.valor) as totalDiego FROM `mascotas` INNER join serviciossolicitados on mascotas.mascota_id = serviciossolicitados.mascota_id INNER JOIN servicios on serviciossolicitados.servicio_id = servicios.servicio_id where mascotas.nombre ="diego";

--d
--SELECT clientes.nombre as nombreCliente, COUNT(*) as cantCOmpras, SUM(productos.precio * compras.cantidad) as totalCantDIego FROM `compras` INNER JOIN productos on compras.producto_id = productos.producto_id INNER JOIN clientes on clientes.cliente_id = compras.cliente_id GROUP by clientes.cliente_id;





--g
--SELECT AVG(productos.precio) AS precioPromedioDiego, SUM(productos.stock) AS stockTOtalDiego, COUNT(*) as cantPprductoDiego, categoria as NombreDiego FROM `productos` GROUP BY categoria HAVING precioPromedioDiego > (SELECT AVG(precio) from productos);

