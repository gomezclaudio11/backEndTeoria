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
/**
 CRUD
 Esta estrechamente vinculado a la gestion de datos digitales
 COMANDO EN MONGODB
 db.coll.drop() : borra una colección y sus índices respectivos.
db.dropDatabase() : elimina la base de datos actual.
db.createCollection("contacts") : crea una colección en forma 
explícita.
db.coll.stats() : refleja estadísticas del uso de la base.
db.coll.storageSize() : tamaño de almacenamiento de la 
colección.
db.coll.totalIndexSize() : tamaño total de todos los índices
 de la colección.
db.coll.totalSize(): tamaño total en bytes de los datos de 
la colección más el tamaño de cada índice de la colección.
db.coll.validate({full: true}) : comprueba la integridad de
 una colección.
db.coll.renameCollection("new_coll", true) : renombra una
 colección, el  2do parámetro para borrar la colección 
 destino si existe.
 db.coll.insertOne( {key:value} ) : inserta un documento en
  la colección.
db.coll.insert( {key:value} ) : inserta un documento en la 
colección (en desuso).
db.coll.insertMany( [ {key:value}, {key:value}, {key:value} ]):
 inserta un array de documentos la colección en modo Bulk.
db.coll.findOne() : busca un documento dentro de una colección
db.coll.find() : busca todos los documentos dentro de una 
colección.
db.coll.find( {key:value} ) : busca los documentos dentro de 
una colección que satisfacen el filtro de búsqueda.
db.coll.find().pretty() : devuelve todos los documentos 
conservando el formato de objeto de salida.

CONTADORES
db.coll.estimatedDocumentCount()
Devuelve la cantidad total de documentos encontrados en la 
colección.
db.coll.countDocuments( {key: val} )
Devuelve la cantidad de documentos encontrados en la colección
 (con filtro de query).

 */

 /**FILTROS */
 /**
  db.coll.find({key: {$operator:val}})
  devuelve los documentos segun el operador de filtro 
  utilizado

$and : Realiza operación AND -> sintaxis: {$and: [ {},{} ] }
$or : Realiza operación OR -> sintaxis: {$or: [ {},{} ] }
$lt : Coincide con valores que son menores que un valor 
    especificado.
$lte : Coincide con valores menores o iguales a un valor
     especificado.
$gt : Coincide con valores mayores a un valor especificado.
$gte : Coincide con valores mayores o iguales a un valor  
    especificado.
$ne : Coincide con valores que no son iguales a un valor  
    especificado.
$eq : Selecciona los documentos que son iguales a un valor 
    especificado.

OPERADPRES PARA FILTROS DE QUERY
$exists : Selecciona los documentos según la existencia de un
     campo.
$in : Selecciona los documentos especificados en un array. 
sintaxis: {key:{$in: [array of values] } }
$nin : Coincide con ninguno de los valores especificados 
      en un array.
$size : Coincide con el número de elementos especificados.
$all : Coincide con todos los valores definidos dentro de un 
    array.
$elemMatch : Coincide con algún valor definido dentro del 
    query.

BUSQUEDA AVANZADA
db.coll.distinct( val )
devuelve un array con los distintos valores que toma un 
determinado campo en los documentos de la colección.

db.coll.find({doc.subdoc:value})
Se utiliza para filtrar subdocumentos.

db.coll.find({name: /^Max$/i})
filtra utilizando expresiones regulares

SORT LIMIT SKIP
sort( { campoA: 1 ó -1 , campoB: 1 ó -1 , ... } ) :
 Especifica el orden en el que la consulta devuelve documentos
 coincidentes. El ó los campos por los cuales ordena pueden 
 contener los valores 1 y -1, estableciendo orden ascendente y
  descendente respectivamente. El orden se evalúa de izquierda
   a derecha en caso que los valores coincidan.

limit(num): Especifica el número máximo de documentos 
devueltos.
skip(offset) : Saltea la cantidad de documentos especificada.

Se pueden utilizar en forma combinada:
db.Employee.find().skip(2).limit(3).sort({Employeeid:-1})

  */
 /**UPDATE Y DELETE */
 /**
 - db.collection.updateOne(query, update, options)
query: especifica el filtro de documentos a ser actualizados.
update: contiene los datos a ser actualizados con sus
 operadores respectivos: 
 $set, $unset, $inc, $rename, $mul, $min, $max, etc.
options: contiene varias opciones para la actualización,
 entre ellas: 
upsert (true ó false) : Es una opción para hacer un insert 
en caso de que el registro no exista.

-db.coll.updateMany(query, update, options)
Igual que el anterior, pero hace una actualización múltiple en caso de que el filtro de query devuelva varios resultados.

DELETE

db.coll.deleteOne( {key: val} ): Elimina un sólo documento 
(el primero) que coincide con el filtro especificado.
db.coll.deleteMany( {key: val} ): Elimina todos los documentos
 que coinciden con el filtro especificado.
db.coll.remove( {key: val} ): Elimina documentos de una 
colección.
db.coll.findOneAndDelete( filter, options ): Elimina un solo
 documento según el filtro y los criterios de clasificación.
  Algunas de las options pueden ser
- sort: para establecer orden para el filtro
- projection: para elegir campos de salida.
  */

/**USUARIOS Y PERMISOS */
/**
 Creacion de usuario con permisos y su eliminacion
 use admin
 db.createUser({"user": "root", "pwd":"rootpwd", "roles": ["root"]})
    user: nombre de usuario
    pwd: contraseña para el usuario
    roles: arreglo de objetos. Sirve si el usuario tendra
          acceso a multiples bases de datos, estableciendo 
          permisos para cada acceso
 db.dropUser("root") (borrar)

 Es posible crear usuarios y asignarles accesos mediante roles
 Usuario lector: Lectura de base de datos
 Usuario escritor: acceso a lectura y escritura de la base
                  de datos

  db.createUser(
    {
      user: "lector",
      pwd: "12345",
      roles: [
        { role: "read", db: "blog" } 
      ]
    }
  )

  La propiedad db es donde se  indica a qué base de datos se
   le asignará dicho rol

    db.createUser(
    {
      user: "escritor",
      pwd: "12345",
      roles: [
        { role: "readWrite", db: "blog" } 
      ]
    }
  )

  - Para poder ingresar al shell de mongo con el usuario
   usaremos los parámetros -u y -p.
   mongo -u lector -p12345
  - Verificamos si podemos leer los posts
   use blog
   db.blog.find()
  - Ahora intentaremos insertar un nuevo documento que nos
  deberia lanzar un error

  -Para el usuario escritor, primero debemos salir del shell 
  y volver a loguearnos:
  mongo -u escritor -p 12345 --authenticationDatabase blog

  Para estas pruebas, es importante ejecutar el servidor en 
  modo autenticación: usar el comando mongod --auth
 */