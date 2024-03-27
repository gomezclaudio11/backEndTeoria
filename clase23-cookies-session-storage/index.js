/**COOKIES */
/**
 Las cookies son archivos que podemos guardar del lado del
 cliente en el navegador del usuarios
 Se le puede configurar un tiempo de vida
 Al almacenarse del lado del cliente el espacio con el que
 se cuenta es ilimitado x lo que se recomienda elegir de forma
 adecuada lo que se vaya a guardar como cookie
 NO se debe almacenar datos sensibles en las cookies

 npm i cookie-parser --save

 Es un middleware que se requiere a nivel de aplicacion

 app.use(cookieParser())

 crear una cookie
 app.get("/setEx", (req, res) => {
    RES.COOKIE("server2", "express2", {maxAge: 30000}.send("cookie SetEX"))
 })

 leer una cookie
 app.get("/get", (req, res) => {
    res.send(req.cookies.server)
 })

 Borrar una cookie
 app.get("/clr", (req, res) => {
    res.clearCookie("server".send("cookie clear"))
 })

SIGNED COOKIES
A la cookie se le puede agregar un mecanosmo de validacion que 
consiste en adjuntar a cada cookie una version encriptada de su
contenido
Dicha encriptacion se da mediante una palabra clave o secreto
definido del lado del servidor y desconocido por los clientes

cookieParser(secret)
{signed: true}
las cookies firmadas que hayan pasado la verificacion de su 
firma ya no se encontraran en req.cookies sino que aparecera
en req.signedCookies

 */
/**SESSION MEMORY */
/**
 * session es un paquete de node el cual permite que una 
 variable sea accesible desde cualquier lugar del sitio 
 se almacena del lado del servidor
 Del lado del cliente se crea un id para poder acceder
 a es info desde el navegador
 Los datos almacenados se borran al cerrar la ventana del
 navegador
 Se utiliza principalmente para guardar los datos de 
 usuario al iniciar sesion

 npm i express-session --save
 
 */