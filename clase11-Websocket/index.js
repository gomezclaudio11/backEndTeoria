/**WEBSOCKET */
/**
 Es un protocolo de red basado en TCP que establece como
 debe intercambiarse datos entre las redes
 Protocolo TCP esteblece conexiones entre dos puntos finales
 de comunicacion llamados SOCKETs
 El intercambio de datos puede producirse en las dos direcciones
 Permite una comunicacion directa y en tiempo real entre una
 aplicacion web y un servidor websocket
 */
/**COMO SE ACCEDE A UNA PAGINA WEB SIN WEBSOCKET? */
/**
 La transmision de paginas web se realiza mediante la 
 conexion http. sirve para transmitir datos y hace posible
 la carga de paginas web en el navegador
 Para lograrlo el cliente envia con cada accion del usuario
 una solicitud al servidor
 Una vez enviada la solicitud el servidor puede responder
 y mostrar el contenido solicitado.
 Se trata de un rigido patron de solicitud y respuesta
 que provoca largos tiempos de espera
 */
/**EL PROTOCOLO WEBSOCKET */
/**
 Se accede a una pagina web de forma dinamica en tiempo real
 El cliente establece una conexion con el servidor
 que se confirma mediante el websocket protocol handshake
 (apreton de manos)
 El cliente envia al servidor todos los datos de identificacion
 necesarios para el intercambio de informacion
 EL canal de comunicacion queda abierto tras el handshake
 El servidor puede activarse x si mismo y poner
 toda la inffo a disposivion del cliente sin que este
 tenga que pedirselo
 Si dispone de nueva info se lo comunica al cliente sin 
 necesidad de recibir una solicitud especifica para ello
 Las notificacion push de las paginas web funcionan 
 segun este principio

 Es usado en chats de asistencia tecnica
 tickers de noticias
 actualizaciones de bolsa en directo
 servicios de mensajeria instantanea
 juegos en tiempo real
 */
/**VENTAJAS USO DE WEBSOCKET EN CHAT */
/**
 WEBSOCKET crea conexiones bidireccionales que permiten
 el intercambios de datos a ambos sentidos
 lo cual hace posible el contacto directo con el navegador
 y con ellos permite cortos periodos de carga
 */
/** WEBSOCKETS NO SUSTITUYE A http
 * ni http sustitue a websocket
 */

/**SOCKET.IO */
/**
 Es una biblioteca de js para aplicaciones web en tiempo real
 Permite la comunicacion bidireccional en tiempo real
 entre servidores y clientes web
 tiene dos partes
    Una biblioteca del lado del cliente que se ejecuta
    en el navegador
    Una biblioteca del lado del servidor para NODE.js
 */
/**CARACTERISTICAS */
/**
  Se puede usar como un contenedor para websocket aunque
  proporciona muchas mas funciones incluida la 
  transmision a multiples sockets, el almacenamiento de 
  datos asociados con cada cliente y E/s asincronias
  FLEXIBILIDAD; las conexiones se establecen incluso en 
    presencia de proxies, balanceadores de carga
    firewall, antivirus
  SOPORTE DE RECONEXION AUTOMATICA
  DETECCION DE DESCONEXION Se implementa el mecanismo de 
    heartbeat
  SOPORTE BINARIO
 */
/**IMPLEMENTACION DE SOCKET EN NODE.JS */
/**
 Permite la comunicacion bidireccional basada en eventos
 en tiempo real
 consiste en:
    Un servidor node.js
    una libreria cliente de js para el navegador o 
    un cliente node.js
    
 */
