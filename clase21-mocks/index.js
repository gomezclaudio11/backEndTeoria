/**TRABAJOS CON DATOS MOCKS */
/**
 TDD
 test driven development
 desarrollo dirigido por test
 Es una practica de programacion que consiste en escribir 
 primero las pruebas 
 despues escribir el codigo fuente que pase la prueba 
 satisfactoriamente
 y por ultimo refactorizar el codigo escrito
 Con estas practicas se consigue un codigo mas robusto seguro
 y mantenible y una mayor rapidez en el desarrollo

 MOCKS
 api: interface de programacion de aplicaciones 
    Es un conjunto de definiciones y protocolos que se utilizan
    para desarrollar e integrar ek siftware de las aplicacaiones
    Se consideran como contratos con documentacion que
    representa un acuerdo entre las partes, si una de las partes
    envia una solicitud remota con cierta estructura la MISMA 
    determinara la rta del software de la otra parte
 
 MOCK MOCKING
 Es la tecnica utilizada para simular objetos en memoria
 con la finalidad de poder ejecutar pruebas unitarias
 Los mocks son objetos preprogramados con expectativas que
 forman una especificacion de la llamadas que se espera recibir
 Se pueden servir desde un servidor web a traves de una 
 mock api
 UTILIZANDO LOS MOCKS EN TDD
 Al trabajar con TDD nos encontramos con la dependencia de 
 iertos elementos que pueden estar fuera de contexto con el 
 sistema que queremos probar.
Algunas dependencias pueden traer efectos colaterales sobre
 el resultado de las pruebas, lo que se traduce en futuros
  errores. Incluso pueden no estar (todavía) implementadas, 
  al estar el sistema en una fase temprana de desarrollo.
Para resolver este problema, reemplazamos las dependencias 
por los mocks. Así se devolverán los resultados esperados 
para hacer las peticiones a dichas dependencias, sin realizar
 ninguna operación real o compleja.
Nos podemos valer de un servidor de mocks que imita el 
comportamiento de nuestro servidor real, devolviendo datos de
 prueba o datos esperados tras las peticiones que queremos
  poner a prueba.

  MOCK Y API
  Los mocks de API son una herramienta muy potente que
   permite desarrollar y probar el front-end como un 
   componente independiente del back-end, facilitando y 
   reduciendo tiempos de desarrollo, y aumentando la 
   productividad del equipo.
Un mock del servidor es sumamente útil para el equipo de 
desarrolladores que trabaja en la interfaz del usuario, ya 
que responde preguntas triviales y permite avanzar 
notablemente sin depender del desarrollo del backend 
De esta manera se evita tener que esperar a que el servidor 
esté terminado para poder empezar a desarrollar el frontend. 

  */
 /**FACKER JS */
 /**
  Es una libreria de js que nos permite generar varios tipos
  de datos aleatorios cono nombres email direccion
  se puede utilizar dentro de node.js para generar un 
  mocking de datos para ser servidos desde un proyecto
  implementado con express
  npm i faker
  https://marak.github.io/faker.js/
  */