/**ARQUITECTURA DEL SERVIDOR: DISEÑO */
/**
 BUENAS PRACTICAS EN EL DESARROLLO DE SERVIDORES NODE
 **enfoque por capas
 **Separacion de responsabilidades
 controlador: rutas de API y endpoints
 capa de servicios: para la logisca de negocio
 capar de acceso de datos: para trabajar con la base de datos

 **Se crea una estructuras de carpetas
 src
 app.js => app entry point
 /api => api routes
 /config => config setting, env variables
 /services => business logic
 /models => database models
 /scripts => npm scripts
 /subcribers => NPM scripts
 /test => test suites

 **archivos de configuracion y variables de entornos
 A medida que la aplicacion escale, necesitamos ciertas opciones
 de configuracion global sean accesibles en todos los modulos
Siempre es una buena practica almacenar estas opciones en un
archivo separado dentro de una carpeta de configuracion 
Esta carpeta puede contener todas sus diferentes opciones de 
configuración agrupadas en archivos según su uso.
/config 
  index.js
  database.js
  modulo1.js

Las URLs de conexión a la base de datos se almacenan en 
archivos .env como variables de entorno. Así es como un 
archivo .env almacena datos en forma de pares clave-valor.
 Es un archivo secreto que no se agrega a Git.
DB_HOST=localhost
DB_USER=root
DB_PASS=my_password

Una práctica de desarrollo muy común es importar todas las
variables del .env (junto con otras opciones y configuraciones
predefinidas) en los archivos de configuración y exponerlos
como un objeto al resto de la aplicación. 
De esta manera, si es necesario hacer cambios, solo los 
realizamos en una configuración común en un lugar y eso se 
refleja en toda su aplicación.

**TESTING LOGGING Y MANEJO DE ERRORES

**COMPRESION DE CODIGO Y TAMAÑO DE ARCHIVO
GZIP es un formato de archivo sin perdidad que se utiliza para 
comprimir y descomprimir archivos para una transferencia de red
mas rapida
Debemos asegurarnos de minimizar el codigo 
html (htmlminifier)
css (cssnano)
js (uglifyjs)

**USO DE  HERRAMIENTAS DE MONITOREO DE APLICACIONES
Para comprender mejor como los usuarios interactuan con la 
aplicacion
Aca es donde entran en escena las herramientas de monitoreo
de aplicaciones (APM) como scoutapm

**MODELO MVC
Al usar la arquitectura MVC en la construcción de servidores
 web, logramos que el proceso de desarrollo sea más fácil por
  la división del servidor en los 3 componentes, separando
   responsabilidades.
Controlador: Es la parte que se encarga del procesamiento de
 la solicitud del cliente que maneja esta solicitud y devuelve
  una respuesta.
Modelo: Es responsable del dominio de datos de la aplicación.
 Los objetos de modelo son responsables de almacenar, 
 recuperar y actualizar datos de la base de datos.
Vista: es el que compila y renderiza en HTML simple. Es la 
interfaz de usuario de nuestra aplicación. Es la forma en que
 el usuario obtiene la respuesta de lo que solicitó.


**HTML ON WIRE
Hay diferentes formas de generar las vistas en un patrón MVC.
HTML on wire  genera las vistas en el backend, por ejemplo, 
con un motor de plantillas con Pug.
De esta forma, no se tiene una API REST por un lado y un 
frontend por el otro, sino que dentro de un mismo proyecto
 tenemos toda la aplicación, solo en backend, incluídas las
  vistas.
Estas vistas, son renderizadas en el controlador, como 
respuesta a las solicitudes que realiza el usuario de la 
aplicación.
Para crear una aplicación usando MVC con HTML on wire, y
Express, empezamos con la siguiente estructura principal
de carpetas en nuestro proyecto:
  src/
  --controllers/
  --models/
  --views/
  --routers/
creando una app con MVC y express (ver diapo)


**PATRON MVC DATA ON WIRE
La diferencia con HTML on wire, es que en este caso, las 
vistas se realizan por separado, en un frontend, que puede 
ser realizado por ejemplo con React.
Entonces, lo que devuelve el backend, desde el controlador,
 es un json, en lugar de un HTML.
En el backend, seguimos teniendo las rutas, modelos y 
controladores. Lo único que cambia es la forma en que llega a
 los usuarios la respuesta de sus solicitudes.


COMUNICACION ENTRE BACK Y EL FRONT
La estructura de carpetas en el backend, es similar al que
 teníamos con HTML on wire, con la diferencia que no tenemos
  la carpeta de vistas.
Los archivos de rutas y los de modelos son iguales a los que
 vimos antes.
Sin embargo, el controlador cambia en su retorno. En lugar 
de renderizar una vista, devuelve un json con la información
de la respuesta de la solicitud HTTP que realizó el usuario.

COMO UTILIZA EL FRONT LA RESPUESTA

En el frontend, debemos consumir el json que nos envía la API
 REST para poder mostrar los datos al usuario.
Para eso, podemos usar un cliente HTTP, como vimos la clase 
pasada. Por ejemplo, usamos Axios para consumir los datos del

ejemplo de comidas.
En result.data tenemos el array con los objetos de cada una
 de las comidas. Podemos con Javascript entonces, pasar esa 
 información a un HTML para mostrarla finalmente al usuario.




 */
/**
 **PATRONES DE DISEÑO
  Los patrones de diseño son una forma de estructurar el 
  código de nuestra solución, de manera que nos permita 
  obtener algún tipo de beneficio, como velocidad de 
  desarrollo más rápida, reutilización de código, etc.
Son una solución general y reutilizable para un problema común.
No es obligatorio utilizar los patrones de diseño. Solo es 
aconsejable en el caso de tener el mismo problema o similar,
 siempre teniendo en cuenta que en un caso particular puede 
 no ser aplicable.

 PATRON IIFE
 IIFE significa Expresiones de función inmediatamente 
 invocadas. Nos permite definir y llamar a una función al 
 mismo tiempo.
Debido a la forma en que funcionan los ámbitos de JavaScript,
 el uso de IIFE puede ser excelente para simular cosas como 
 propiedades privadas en clases. De hecho, este patrón en 
 particular se usa a veces como parte de los requisitos de 
 otros más complejos. 
 IMPLEMENTACION
 La plantilla para un IIFE consiste en una declaración de 
 función anónima, dentro de un conjunto de paréntesis 
 (que convierte la definición en una expresión de función, 
también conocida como una asignación) y luego un conjunto de paréntesis de llamada al final de la misma.

PATRON SINGLETON
Es un patrón bastante simple pero nos ayuda a realizar un 
seguimiento de cuántas instancias de una clase estamos 
instanciando. De hecho, nos ayuda a mantener ese número en 
uno solo, todo el tiempo. 
Básicamente, el patrón Singleton nos permite crear una 
instancia de un objeto una vez y luego usarlo cada vez que lo
 necesite, en lugar de crear uno nuevo sin tener que realizar
  un seguimiento de una referencia a este, ya sea globalmente
   o simplemente pasándolo como un dependencia en todas partes.



 */