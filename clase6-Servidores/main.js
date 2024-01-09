/**SERVIDORES WEB */

/**
SERVIDOR HTTP
    1- Instalar Nodemon

MODULO HTTP
    Modulo nativo de node.js
    trabaja con el protocolo http que se utiliza para
    transferir datos
    Nos sirve para crear un servidor http
    Se solicita mediante require ("http")
1- const http = requiere("http")
2- const server = http.createServer (( peticion, respuesta) => {
    respuesta.end("hola mundo")
})

la funcion callback que enviamos a createserver recibe dos
parametros que son la peticion y la respuesta

3- const connectedServer = server.listen (8080, () => {
    console.log ("servidor http escuchando en el puerto 
    ${connectedServer.address().port}")
})
 */

/**IMPLEMENTACION DE UN SERVIDOR HTTP EN EXPRESS */
/* EXPRESS.JS */
/**
 Es un framework web minimalista
 Nos permite definir, para cada tipo de peticion HTTP 
 que llegue a una determinada URL, que accion tomar,
 mediante la definicion de un callback para cada caso
 que consideremos necesario incluir en nuestra API
 
 instalacion 
 npm i express
 const express = require ("express")
 const app = express()
 const PORT = 8080
 const server = app.listen ( PORT, () => {
    console.log("Servidor http escuchando en el puerto ${server.address(.port)}")
 })
 server.on("error", error => console.log(`error en el servidor ${error}`))

 PETICIONES GET 
    req = request (peticiones)
    res = response (respuesta)
    
 app.get ("/", (req, res) => {
    res.send({mensaje: "hola"})
 })
*/