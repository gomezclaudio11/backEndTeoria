/*** ARQUITECTURA DEL SERVIDOR PERSISTENCIA */
/**
 **PATRON DAO DATA ACCESS OBJECT
 El patron arquitectonico data access object (dao) permite 
 separar la logica de acceso a datos de los bussiness 
 objects u objetos de negocios, de tal forma que el dao 
 encapsula toda la logica de acceso de datos al resto de la
 aplicacion

 Se separa por completo la logica de negocio de la logica de 
 acceder a los datos
 De esta forma el DAO proporcionara los metodos necesarios
 para insertar actualizar borrar y consultar la informacion

 La capa de negocio solo se preocupa por la logica de negocio 
 y utiliza el DAO para interactuar con la fuente de datos
 Este es simplemente un nexo entre la logica de negocio y la
 capa de persistencia (en general, base de datos)

 PASOS DEL PATRON DAO
 1.Nuestra aplicacion encapsula la informacion en un DTO
 2. El DAO toma ese DTO extrae la informacion y construye
 la logica necesaria para comunicarse la fuente de datos
 (sentencias SQL, manejo de archivos, etc)
 3. la fuente de datos recibe la informacion en el formato
 adecuado para tratarla

 PASOS DEL PATRON DAO EN SENTIDO CONTRARIO
 1. Nuestra aplicacion hace una pedido de datos al DAO
 2. El DAO realiza una peticion de datos a la fuente de datos
 3. La fuente de datos envia al DAO la informacion
 4. El DAO recopila esa informacion, la encapsula en el DTO
 y se la devuelve a nuestra logica de negocio

 DAO: data access objet representa un elemento de la capa de
 acceso a datos que oculta la fuente y los detalles tecnicos
 para recuperar los datos

 DTO: data transfer object es un objeto plano que implementa el
 patron de diseño homonimo, el cual sirve para transmitir la
 informacion entre la capa de negocio y la capa de persistencia

 **DAO y el patron abstract factory
 Como vimos el DAO noos es util cuando tenemos una sola fuente 
 de datos sin importar de que tipo sea
 Sin embargo es comun que tengamos que requerir datos de 
 diferentes fuentes y es ahi donde usamos el patron 
 ABSTRACT FACTORY
 Mediante este patron podemos definir una serie de familias de 
 clases que permiten conectarnos a las diferentes fuentes de
 datos
 ENTONCES vamos a tener un DAO x cada fuente de datos diferente
 que tengamos de modo de poder usarlo de "traductor" en cada una
 de ellas y no tener que modificar la logica de negocio si 
 alguna cambia


**PATRON DTO data transfer object
El patron DTO tiene como finalidad crear un objeto plano 
POJO(plain ol javascript object) como una serie de atributos 
puedan ser enviados o recuperados del servidor en una sola
invocacion, de tal forma que un DTO puede contener informacion
de multiples fuentes o tablas y concentrarlas en una unica
clase simple
si bien es un objeto plano tiene que cumplir algunas reglas
para poder considerar que hemos creado un DTO correctamente
implementado
- Sin logica: Dado que el objetivo de un DTO es utilizarlo 
como un objeto de transferencia entre el cliente y el servidor
es importante evitar terner operaciones de negocios o metodos
que realicen calculos sobre los datos
es x ello que solo deberiamos tener los metodos GET SET de 
los respectivos atributos del DTO
- Serealizable: Es claro que si los objetos tendran que viajar
x la red deberan de poder ser serializables
Pero no hablamos solamente de la clase en si, sino que tambien
todos los atributos que contengan el DTO deberan ser facilmente
serializables

Como vimos, los DTO son un patrón muy efectivo para transmitir
información entre un cliente y un servidor, pues nos permite
 crear estructuras de datos independientes de nuestro modelo
 de datos, lo que nos permite crear cuantas “vistas” sean
 necesarias de un conjunto de tablas u orígenes de datos. 
Además, nos permite controlar el formato, nombre y tipos de 
datos con los que transmitimos los datos para ajustarnos a un
 determinado requerimiento. 
Finalmente, si por alguna razón, el modelo de datos cambió 
el cliente no se afectará, pues seguirá recibiendo el mismo
DTO.

 */
/**
 **patron factory method
 Este patron actua como una herramienta que podemos implementar
 para limpiar un poco nuestro codigo
 Nos permite centralizar la logica de crear objetos (es decir que 
objetos crear y xq) en un solo lugar
Esto nos permite olvidarnos de esa parte y concentrarnos en 
simplemente solicitar el objeto que necesitamos y luego usarlo
Es un patron de creacion que no requiere que usemos un constructor.
pero proporciona una interfaz generica para crear objetos

 */
/**PATRON REPOSITORY
 *
 Es un patron que se utiliza para mantener una conexion debilmente
 acoplada entre el cliente y los procedimientos de almacenamiento
 de datos del servidor que ocultan toda implementacion compleja
 Esto significa que el cliente no tendra que preocuparse por
 como acceder a la base de datos agregar o eliminar elementos 
 de una coleccion
 Con este patron realizamos una correspondencia entre los datos
 provenientes de la base de datos y los modelos del dominio
 del negocio
 Un repositorio se comporta como una coleccion de datos con 
 los metodos que esperamos de ella, abstrayendonos de su
 implementacion
 Es posible definir un repositorio genérico con las operaciones
básicas, y luego mediante el mecanismo de herencia generar 
comportamientos personalizados para cada entidad según 
corresponda.
La lógica empresarial está encapsulada en funciones dentro 
del Repositorio. Si la implementación cambia alguna vez, lo 
tenemos todo en un solo lugar para cambiarlo como deseemos.

 */
/**
 **ORM OBJECT RELATIONAL MAPPING
 Es una tecnica para convertir datos entre el sistema de tipos 
 del lenguaje de programacion y la base de datos
 VA DIRIGIDO SOLAMENETE A LAS BASES DE DATOS RELACIONALES(SQL)
 Esto crea un efecto objeto base de datos virtual sobre la 
 base de datos relacional, el cual es lo que nos permite
 manipular la base de datos a traves del codigo
 Como desventaja es lento x eso nace sequelize
 SEQUELIZE
 Es un ORM basado en promesas para node
 Manejas sus objetos como promesas algo que va de la mano
 con el event loop de node
 Tiene los mismos alcanzes que mongoose y se usa para lo mismo
 pero cuando trabajamos con bases de datos relacionales

 **ODM OBJECT DOCUMENT MAPPER
 Es para bases de datos no realcionales o bases de datos 
 distributivas como MongoDb
 Mapea un modelo de objeto y una base de datos NoSQL
 MOngoDB expresa los datos que se guardaran en un formulario
 similar a JSON y los guarda como un documento.ODM es la
 funcion de asociar tal documento con un objeto en un lenguaje
 de programacion
 Mongoose es un ODM Esto significa que nos permite definir
 objetos con un esquema fuertemente tipado que se asigna a un 
 documento MongoDB
 */