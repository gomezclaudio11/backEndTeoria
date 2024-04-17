/**PASAJES DE PARAMETROS AL SERVIDOR */
/**
 ARGUMENTOS DE LA LINEA DE COMANDOS EN NODE
 Los argumentos de la linea de comandos son cadenas de textos
 que se utilizan para pasar info adicional a un programa
 cuando se ejecuta una aplicacion a traves del interfaz de 
 linea de comando (CLI) de un sistema operativo

 Suelen incluir info que se utiliza para establecer la
 configuracion o los calores de propiedad de una aplicacion

 PROCESS.ARGV
 La forma mas sencilla de recuperar argumentos en Node es a 
 traves del process.argv 
 Este es un objeto global que podemos usar sin importar
 bibliotecas adicionales
 Simplemente necesitamos pasar argumentos a una aplicacion
 Node.
 Se puede acceder a estos argumentos dentro de la aplicacion
 a traves del procces.argv
COMO SE USA
1- El primer elemento del process.argv, el array, siempre
 será una ruta del sistema de archivos que apunta al Node
  ejecutable.
2- El segundo elemento es el nombre del archivo JavaScript
 que se está ejecutando.
 3-el tercer elemento es el primer argumento que realmente 
 pasó el usuario

 MINIMIST
 Otra forma de recuperar argumentos de linea de comando en
 una aplicacion Node es usando el modulo minimist
 Nos permite analizar un array de strings y lo transforma en
 un objeto mas facil de usar ya que nos permite acceder a los
 elemntos mediante su nombre

 npm i minimist

 const parseArgs = require ("minimist")

 const args = parseArgs (process.argv.slice(2))
       Primero, usamos el método slice sobre el array de 
       argumentos del objeto global process: argv. En este caso,
       el método elimina todos los elementos del array 
       anteriores a partir del índice que se le pasa como
       parámetro. Como sabemos que los argumentos que pasamos
       manualmente se almacenan a partir del segundo índice, 
       pasamos como argumento un 2.
USANDO MINIMIST
console.log(parseArgs(["1","2","3"]))
//{_: [1, 2, 3]}

console.log(parseArgs(["-a","1", "-b","2", "3", "4"]))
//{_: [3, 4], a:1, b:2}

console.log(parseArgs(["-a","1","-b" "2", "-c", "-x"]))
//{_: [], a:1, b: 2, c: true, x:true}
Ante un argumento que comienza con un guión solo, crea un 
atributo cuyo nombre será la primera letra dsp del guión, y
 cuyo valor será todo lo restante hasta el próximo argumento
Si queremos usar palabras como nombres de atributos, debemos 
anteponerle un doble guión, y su valor será el argumento
siguiente. 
Si luego de un argumento guionado (simple o doble), no se 
encuentra ningún otro argumento, o el argumento siguiente 
también es guionado, el primero se interpreta como un valor 
booleano con valor true.
Si existen valores sueltos que no vienen precedidos por 
ningún argumento guionado, todos ellos se agrupan en un array
 bajo el nombre _ (guión bajo).

*/

/**YARGS */
/**
 Otro módulo que nos ayudará a analizar los argumentos de la
  línea de comandos pasados ​​a los programas de Node es el 
  módulo yargs. Inicialmente funciona de igual manera que
   Minimist, con algunas modificaciones y en su sintaxis.
    Sin embargo, esta librería posee muchísimas más
     funcionalidades.
Lo instalamos con npm (npm i yargs) y lo utilizamos de la 
siguiente manera:
    const yargs = require("yargs/yargs" (process.argv.slice(2)))
    const args = yargs.argv

Agregar valores x defecto:

    const args = yargs
    .default({
        nombre: "pepe",
        apellido: "copado"
    })
    .argv

Agregar alias

    const args = yargs
    .alias({
        n: "nombre",
        a: "apellido"
    })
    .argv

MAS FUNCIONES : https://github.com/yargs/yargs/blob/HEAD/docs/api.md


*/
/**
 VARIABLES DE ENTORNO
 Las variables de entorno son variables externasa nuestra aplicacion
 que residen en el sistema operativo o en el contenedor de 
 la aplicacion que se esta ejecutando
 Es simplemente un nombre asignado a un valor
 Nos permiten administrar la configuracion de nuestras aplica
 ciones x separado de nuestro codigo base
 Las configuracuin separadas facilitan la implementacion de 
 nuestras aplicacion en diferentes entornos (desarrollo, 
    test, produccion)
Por convencion el nombre se escribe con mayuscula y los
valores son cadena de texto, x ej PORT=8080
Son cambios independientes de los cambios del codigo
Los datos que cambian segun el entorno en el q se ejecuta
su aplicacion deben configurarse como variables de entorno
Algunos ejemplos comunes son:

Direccion y puerto http
credenciales de base de datos
ubicacion de archivos y carpetas estativos
credenciales de API´S externas

 */
/**DOTENV */
/**
Es un modulo de node que carga variables de entorno desde un 
archivo .env a process.env

El desarrollo con multiples variables de entorno se vuelve 
rapidamente dificil de mantener
Entonces utilizamos dotenv para que las variables queden
almacenadas todas juntas en el archivo .env

npm i dotenv

Luego creamos el archivo .env
para definir las variables de entorno que queremos definir
x ej
   FONDO=blanco
   FRENTE= negro

Creamos archivos config.js

require("dotenv").config()

const fondo= process.env.FONDO
const frente = process.env.FRENTE

console.log({
    fondo,
    frente
})

MULTIPLES ENTORNOS CON DOTENV
Si deseamos configurar nuestra aplicación en diferentes
 entornos, dotenv nos permite definir tantos entornos como
  necesitemos. 
Supongamos que necesitamos configurar 2 entornos básicos: 
a color (colores) y en blanco y negro (byn). Entonces 
crearemos 2 archivos nuevos colores.env y byn.env, uno para 
cada entorno, los cuales contendrán la siguiente configuración:

byn
FONDO=blanco
FRENTE=negro

colores
FONDO=verde
FRENTE=violeta

Dotenv nos permite cargar a traves del método config() y 
el objeto path, el archivo .env que necesitemos de acuerdo al
 entorno deseado.

 const path = require("path")
 const dotenv = require ("dotenv")

 dotenv.config({
    path:
        process.env.MODO == "byn"
        ? path.resolve(__direname, "byn.env")
        : path.resolve(__direname, "colores.env")
 })

const fondo= process.env.FONDO
const frente = process.env.FRENTE
 
console.log({
    fondo,
    frente
})
*/