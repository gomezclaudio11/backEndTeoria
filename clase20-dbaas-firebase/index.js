/**DATA BASE AS A SERVICE */
/**
 Cuando hablamos de base de datos como servicio nos referimos
 a la ejecucion y gestion de las bases de datos 
 optimizadas y alojadas en la infraestructura de un proveedor
 de servicios cloud

 Para gestionar la base de datos en el cloud debemos contar
 con un servicio x detras como PaaS o laaS para estar 
 seguro de tener la infraestructura necesaria

 MODALIDADES
 Modelo clasico: El cliente hace uso de la infraestructura 
 fisica del proveedor para alojar sus bases de datos

 Alojamiento gestionado: Elcliente se desentiende de cualquier
 tarea de mantenimiento y gestion avanzada de la base de datos
 que asumida el proveedor

 VENTAJAS
 Se elimina la infraestructura fisica ya que el proveedor es
 responsable del mantenimiento y disponibilidad de los 
 sistemas
 Escalabilidad Con DBaaS podemos acceder a diferentes tarifas
 basadas en el rendimiento deseado y necesidades

 MONGODB ATLAS
 Es un servicio Cloud Darabase 
 Nos permite crear y administrar nuestra MongoDB desde cualquier
 lugar y plataforma

 COMO CONFIGURAR
 pagina web mongodb atlas
 Seleccionamos START FREE y nos registramos con un correo.
  También podemos ingresar con Google.
Luego nos redireccionará a la próxima ventana donde 
continuamos haciendo click en Create cluster.
Nos redireccionará a un dashboard donde el clúster aún se 
seguirá creando, pero podemos explorar mientras se crea en 
segundo plano.
Una vez finalizada la creación realizamos lo siguiente:
CONNECT
ADD YOUR CURRENT IP ADRESS
Punto 1: MongoDB Atlas nos ofrece una seguridad de conexión
 por IP, esto quiere decir que podemos configurarlo de 2
  maneras:
Add Your Current IP Address: opción para poner nuestra IP, 
pero cada vez que cambiemos la PC tenemos que volver a 
configurar.
Add a Different IP Address: para configurar una IP que 
permita las conexiones de cualquier PC, podemos colocar la 
IP 0.0.0.0/0.

Punto 2: Configuración de usuario de acceso
CREATE DATABASE USER

LUEGO CHOOSE A CONNECTION METHOD

OPCIONES DE CONEXION
Después del paso anterior procedemos a obtener la cadena de
conexión. Nos aparecerán 3 opciones, de las cuales 
seleccionaremos una conexión mediante:
Mongo CLI
Node.js
Mongo Compass GUI

CLIENTE MONGO SHELL
Si elegimos la opción 1 obtendremos el string de conexión 
para vincular la base nube con el cliente CLI Mongo Shell:

mongo "mongodb+srv://cluster0.nfdif.mongodb.net/myFirstDatabase" --username daniel

CLIENTE NODEJS
Si elegimos la opción 2 obtendremos el string de conexión 
para vincular la base nube con Node.js:

mongodb+srv://daniel:<password>@cluster0.nfdif.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

CLIENTE MONGO COMPASS
Si elegimos la opción 3 obtendremos el string de conexión 
para vincular la base nube con el cliente 
GUI Mongo Compass:

mongodb+srv://daniel:<password>@cluster0.nfdif.mongodb.net/test

CLIENTE WEB
COLLECTIONS
TEST
 */
/**FIREBASES */
/**
  Es una plataforma para el desarrollo de aplicaciones web
  moviles 
  su producto base es la base de datos en tiempo real
  PErmite en lugar de hacer peticiones AJAX el usuario se 
  conecte a la base de datos y automaticamente envie los
  datos
  Puede ser administrado x cualquier app backend y hay multiples
  dependencias desponibles para lograr la conexion en cualquier
  plataforma
  se puede usar solo alguna de sus propiedades como:
  Cloud Storage base de datos para q usuarios puedan compartir
  ficheros e imagenes sin necesidad de hacer bases de datos
  propias q para imagenes puede ser tedioso
  Cloud functions: Nos ahorra toda la infraestructura de 
  backend
  
  FIREBASES Y NODE
  En firebases utilizaremos la opcion cloud firestore
  Es una base de datos nosql nos permite guardar los datos
  en forma de documentos y colecciones

  CONFIGURACION DEL PROYECTO NODE.JS
  Creamos un proyecto Node.js con npm init -y
Instalamos el paquete npm para trabajar con Firebase en la 
carpeta de nuestro proyecto: npm i firebase-admin
Incluimos en el proyecto el archivo JSON descargado desde el
 botón generar nueva clave privada de la configuración de 
 nuestro servidor en modo admin.
Generamos el archivo server.js y escribimos el código de
 conexión hacia la base de datos Firebase como se detalla a 
 continuación:
 pagina 48 y 49

  */