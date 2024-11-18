--1 
--SELECT * FROM `clientes` INNER JOIN compras on clientes.cliente_id = compras.compra_id WHERE compras.fecha_compra BETWEEN '2023-07-01' and '2023-12-31';


--2
--SELECT mascotas.* FROM `mascotas` INNER JOIN serviciossolicitados on mascotas.mascota_id = serviciossolicitados.mascota_id WHERE MOD(servicio_id, 2) = 0 GROUP BY mascotas.mascota_id;
-- select * from mascotas where mascotas_id IN (select mascota_id from serviciossolicitados where mod(servicio_id, 2) = 0)


--3
--SELECT * FROM `clientes` INNER JOIN mascotas on mascotas.cliente_id = clientes.cliente_id WHERE (especie = "gato" OR especie = "hamster");

--4
--SELECT nombre, telefono FROM `clientes` INNER join compras on clientes.cliente_id = compras.cliente_id WHERE fecha_compra BETWEEN '2023-09-01' and '2023-09-30';

--5
-- SELECT productos.stock, productos.nombre FROM `productos` INNER JOIN compras on productos.producto_id = compras.producto_id INNER JOIN clientes on clientes.cliente_id = compras.cliente_id where compras.cliente_id = 3;

--6
-- SELECT * FROM `productos` WHERE stock >= (SELECT AVG(stock) FROM productos);

--7
-- SELECT servicios.nombre, servicios.valor, COUNT(serviciossolicitados.solicitud_id) AS cantidad_solicitudes FROM servicios INNER JOIN serviciossolicitados ON servicios.servicio_id = serviciossolicitados.servicio_id GROUP BY servicios.servicio_id, servicios.nombre, servicios.valor HAVING cantidad_solicitudes >= 4;

--8
-- SELECT servicios.nombre, servicios.valor, COUNT(serviciossolicitados.solicitud_id) AS cantidad_solicitudes FROM servicios INNER JOIN serviciossolicitados ON servicios.servicio_id = serviciossolicitados.servicio_id GROUP BY servicios.servicio_id, servicios.nombre, servicios.valor;

--9
-- SELECT servicios.nombre, servicios.valor, COUNT(serviciossolicitados.solicitud_id) AS cantidad_solicitudes, (COUNT(serviciossolicitados.solicitud_id) * servicios.valor) as total_servicio FROM servicios INNER JOIN serviciossolicitados ON servicios.servicio_id = serviciossolicitados.servicio_id GROUP BY servicios.servicio_id, servicios.nombre, servicios.valor;

--10
-- SELECT *, COUNT(serviciossolicitados.mascota_id) AS CANTIDAD FROM mascotas INNER JOIN serviciossolicitados ON mascotas.mascota_id = serviciossolicitados.mascota_id GROUP BY mascotas.nombre ORDER BY CANTIDAD DESC;

--subconsulta G
-- g (primera) SELECT * FROM clientes INNER JOIN compras on clientes.cliente_id = compras.cliente_id where producto_id = 8;


-- a 
-- SELECT clientes.nombre, telefono FROM `clientes` INNER JOIN compras on clientes.cliente_id = compras.cliente_id INNER JOIN productos on compras.producto_id = productos.producto_id WHERE precio >= 1000;

--b
--SELECT mascotas.nombre, mascotas.raza FROM mascotas INNER JOIN clientes ON mascotas.cliente_id = clientes.cliente_id WHERE direccion LIKE 'Av.%';

--c
--SELECT direccion, clientes.nombre FROM `clientes` INNER JOIN mascotas on clientes.cliente_id = mascotas.cliente_id WHERE MOD(clientes.cliente_id, 2) = 0 AND (especie = "gato" OR especie = "perro");

--d
--SELECT mascotas.mascota_id, COUNT(mascotas.mascota_id) as Cantidad_servicio FROM `mascotas` INNER join serviciossolicitados on mascotas.mascota_id = serviciossolicitados.mascota_id WHERE (especie = "perro") GROUP BY mascotas.mascota_id HAVING Cantidad_servicio >= 2;

--e
-- SELECT clientes.nombre, clientes.telefono FROM `clientes` INNER JOIN mascotas on clientes.cliente_id = mascotas.cliente_id INNER JOIN compras on clientes.cliente_id = compras.cliente_id INNER JOIN productos on compras.producto_id = productos.producto_id WHERE (especie = "perro") AND productos.nombre like "Croqueta%"

--f
--SELECT clientes.nombre, clientes.telefono FROM `clientes` INNER JOIN mascotas on clientes.cliente_id = mascotas.cliente_id INNER JOIN compras on clientes.cliente_id = compras.cliente_id WHERE (especie = "gato" OR especie = "hamster") AND MOD(clientes.cliente_id, 2) = 0 AND compras.fecha_compra BETWEEN '2023-07-01' and '2023-12-31';