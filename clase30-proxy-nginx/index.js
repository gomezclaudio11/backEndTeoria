/**SERVIDOR PROXY */
/**
 Es un servidor que hace de intermediario entre las conexiones
 de un cliente y un servidor de destino
 filtrando todos los paquetes entre ambos
 Sin el proxy la conexion entre cliente y servidor de origen
 a traves de la web es directa
 Se utiliza para navegar x internet de forma mas anonima ya que
 oculta las IP sea del cliente o del servidor de origen
 X ser intermediario ofrece funcionalidades como control de 
 acceso, registro de trafico, mejora de rendimiento

 PROXY DIRECTO(FOWARD)
 Es un servidor proxy que se coloca entre el cliente y la web
 Recibe la peticion del cliente para acceder a un sitio web
 y  la transmite al servidor del sitio para que este no se
 entere de que el cliente esta haciendo la peticion
 Lo utiliza un cliente cuando quiere anonimizar su IP
 Es util para mejorar la privacidad y evitar restricciones de 
 origen geografico

 PROXY INVERSO(REVERSE)
 El servidor proxy se coloca entre la web y el servidor de
 origen
 Entonces el que se mantiene en el anonimato es el servidor
 de origen. Garantiza q ningun cliente se conecte directo
 con el y por ende mejore su seguridad
 En gral el cifrado SSL de un sitio web seguro se crea
 en el proxy (y no directamente en el servidor)
 Es util para distribuir la carga entre varios servidores web

 Ambos pueden trabajar juntos ya que no se superponen en su
 funcionamiento
 Los clientes/usuarios pueden utilizar un proxy directo
 Los servidores de origen un proxy inverso

 REVERSE PROXY EN BACKEND
 beneficios
 Balancear las cargas:Un solo servidor de origen, en una 
 página con millones de visitantes diarios, no puede manejar
todo el tráfico entrante. El proxy inverso puede recibir el
tráfico entrante antes de que llegue al servidor de origen.
 Si este está sobrecargado o cae completamente, puede 
 distribuir el tráfico a otros servidores sin afectar la 
 funcionalidad del sitio. Es el principal uso de los 
 servidores proxy inverso.

 Compresión superior: Un proxy inverso es ideal para 
 comprimir las respuestas del servidor. Esto se utiliza mucho
 ya que las respuestas del servidor ocupan mucho ancho de
 banda, por lo que es una buena práctica comprimirlas antes 
 de enviarlas al cliente.

Cifrado SSL optimizado: Cifrar y descifrar las solicitudes 
SSL/TLS para cada cliente puede ser muy difícil para el 
servidor de origen. Un proxy inverso puede hacer esta tarea 
para liberar los recursos del servidor de origen para otras 
tareas importantes, como servir contenido.

Monitoreo y registro del tráfico: Un proxy inverso captura 
cualquier petición que pase por él. Por lo tanto, podemos 
usarlos como un centro de control para monitorear y registrar
el tráfico. Incluso si utilizamos varios servidores web para
alojar todos los componentes de nuestro sitio web, el uso 
de un proxy inverso facilitará la supervisión de todos los
datos entrantes y salientes del sitio.
 
 */
/**
 **NGINX
  Nginx es un servidor web, orientado a eventos (como Node) 
que actúa como un proxy lo que nos permite redireccionar el
tráfico entrante en función del dominio de dónde vienen, 
 hacia el proceso y puerto que nos interese.
Se usa para solucionar el problema que se genera al correr 
nuestra app Node en el puerto 80, para que sea accesible 
desde una IP o dominio, y queremos utilizar el mismo puerto 
con otro proceso.

 */