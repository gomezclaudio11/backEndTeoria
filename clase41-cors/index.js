/**
 CORS
 El Intercambio de Recursos de Origen Cruzado, CORS, es un 
 mecanismo para permitir o restringir los recursos solicitados
 en un servidor web dependiendo de dónde se inició la 
 solicitud HTTP.
Esto se utiliza para proteger un determinado servidor web del
 acceso de otro sitio web o dominio. Por ejemplo, solo los 
 dominios permitidos podrán acceder a los archivos alojados 
 en un servidor, como una hoja de estilo, una imagen o un
  script.
Por razones de seguridad, los navegadores restringen las 
solicitudes HTTP de origen cruzado iniciadas dentro de un 
script.

Por ejemplo, si nos encontramos en http://example.com/page1
y estamos haciendo referencia a una imagen de
http://image.com/myimage.jpg, no podremos recuperar esa 
imagen a menos que http://image.com permita compartir 
orígenes cruzados con http://example.com.
Hay un encabezado HTTP llamado origin en cada solicitud HTTP 
el cual define desde dónde se originó la solicitud de dominio.
Podemos usar la información del encabezado para restringir o
permitir que los recursos de nuestro servidor web los 
protejan

CONFIGURANDO CORS
Npm tiene un módulo llamado CORS, para poder configurar 
fácilmente las cabeceras, y decidir si permitimos o no el 
acceso a ciertas solicitudes de dominio cruzado.
En primer lugar, instalamos el módulo con el comando:
          NPM INSTALL CORS

Luego, lo requerimos en el archivo server.js. 
 
Si deseamos habilitar CORS para todas las solicitudes,
 simplemente podemos usar el middleware cors antes de 
 configurar las rutas, configurándolo a nivel global
 app.use(cors())

 Esto nos permitirá acceder a todas las rutas desde cualquier 
 lugar de la web si eso es lo que necesitamos. Entonces, las
  rutas que configuremos serán accesibles para todos los 
  dominios.

Si necesitamos que una determinada ruta sea accesible y no 
otras rutas, podemos configurar cors en una determinada ruta 
como middleware en lugar de configurarlo para toda la 
aplicación:

app.get("/", cors(), (req, res) => {
    res.json({
        message: "hello world"
    })
})

Esto permitirá que una determinada ruta sea accesible por 
cualquier dominio. Entonces, en este caso, solo la ruta “/”
será accesible para cada dominio. Las demás rutas solo serán 
accesibles para las solicitudes que se iniciaron en el mismo
dominio que la API en la que estén definidas.

*/