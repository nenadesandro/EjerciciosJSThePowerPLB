/* 1 */
CREATE DATABASE "MiBaseDeDatos";
/* 2 */
CREATE TABLE Usuarios (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    edad INTEGER NOT NULL
);
/* 3 */
INSERT INTO Usuarios (nombre, edad)
VALUES 
    ('Juan Pérez', 30),
    ('Pilar Lucas', 25);
/* 4 */
UPDATE Usuarios
SET edad = 35
WHERE id = 1;
/* 5 */
DELETE FROM Usuarios
WHERE id = 1;
