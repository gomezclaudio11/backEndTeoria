/**CLASE 8 ROUTER MULTER */
/**
RUTEO EN EXPRESS
La clase router se usa para crear un nuevo objeto de 
enrutador, uqe es una instancia asilada de middleware
y rutas.
Se utiliza cuando se crea un nuevo objeto de enrutador
para manejar solicitudes
El router de express nos permite crear multiples
"mini aplicaciones" para que se pueda asignar un espacio
de nombre al api publico, autenticacion y otras rutas
en sistemas de enrutamiento separados
 */
/**SERVICIO DE ARCHIVOS ESTATICOS EN EXPRESS */
/**
 Para el servicio de archivos estaticos, como imagenes
 archivos css y archivos js, se utiliza la funcion de 
 middleware incorporada express.static
 Esta funcion recibe como parametro el nombre del 
 directorio que contiene los archivos estaticos
 app.use(express.static("public"))
 */
/**CAPAS DE MIDDLEWARE */
/**
 Las funciones de los middleware son aquellas q tienen 
 acceso al objeto de solicitud (req),  al objeto de 
 respuesta (res) y a la siguiente funcion del middleware
 de la aplicacion (next)
 FUNCIONES
 -Ejecutar cualquier codigo
 -Realizar cambios en la solicitud y los objetoos de 
 respuesta
 -finalizar el ciclo de solicitud/ respuesta
 -invocar a la siguiente funcion de middleware en la pila

 MIDDLEWARE DE NIVEL DE APLICACION
 MIDDLEWARE A NIVEL RUTA
 MIDDLEWARE A NIVEL ROUTER
 MIDDLEWARE DE MANEJO DE ERRORES
 MIDDLEWARE INCORPORADO
 MIDDLEWARE DE TERCEROS
  */
 
 /**MULTER */
/**Cuando un cliente web sube un archivo a un servidor
 gralmente lo envia a traves de un formulario y se codifica 
 como multiplart/form-data

 Multer hace mas facil manipular este multipart/form-data
 cuando tus usuarios siben archivos
 Es un middleware para express
 Actua como un ayudante al cargar archivos
 */