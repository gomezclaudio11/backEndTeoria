/**
 **GRAFHQL
 Es una alternativa a las api rest
 Es un lenguaje de consulta y un tiempo de ejecucion del servidor
 para las interfaces de programacion (api)
 su funcion es brindar a los clientes exactamente los datos
 que solicitan y nada mas
 los desarrolladores pueden
    consultar graphql: permite consumir datos 
    mutaciones graphql: permiten escribir o modificar datos
    en el servidor

Los desarrolladores de API utilizan graphql para crear un 
esquema que describa todos los datos posibles que los clientes
puedan consultar a traves de un servicio
un esquema de graphql esta compuesto por tipos de objetos 
que definen que clase de objetos puede solicitar y cuales son
sus campos
El desarrollador de api adjunta cada campo de un esquema a una
funcion llamada resolucion
Durante la ejecucion se llama a la resolucion para que genere
el valor
Ofrece una forma unica de unificar toda su api
las llamads a graphql se gestionan en un solo recorrido de ida
y vuelta. Los clientes obtienen lo que solicitan sin que se 
genere una sobrecarga

RESUMIENDO
GraphQL surge principalmente para solucionar problemas de REST. 
Ambas son de las formas más usadas para el diseño del 
funcionamiento de un API y la forma en que se accederá a los 
datos. 
GraphQL ofrece mayor flexibilidad gracias a sus con sus 
consultas, esquemas y solucionadores, además de un mejor 
rendimiento.
Si nuestras necesidades son implementar y usar de forma fácil 
una API conviene elegir GraphQL. El desarrollo con el mismo 
es más sencillo, por lo que podemos acortar los tiempos de 
implementación. Si usamos microservicios en el backend de la 
aplicación, REST es más recomendable para este propósito.
A pesar de ser más eficiente realizando las búsquedas y 
obteniendo los datos, podemos ver afectado el rendimiento al 
usar GraphQL si no implementamos el almacenamiento en caché 
en los casos necesarios (en REST viene integrado).
GraphQL está centrado en mejorar la capacidad de desarrollo 
de APIs y su adecuación al uso según las necesidades del 
cliente, agiliza el desarrollo y disminuye las modificaciones 
ante cambios realizados. Además, su mantenimiento es menos 
costoso que una API implementada con REST.
Siempre debemos analizar con detenimiento los requisitos de 
la aplicación, el rendimiento y otros factores para escoger 
correctamente cómo vamos a implementar nuestra API.

 */
/**
 * graphiql
GraphiQL es el entorno de desarrollo integrado (IDE) de 
GraphQL. Es un editor interactivo para construir consultas y 
explorar la GraphQL API.
Una de sus mayores ventajas es que ofrece asistencia 
contextual y proporciona mensajes de error en caso de que la 
sintaxis de la consulta sea errónea.
Está basado en JavaScript, se ejecuta en el navegador y para 
su funcionamiento solo hay que proporcionarle el endpoint de 
la API a probar.
El propósito de este GraphiQL es darle a la Comunidad GraphQL:
un servicio de idioma oficial según las especificaciones,
un servidor LSP completo y un servicio CLI para usar con IDE,
un modo de espejo codificado,
un ejemplo de cómo utilizar este ecosistema con GraphiQL,
ejemplos de cómo implementar o extender GraphiQL.
Su uso es similar al de Postman para REST, pero nos sirve 
para probar las GraphQL APIs.

 */