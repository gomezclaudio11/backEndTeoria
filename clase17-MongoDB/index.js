/** mongodb
  Es una base de datos no relacional NO SQL
  orientada a documentos 
 que ofrece una gran escalabilidad y flexibilidad
 y un modelo de consultas e indexacion avanzado
 
 */
/**
 *INDEXACION

La indexación en el contexto de la programación y las bases
 de datos se refiere a la organización y almacenamiento de
  datos para facilitar la recuperación eficiente de 
  información. Aquí hay dos contextos principales en los
   que se utiliza la indexación:

    Programación y Estructuras de Datos:
    En programación, la indexación se refiere al acceso a 
    elementos de una colección de datos, como matrices o 
    listas, utilizando un índice numérico o clave. 
    Por ejemplo, en un arreglo, puedes acceder a elementos 
    específicos proporcionando el índice correspondiente.


 let array = [10, 20, 30, 40, 50];
console.log(array[2]); // Accede al elemento en el índice 2, que es 30.

    Bases de Datos y Optimización de Consultas:
    En el contexto de las bases de datos, la indexación es 
    una técnica utilizada para mejorar la velocidad de las 
    consultas. Un índice en una base de datos es similar a 
    un índice en un libro: facilita la búsqueda de 
    información. Los índices se crean en columnas 
    específicas de una tabla y permiten a la base de datos 
    encontrar rápidamente las filas que coinciden con 
    ciertos valores en esas columnas.

    Por ejemplo, si tienes una tabla de empleados y a 
    menudo realizas consultas basadas en el apellido, 
    podrías crear un índice en la columna "apellido". 
    Esto aceleraría la búsqueda y recuperación de datos 
    cuando realizas consultas que involucran ese campo.

La indexación es una herramienta poderosa para mejorar la
 eficiencia en la recuperación de datos, pero también tiene
 costos asociados, ya que los índices ocupan espacio en
 disco y deben actualizarse cada vez que se modifican los
 datos. Por lo tanto, se utiliza con cuidado y se 
 selecciona según los patrones de consulta y las necesidades
 específicas de la aplicación.
 */

 /**Modelo de documentos de mongodb */
 /**
  Es facil de usar y aprender
  Escalable
  Dispone dos variables de despliegue:
  LOCAL: con MONGO SERVER a traves de sus opciones 
        community y enterprise
  REMOTA: mediante una plataforma configurada en la nube
        lista para usar llamada MONGO ATLAS
  */

/**CARACTERISTICAS
 * Documentos flexibles similiares a json
 * El modelo de documentos se asigna a los objetos en el codigo
 * Es de uso gratuito
 * No se basa en el concepto de tabla fila y registro
 * Se apoya en el concepto de COLECCION DOCUMENTO Y PROPIEDAD

COLECCIONES
Es muy similar a una tabla de una base de datos
La tabla almacena registros filas (mysql)
las colecciones almacenan documentos (mongodb)

Elconcepto de fila y documentos son diferentes
   - Una fila esta compuesta de columnas y siempre son las mismas
    para todas ellas
   - Un documento esta compuesto x claves y valores (key values)
    Cada documento puede tener variaciones importantes con
    respecto al anterior dentro de una coleccion

En NOSQL se denomina SchemaFree aporta gran flexibilidad a 
la hora de trabajar
DOCUMENTO EMBEBIDO es un documento que esta insertado dentro
de otro y que ambos estan ligados a la misma coleccion 

*/
/**
 MONGO SERVER Y MONGODBCLIENT CLI
 Creamos una carpeta llamada -por ejemplo- miBaseMongo
Ejecutamos en la consola el siguiente comando:
mongod --dbpath “ruta/hacia/la/carpeta/miBaseMongo”
Verificamos que el motor de base de datos se inicie. 
Este escuchará peticiones de clientes en localhost 
puerto 27017.
Abrimos otra consola y ejecutamos el comando: mongosh
En este caso se abre el cliente que se conectará al 
servicio de base de datos iniciado anteriormente.

Ambas consolas quedarán bloqueadas ejecutando sus procesos.
Si queremos salir, lo hacemos con Control-C.

 */
/**
 Listar bases de datos disponibles:
En el shell de MongoDB, puedes ejecutar el comando:
show dbs
Crear y seleccionar la base de datos 'sistema':
use sistema
Insertar un documento en la colección 'usuarios':
db.usuarios.insertOne({ nombre: "Ejemplo", edad: 25 })
Listar documentos en la colección 'usuarios':
db.usuarios.find()
Mostrar colecciones de la base 'sistema':
show collections
Insertar tres documentos más en la colección 'usuarios':
db.usuarios.insertMany([
  { nombre: "Usuario1", edad: 30 },
  { nombre: "Usuario2", edad: 22 },
  { nombre: "Usuario3", edad: 28 }
])
Listar documentos en la colección 'usuarios' nuevamente:
db.usuarios.find()

 */