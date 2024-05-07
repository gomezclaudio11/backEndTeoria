/**TWILIO */
/**
 Es un servicio de comunicacion en la nube que permite un sin
 fin de procesos como lo  son 
 enviar y recibir sms
 enviar y recibir llamadas de voz
 enviar y recibir llamadas de video y mucho mas

 Actua como intermediario ofreciendo un webHook HTTPS 
 para que se envie una solicitud POST a la URL que queramos 
 cada vez que se reciba un msj y responder en esa misma
 solicitud

 El modulo de node twilio ayuda a escribir el codigo
 de los request http a la api de twilio

 Ingresamos en Twilio para comenzar a crear una cuenta 
 desde “Sign up”.

 Completamos los datos e iniciamos nuestro período de prueba 
 gratis. Luego, vamos al login e iniciamos sesión con el mail
  con que nos registramos.

Vemos que como prueba, Twilio nos da una cantidad de USD para
 usar para SMS y un número que es el número de salida. 
 Este es el número que el usuario verá cuando le llegue el
  mensaje, el número desde el que se envía.

Luego, vamos a verified numbers y vemos los números que están
 verificados para poder enviarles mensajes desde nuestra 
 cuenta de prueba.

 Acá podemos ingresar un número de teléfono e invitarlo a 
 colaborar con nuestra cuenta. Recibirá un código, que
  debemos ingresar aquí para confirmar la verificación. A 
  continuación ya podemos enviarle SMS desde Twilio.

Para poder enviar mensajes a Argentina, hay que configurarlo.

Vamos ahora a nuestro proyecto e instalamos Twilio como 
dependencia. npm i twilio
Luego configuramos el envío de mensajes como muestra el 
siguiente código.
Los datos de accountSid y authToken lo sacamos de la cuenta
 de Twilio que creamos



 */