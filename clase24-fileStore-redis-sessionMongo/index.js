/**SESSION MEMORYSTORE SESSION FILESTORE */
/**
 MEMORYSTORE
 cuando nos manejamos con session-memory de forma preterminada
 estaremos utilizando el almacenamiento de memori: el
 memoryStore
 Al reiniciar el servidor estos datos se borran
 de modo que no tienen persistencia
 Por eso memorystore solo esta disponible en desarrollo
 y nunca en produccion
 Para superar esta limitacion se usa Session filestore

 SESSION FILESTORE
 se utiliza igual que memoryStore con la diferencia de q se 
 crea una carpeta de archivos en donde se almacenan los datos 
 de session
 Estos tendran persistencia ya que quedaran guardados en el 
 sservidor
-primero se instala express-session
  npm i express-session --save

-luego session-file-store
 npm i session-file-store --save

 -luego lo requerimos
 const FileStore = require("session-file-store")(session)

 -Se incluye sessin como middleware a nivel aplicacion
 pero se agrega la clave store en el objeto
 el path especificado es la ubicacion y el nombre de la 
 carpeta que se crea

 app.use(cookieParse())
 app.use(session({
    store: new FileStore({ path: "../sessions", ttl:300, retries: 0})
    secret: "secreto",
    resave: true,
    saveUninitialized: true
}))

 */
/**SESSION REDIS REDISLAB */
/**
 Redis es un servidor de diccionarios remotos (remote 
    dictionary server)
Almacen de datos clave-valor en memoria de codigo abierto
que se puedee utilizar como base detos, cache y agente de
mensajes
se debe descargar el archivo comprimido y luego agregar
la ruta de la carpeta al PATH del sistema
Para iniciar el servidor de redis en consola:
           redis-server
Los datos de redis se almacenan en memoria del servidor por
lo que el acceso a los mismos es muy rapido
Las redis key son binarias y seguras
Esto significa que puede usar cualquier secuencia binaria 
como clave ya sea unnn string o un archivo de imagen
con el uso de los comandos SET GET configuramos y recuperamos
un valor de un string
SET KEY VALUE
Es el comando con el q se pueden setear nuevos key value
Se le puede setear un tiempo de expiracion
GET KEY VALUE
Es el comando con el que se puede leer el valor de la key
TTL KEY
Devuelve el tiempo de vida que le queda a la  key si es q
tiene seteado un timeout
devuelve -1 si la key no existe

USANDO REDIS
Además de instalar express-session, se deben instalar las 
dependencias redis y connect-redis:
        npm i redis connect-redis --save

 const redis = require("redis")
 const client = redis.createClient()
 const RedisStore = require ("connect-redis")(session)

 app.use(cookieParse())
 app.use(session({
    store: new ResdisStore({ 
        host: "localhost", 
        port: 6379,
        client: client,
        ttl:300
    })
    secret: "secreto",
    resave: true,
    saveUninitialized: true
}))

Se agrega en el app.use de session otra clave al objeto 
llamada store, similar a sessionFile.
Luego, se utiliza en las rutas y controladores de la misma 
forma que lo ya visto en sessionMemory.

REDISLAB
Es lo mismo q redis pero los datos se guardan en la nube
se crea una cuenta en la pagina oficial para poder utilizarlo

REDIS-CLI
Redis-cli es la interfaz de línea de comandos de Redis, un 
programa simple que permite enviar comandos a Redis y leer
 las respuestas enviadas por el servidor, directamente desde 
 la terminal.
Para empezar a usarlo seguir los siguientes pasos de comandos
 en consola:
  - redis-cli  para conectar el servidor local.
  - redis-cli -h host -p port -a password  
 para conectar con el servidor remoto.
 */

 /**SESSION MONGO MONGO ATLAS */
 /**
  SESSION MONGO
  Mediante el paquete de node llamado connect-mongo
  se puede utilizar la base de datos de mongoDB
  para persistir los datos almacenados en Session
  se debe instalar 
         npm i connect-mongo --save
  
const express = require ("express")
const cookiParser = require("cookie-parser")
const session = require ("express-session")

const MongoStore = require("connect-mongo")
const app = express ()
app.use(cookieParse())
app.use(session({
    store: MongoStore.create({ mongoUrl: "mongodb://localhost/sesiones"})
    secret: "secreto",
    resave: true,
    saveUninitialized: true
}))

MONGO ATLAS
Es lo mismo que session con Mongo pero la diferencia es que 
Atlas es la base de datos en la nube, por lo que allí se van
 a almacenar los datos de session. 
Se necesitan los mismos módulos que para mongo session y se 
requieren como se muestra a continuación:
const express = require ("express")
const cookiParser = require("cookie-parser")
const session = require ("express-session")

const MongoStore = require("connect-mongo")
const advanceOptions = { useNewUrlParser: true, useUnifiedTopology: true}
const app = express ()
app.use(cookieParse())
app.use(session({
    store: MongoStore.create({ 
        mongoUrl: "mongodb://localhost/sesiones",
        mongoOptions: advancedOptions
    })
    secret: "secreto",
    resave: true,
    saveUninitialized: true
}))
*/