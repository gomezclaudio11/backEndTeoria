/**
 mongoose

 Es una dependencia de js que realiza la conexion a instacia
  de mongoDB
  Define un esquema de documento
  Mongodb usa colecciones para almacenar multiples documentos
  los cuales no necesitan tener la misma estructura
  Cuando tratamos con objetos es necesario que los documentos
  sean algo parecido
  En este punto nos ayudan los esquemas y modelos de MONGOOSE
  
  MONGOOSE SCHEMA Y MODEL
  Mongoose usa un OBJETO ESQUEMA para definir una lista de 
  propiedades del documento, cada una con su propio tipo
  y caracteristica para forzar la estructura del documento
  Despues de especificar un esquema debemos definir un 
  MODELO CONSTRUCTOR para asi poder crear instancias de los
  documentos de mongoDB

Mongoose es un object dicument mapper (ODM)
Esto significa que permite definir objetos con un esquema 
fuertemente tipado que se asigna a un documento MongoDB

SCHEMATYPES
String (Cadena)
Number (Número)
Date (Fecha)
Buffer
Boolean (Booleano)
Mixed (Mixto)
ObjectId
Array (Matriz)

CONFIGURACION DEL PROYECTO
Creamos un proyecto Node.js con npm init -y
Instalamos la dependencia mongoose con npm i mongoose
Describimos nuestro modelo de datos ( Schema + Model ) 
con las validaciones necesarias.
Levantamos el motor de base de datos MongoDB.
Creamos la función de conexión mediante mongoose, con las
 opciones configuradas.
Con mongoose realizamos las operaciones CRUD hacia MongoDB: 
Read, Create, Update y Delete.
Mostramos consultas con distintos filtros de Query y con el 
uso de projection, funciones sort, limit y skip



 */