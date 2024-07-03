/***testeo de funcionalidades */
/**
 Los test son una parte fundamental del desarrollo de software.
Hay diferentes prácticas como TDD, BDD y aparte diferentes 
tipos de test como test de aceptación, test de seguridad etc.
Indistintamente de las prácticas, nombres y demás, cuando 
desarrollamos una API queremos que se comporte como debe 
cuando se realizan peticiones. 
Por ejemplo si realizamos una petición a un endpoint que no 
existe debería devolvernos un 404 como código de respuesta. 
Si hacemos una petición por post para crear un recurso debe 
devolvernos un 201 y un header location con la url donde se 
puede acceder al recurso creado. Que esto funcione de esta 
forma lo debemos testear previo al funcionamiento real de la 
aplicación

TDD
TEST DRIVEN DEVELOPMENT
TDD o Desarrollo guiado por pruebas es una técnica de 
programación que se centra en el hecho de que los test los 
escribimos antes de programar la funcionalidad, siguiendo el
 ciclo falla, pasa, refactoriza [ red, green, refactor ] 
 intentando así mejorar la calidad del software que producimos

 BDD
 BEHAVIOUR DRIVEN DEVELOPMENT
 El Desarrollo Guiado por el Comportamiento (BDD) es un 
 proceso que amplía las ideas de TDD y las combina con otras 
 ideas de diseño de software y análisis de negocio para 
 proporcionar un proceso a los desarrolladores, con la 
 intención de mejorar el desarrollo del software. 
BDD se basa en TDD formalizando las mejores prácticas de TDD,
 clarificando cuáles son y haciendo énfasis en ellas.
En BDD no probamos solo unidades o clases, probamos escenarios
y el comportamiento de las clases a la hora de cumplir dichos
escenarios, los cuales pueden estar compuestos de varias clases.
Ventajas que añade BDD a las de TDD:
Nos ayuda a centrarnos en lo que es verdaderamente importante
para el ‘negocio’.
Si generamos las pruebas con un lenguaje concreto, nos pueden
servir a la hora de hacer los test de Aceptación.
A la hora de llevar a la práctica BDD es muy recomendable
usar un DSL (Domain Specific Language), es decir un lenguaje 
común sobre el que poder hacer los test y así disminuir la 
fricción a la hora de compartir los test.

 */
/**MOCHA */
/**
 Mocha es un framework de pruebas para JavaScript que se 
 ejecuta en Node y nos ayuda a tener un marco de trabajo para 
Realizar nuestras pruebas de manera ordenada. Además se 
encarga de ejecutar los casos de prueba.
Se utiliza para realizar pruebas unitarias o TDD. Sin 
embargo, no verifica el comportamiento de nuestro código. 
Entonces, para comparar los valores en una prueba, podemos 
usar el módulo assert de Node.
Entonces, usamos Mocha como creador del plan de pruebas y 
assert como implementador de las mismas.
Primero creamos nuestro proyecto Node.
Luego, instalamos el módulo Mocha como dependencia de
desarrollo (dev) ya que no lo vamos a necesitar en un entorno
de producción.
Para instalarlo usamos el comando:    npm i -D mocha
El proyecto de ejemplo será un módulo llamado TODOS que 
administra una lista de elementos. 
VER DAIPOS
 */