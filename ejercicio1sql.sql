/* 1 */
CREATE TABLE Clientes (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL
);
/* 2 */
INSERT INTO Clientes (id, nombre, email)
VALUES (1, 'Juan', 'juan@example.com');
/* 3 */
UPDATE Clientes
SET email = 'juan@gmail.com'
WHERE id = 1;
/* 4 */
DELETE FROM Clientes
WHERE id = 1;
/* 5 */
CREATE TABLE Pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INT REFERENCES Clientes(id),
    producto TEXT NOT NULL,
    cantidad INTEGER NOT NULL
);
/* 6 */
INSERT INTO Pedidos (id, cliente_id, producto, cantidad)
VALUES (1, 1, 'Camiseta', 2);
/* 7 */
UPDATE Pedidos
SET cantidad = 3
WHERE id = 1;
/* 8 */
CREATE TABLE Productos (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL
);
/* 9 */
INSERT INTO Productos (nombre, precio)
VALUES
    ('Camiseta', 19.99),
    ('Pantalones', 39.99),
    ('Sudadera', 49.99),
    ('Zapatos', 79.99),
    ('Gorra', 14.99);
/* 10 */
SELECT * FROM Clientes;
/* 11 */
SELECT Pedidos.*, Clientes.nombre
FROM Pedidos
INNER JOIN Clientes ON Pedidos.cliente_id = Clientes.id;
/* 12 */
SELECT * FROM Productos
WHERE precio > 50;
/* 13 */
SELECT * FROM Pedidos
WHERE cantidad >= 5;
/* 14 */
SELECT * FROM Clientes
WHERE nombre LIKE 'A%';
/* 15 */
SELECT Clientes.nombre, COUNT(Pedidos.id) AS total_pedidos
FROM Clientes
LEFT JOIN Pedidos ON Clientes.id = Pedidos.cliente_id
GROUP BY Clientes.nombre;
/* 16 */
SELECT Productos.nombre, SUM(Pedidos.cantidad) AS total_pedidos
/* 17 */
FROM Productos
LEFT JOIN Pedidos ON Productos.nombre = Pedidos.producto
GROUP BY Productos.nombre;
/* 18 */
ALTER TABLE Pedidos
ADD COLUMN fecha DATE;
/* 19 */
ALTER TABLE Pedidos
ALTER COLUMN producto TYPE INTEGER USING producto::INT;

ALTER TABLE Pedidos
ADD CONSTRAINT fk_producto
FOREIGN KEY (producto) REFERENCES Productos(id);
SELECT Clientes.nombre AS cliente_nombre, 
       Productos.nombre AS producto_nombre, 
       Pedidos.cantidad
/* 20 */
SELECT Clientes.nombre AS cliente_nombre, 
       Productos.nombre AS producto_nombre, 
       Pedidos.cantidad
FROM Pedidos
INNER JOIN Clientes ON Pedidos.cliente_id = Clientes.id
INNER JOIN Productos ON Pedidos.producto = Productos.id;















