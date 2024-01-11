/**EXPRESS AVANZADO */
/**
 APLICACIONES RESTFUL
  aplicaciones que operan en forma de servidores web
  respondiendo consultas a otros sistema a traves de internet
  
  PROTOCOLO HTTP
  hiper text transfer protocol
  Un protocolo que se utiliza para intercambiar datos a traves
  de internet
  Existen clientes que realizan solicitudes de transmision
  de datos y un servidor que atiende las peticiones
  http establece varios tipos de peticiones
  Las principales son: GET PUT POST DELETE
 
  HTTP codigo de estado
  Cada mensaje de respuesta de http tiene un codigo de
  estado numerico de 3 cifras que indica el resultado
  de la peticion
  1xx mensaje informativo
  200 ok. todo salio como lo esperado
  400 bad request. la peticion no cumple con lo esperado
  404 not found. El recurso buscado no existe
  500 internal server error. Error generico del servidor
        al procesar una peticion valida
 */
/**API */
/**
 Es un conjunto de reglas y especificacionesque describen 
 la manera en que un sistema puede comunicarse con otros
 Permite la colaboracion e interpolaridad entre los sistemas
 desarrollados en distintas plataformas e incluso 
 en distintos lenguajes
 Pueden tener interfaz grafica o ser de uso interno
 tiene que estar acompañada con la documentacion detallada
 que describa su operacion y el formato de interaccion con
 la misma
 */
/**API REST */
/** Es un tipo de API que no dispone de interfaz grafica
 Se utiliza para comunicacion entre sistemas mediante el 
 protocolo HTTP
 Para que una api se considere REST debe cumplir:
 -Arquitectura cliente-servidor sin estado
    CAda  msj HTTP contiene toda la info necesaria para 
    comprender la peticion
    Ni el cliente ni el servidor necesitan recordar
    ningun estado de las comunicaciones entre msj
 -Cacheable
    Debe admitir un sistema de almacenamiente en cache
    Este almacenamiento evita repetir varias conexiones
    entre el servidor y el cliente, en casos de peticiones
    identicas
 -Operaciones comunes
    Operaciones CRUD
    Al tratarse de peticiones Http estas deben devolver
    con sus respuestas los correspondientes codigos de
    estados
 -Interfaz uniforme
    En un sistema REST cada accion debe contar con una URI
    (uniform resource identifier) 
 -Utilizacion dee hipermedios
    Cada vez que se hace una peticion al servidor y este
    devuelve una respuesta, parte de la info devuelta 
    pueden ser tambien hipervinculos de navegacion 
    asociada a otros recursos del cliente
 * 
 */
/**PETICIONES GET */
/**
 No requieren el envio de ningun dato extra en particular
 para obtener el recurso buscado
 Como respuesta a la peticion devolvera el resultado
 deseado en forma de objeto

 Pueden incorporar detalles sobre la busqueda que se
 quiere realizar
   -Estos parametros se agregan al final de la URL
   mediante el signo de interrogacion ? y enumerando pares 
   clave = valor separados por un & si hay mas de uno
   -Al recibirlos los mismos se encontraran en el objeto
   "query" dentro del objeto peticion (req)

En caso de acceder a un recurso en particular ya conocido
en necesario enviar un ID en la URL
   - se envia de la URL separado x /
   - para acceder del lado del servidor
      se antepone dos puntos /:id
      para acceder al valor del mismo se hara a traves del 
      campo params del objeto peticion (req) recibido en el
      callback
 */
/** POST */
/**
 Algunas peticiones requieren el envio de algun dato desde
 el cliente hacea el servidor
 Para acceder al cuerpo del mensaje incluido en la peticion
 lo haremos a treves del campo "body" del objeto peticion 
 recibido en el callback
 */
/**PUT */
/**
 Es posible mezclar varios mecanismos de pasaje
 de datos/parametros, en las que se desa actualizar
 un registro como uno nuevo
 Se debe proveer el identificador del registro a 
 reemplazar y el dato con el q se lo quiere sobreescribir
 */
/**DELETE */
/**
 Para eliminar un recurso debemos identificar univocamente
 sobre cual de todos los disponibke se desea realizar la
 operacion
 */

 /**URLENCODED */
 /**Para que nuestro servidor pueda interpretar en forma
  automatica msj de tipo json en formato urlencoded
  al recibirlos debemos indicarlo en forma explicita 
  agregando el siguiente codigo

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  */