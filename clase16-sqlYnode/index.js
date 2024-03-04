/**SQL Y NODE */
/**
 NODE como cliente de mysql/mariaDB
 KNEX
 Es un generador de consultas SQL con baterias incluidas
 diseñado para ser flexible portatil y facil de usuario
 Cuenta con una interface basada en callback y en promesas
 knex se puede utilizar como un generador de consultas sql
 en node.js
 Se instala desde npm
        npm i knex
 
Además debemos instalar las dependencias de las base de
 datos con la cual vamos a trabajar: npm i -> pg para 
 PostgreSQL y Amazon Redshift, mysql para MySQL y MariaDB, 
 sqlite3 para SQLite3 ó mssql para MSSQL.
 */

 /**
  Creamos un proyecto Node.js con npm init -y
Instalamos la dependencias Knex y mysql con 
npm i knex mysql (mysql es el plugin necesario para 
    trabajar con MariaDB) 
Levantamos el motor de base de datos MariaDB con XAMPP.
Creamos los archivos necesarios para probar los comandos
 SQL necesarios en acciones CRUD.

  */

 /*** sqlite3 */
 /**
  Es un motor de base de datos sql pequeño rapido autonomo
  de alta confiabilidad
  Es el motor de busqueda mas utilizado en el mundo
  El codigo fuente de sqlite es de dominio publico
  */
 /**INSTALACION
  Creamos un proyecto Node.js con npm init -y
Instalamos la dependencias Knex y sqlite3 con 
npm i knex sqlite3  (sqlite3 es el plugin necesario para 
  trabajar con SQLite Version 3) 
Creamos la carpeta DB, en donde se va a almacenar el 
archivo que contiene la estructura de base de datos.
Creamos los archivos necesarios para probar los comandos
 SQL necesarios en acciones CRUD.

  * 
  */