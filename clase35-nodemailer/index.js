/**NODEMAILER */
/**
 Es un modulo para aplicaciones Node que permite el envio de 
 correos electronicos de forma sencilla

 Implementacion en un solo modulo con cero dependencias
 Gran foco en la seguridad
 Proxies para conexiones SMTP
 Compatibilidad con windows
Posibilidad de agregar archivos adjuntos a los mensajes
Entrega segura de correo electronico utilizando TLS/STARTTLS
autenticacion Sane OAuth2


ENVIAR MAILS CON SERVIDOR ETHEREAL
* Se ingresa a la pagina nodemailer
* nos dirigimos a ethereal.email (servidor SMPT sin autenticacion)
donde crearemos una cuenta de mail de testing para luego probar
el modulo nodemailer en nuestro proyecto
* clickeamos create a ethereal account
* se genera la cuenta con la que podremos abrirlo desde el 
boton "open mailbox"
* podremos ver en el mailbox entonces los mails que enviamos
desde nuestra aplicacion una vez que comencemos a usarlo

CONFIGURAR NODEMAILER
 npm i nodemailer

* configuramos los mails en el archivo index.js de nuestro
proyecto con el codigo que vemos a continuacion
* debemos configurar un transporte donde se indica el puerto
el host (ethereal en este caso) y el objeto auth
* seguimos los pasos de las diapositivas guiandonos del codigo

 */
/**ENVIAR MAILS USANDO GMAIL */
/**
 En la documentacion de nodemailer podemos ir al apartado de 
 gmail donde vamos a tener informacion de como utilizarlo

 Para que nos pueda funcionar Nodemailer con Gmail, una 
 solución propuesta es crear una contraseña alternativa 
 para usar solo en nuestra aplicación. Para generarla, 
 accedemos a está página:
  https://security.google.com/settings/security/apppasswords
 
 En el transporter, en lugar del campo host configuramos un 
 campo service como “gmail” y luego el objeto auth con el 
 user y pass generados para nuestra cuenta de Gmail.
Las opciones de envío son iguales a las del ejemplo anterior

Una vez que ejecutamos el código podemos ir a la cuenta de
 Gmail a la que le enviamos el mail y chequear que haya
 llegado correctamente.

 Podemos agregarle un archivo adjunto al mail que enviamos desde Node.
Para eso, agregamos en el objeto mailOptions la clave de attachments y 
dentro la ruta del archivo a adjuntar. 

Ejecutamos nuevamente el código con este cambio y volvemos a 
la cuenta de Gmail y vemos que llegó este segundo mail con el
 archivo que adjuntamos
 
  */