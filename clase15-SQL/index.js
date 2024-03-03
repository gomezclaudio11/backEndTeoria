/** sql */
/**
 Que es una base de datos:
 Es un repositorio persistente que nos permite almacenar gran
 numero de informacion de una forma organizada para su
 futura consulta, realizacion de busquedas, nuevo ingreso
 de datos y otras operaciones
 Un servidor de base de datos es un contenedor que puede 
 alojar un gran numero de bases de datos y ofrece los 
 servicios para conectarlas a los clientes
 Mediante los clientes podrmos interactuar con las bases
 de datos y estos pueden estar implementados en modo 
 consolo, en modo aplicacion grafica o desde nuestra 
 aplicacion de servidor

 La arquitectura cliente-servidor es un modelo de diseño
 de sowftware en el que las tareas se reparten entre los 
 proveedores de recursos o servicios, llamados SERVIDORES
 y los demandantes llamados CLIENTES

Un CLIENTE  realiza peticiones a otro programa 
el SERVIDOR quien le da la respuesta
Un cliente de base de datos se conecta e interactua con el
servidor de base de datos
 */

/**
 TIPOS DE CLIENTES DE BASE DE DATOS
 
 - cliente CLI: (command line interface)
  Es un cliente que interactua con base de 
 datos medianate el uso de una consola

 -cliente GUI: (graphical user interface)
 Es un cliente que interactua con la base
 de datos mendiante el uso de una aplicacion grafica

 -cliente web: Es un cliente que interactua con la base
 de datos a traves de una pagin web mediante el uso de
 un navegador

 -cliente de aplicacion: Es un cliente que esta implementado
 dentro de nuestra aplicacion de backend y sirve para que
 nuestro programa se conecte e interactue con la base de 
 datos
 */
/**
 CRUD
 crear,leer, actualizar y borrar/ 
 create, read, update, delete
Que se usa para referirse a las funciones basicas en base de
datos o la capa de persistencia en un software
CRUD resume las tareas requeridas x un usuario para crear y
gestionar datos, ya sea para el manejo de bases de datos
o para el uso de aplicaciones
 */

/**SQL */
/**
 STRUCTURE QUERY LANGUAGE (lenguaje de consulta estructurado)
 Vinculado con la gestion de bases de datos de CARACTER
 RELACIONAL 
 sql brinda la posibilidad de realizar consultas con el 
 objetico de recuperar informacion de las bases de datos
 de manera sencilla
 */
/**MYSQL Y MARIADB */
/**
 * COMANDOS SQL
 https://mariadb.com/kb/es/comandos-sql/

 mysql es un sistema de gestion de bases de datos relacional
 considerada la base de daros de codigo abierto mas 
 popular del mundo
 mariadb es un sistema de gestion de bases de datos derivado
 de mysql. Son compatibles entre si a nivel funcional
 */
/**
 Crear la base de datos y la tabla
 
 CREATE DATABASE mibase;

USE mibase;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    edad INT UNSIGNED,
    email VARCHAR(100) NOT NULL
);
 */

/**
 Insertar usuarios en la tabla
 INSERT INTO usuarios (nombre, apellido, edad, email) VALUES
('Juan', 'Perez', 23, 'jp@gmail.com'),
('Pedro', 'Mei', 21, 'pm@gmail.com'),
('Juana', 'Suarez', 25, 'js@gmail.com');

 */

/**
 Listar los usuarios agregados
 SELECT * FROM usuarios;
 */

 /**
  Borrar el usuario con id = 2:
  DELETE FROM usuarios WHERE id = 2;
  */

  /**
   Actualizar la edad del usuario con id = 1 a 24 años:
   UPDATE usuarios SET edad = 24 WHERE id = 1;
   */