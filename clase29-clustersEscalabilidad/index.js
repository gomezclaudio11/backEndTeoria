/**CLUSTER EN NODEJS */
/**
 Nos referimos al uso de subprocesos que permite aprovechar
 la capacidad del procesador del servidor donde se ejecute la
 aplicacion
 node se ejecuta en un solo proceso (single thread)
 y entonces no aprovechamos la maxima capacidad que nos puede
 brindar un proceso multicore (multiples nucleos)
 Al usar el cluster lo que hacemos es en el caso de estar 
 ejecutando sobre un servidor multicore hacer uso de todos
 los nucleos del mismo aprovechando al maximo su capacidad
node nos provee un modulo llamado cluster para hacer uso de
esto. El mismo permite crear facilmente procesos  hijos
Lo que hacemos es clonar el worker maestro y delegarle la 
carga de trabajo a cada uno de ellos de esa manera se evita
la sobrecarga a un solo nucleo del procesador
Con un metodo similar al que vimos de Fork se crea una copia
del proceso actual
En ese momento el primer proceso se convierte en maestro o 
master y la copia en un trabajador o worker

MODULO CLUSTER
Primero requerimos el módulo cluster y el http para crear el 
servidor.
En la constante numCPUs lo que hacemos es crear tantos 
workers como CPUs tengamos en el sistema.

const cluster = require("cluster")
const http = require("http")
const numCPUs = require("os").cpus().length

Es habitual hacer que el proceso master se dedique únicamente
 a gestionar a los workers, y que sean los workers los que
  hagan el “trabajo sucio”.
Entonces, si entra al if crea workers, y si va al else abre 
el servidor. Como vemos en el código.
Dentro del for, en el proceso master, creamos un worker por 
cada CPU.
Con cluster.on y el comando “exit” controlamos la salida de
 estos workers.
Como mencionamos antes, en los workers, es decir, cuando 
cluster.isMaster es falso, creamos un servidor HTTP.
Recientemente, se ha migrado el uso de isMaster a isPrimary 
para evitar la alusión a la esclavitud.

if (cluster.isMaster) {
    cosole.log(`Master ${process.pid} is running`)

    //fork workes
    for ( let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on ("exit", (work, code, signal)=> {
       console.log(`worker ${worker.process.pid} died`)       
    })
} else {
    //worker can share any tcp connection
    //in this case ir is an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end("hello world")
    }).listen(8000)
    console.log(`worker ${process.pid} started`)
}
 */

/**MODULO FOREVER */
/**
 Cuando ejecutamos un proyecto de Node en un servidor en el
  que lo tengamos desplegado, dejamos la consola “ocupada” 
  con esa aplicación. Si queremos seguir haciendo cosas o 
  arrancar otro proyecto no podemos, ya que tendríamos que 
  detener la aplicación pulsando Ctrl+C quedando la consola 
  libre nuevamente. 
Por otro lado, si el servidor se parara por un fallo, nuestra
 aplicación no se arrancaría de nuevo.
Ambos problemas se pueden resolver con el módulo Forever de
 Node

 Como ya vimos, cada vez que hacemos cambios en alguno de los
  archivos del programa, debemos parar e iniciar nuevamente 
  el servidor.
El módulo Nodemon de Node, evita esto y se reinicia de forma
 automática ante cualquier cambio en los archivos del
  programa en ejecución.
Sin embargo, Nodemon solo nos sirve en desarrollo. Cuando
 estamos en producción, no se puede hacer uso de este módulo
Esta es la ventaja de Forever, ya que este puede utilizarse 
en producción. Además, nos sirve también para reiniciar el 
servidor ante un fallo del mismo
FOREVER POR LINEA DE COMANDO
forever start <filename> [args]: inicia un nuevo proceso
forever list: lista todos los procesos activos
forever stop <PID>: detiene un proceso según su id de proceso
forever stopall: detiene todos los procesos activos
forever --help: muestra la ayuda completa
Para esto es recomendable haber instalado el módulo en forma global: 
              npm i -g forever
 */
/**MODULO PM2 */
/**
 Es un gestor de procesos (Process Manager), es decir, un
  programa que controla la ejecución de otro proceso. 
Permite chequear si el proceso se está ejecutando, reiniciar
 el servidor si este se detiene por alguna razón, gestionar
  los logs, etc. 
Lo más importante es que PM2 simplifica las aplicaciones de
 Node para ejecutarlas como cluster.
Es decir, que podemos escribir nuestra aplicación sin pensar
 en el cluster, y luego PM2 se encarga de crear un número 
 dado de worker processes para ejecutar la aplicación.
Es capaz de aguantar cantidades enormes de tráfico con un 
consumo de recursos realmente reducido y con herramientas 
que permiten realizar la monitorización de las aplicacione
s de manera remota.
La ventaja principal sobre el módulo forever es el tema del
 cluster embebido en este módulo, como mencionamos antes.

 INSTALACION
  npm i pm2 -g
Iniciar la ejecucion de forma generica con el comando
  pm2 start app.js
Con este codigo la aplicacion queda monitoreada y en ejecucion
siempre
Se puede iniciar la ejecucion en modo fork o en modo cluster

MODO FORK 
pm2 start app.js --name="serverx" --watch -- port
pm2 start app.js --name="server1" --watch -- 8081
pm2 start app.js --name="server2" --watch -- 8082

MODO CLUSTER
pm2 start app.js --name="serverx" --watch -i max -- port
pm2 start app.js --name="server3" --watch -i max -- 8083


pm2 list para listar todas las aplicaciones que se estan
ejecutando
 */