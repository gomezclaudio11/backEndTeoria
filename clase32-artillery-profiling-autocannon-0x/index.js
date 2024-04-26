/**ARTILLERY */
/**
 Es una dependencia de node para realizar test de carga a
 servidores
 Cuenta con un conjunto de herramientas para test de performance
 que se usa para enviar aplicaciones escalables que se 
 mantengan eficaces y resistentes bajo cargas elevadas
 2 tipos de pruebas de rendimientos
 *Pruebas que cargan un sistema o sea pruebas de carga de 
 stres
 *Pruebas que verifican que un sistema funciona como se esperaba
 es decir pruebas funcionales continuas

 npm i -g artillery
** ver diapositivas para ejemplo

 */

 /**PROFILING */
 /**
  Es el analisis de rendimiento 
  Es la investigacion del comportamiento de un programa usando
  informacion reunida desde el analisis dinamico del mismo
  El objetivo es averiguar el tiempo dedicado a la ejecucion
  de diferentes partes del programa para detectar los puntos
  problematicos y las areas donde sea posible llevar a cabo
  una optimizacion del rendimiento, ya sea en velocidad o en
  consumo de recursos

  Un profiler puede proporcionar distintas salidas como una
  taza de ejecucion o un resumen estadistico de los eventos
  observados

  Cualquier navegador moderno, como Google Chrome, tiene un
   built-in profiler integrado en DevTools, que registra toda
la información sobre las funciones y cuánto tiempo lleva 
ejecutarlas en un archivo de registro.
Luego, el navegador analiza este archivo de log, brindándonos
 información legible sobre lo que está sucediendo, para que 
 podamos entenderlo y encontrar cuellos de botella.
Node también tiene un built-in profiler pero con una 
diferencia: este no analiza archivos de log como los 
navegadores, sino que simplemente recopila toda la información
en estos archivos de log.
Significa que necesita tener alguna herramienta separada que
pueda comprender este archivo de log y proporcionarnos la 
información de forma legible.
  */

/**CURL */
/**
 Es una herramientas de linea de comandos y libreria para 
 transferir datos con URL
 Se usa en lineas de comando o scripts para transferir datos
  */

 /**NODE BUILT-IN PROFILER */
 /**
  Las mayorias de las veces es masa facil usar el profiler
  que ya tiene Node, en lugar de usar otra herramienta
  **ver diapositiva para proceso

  
  */

  /**AUTOCANNON Y 0X */
  /**
   Autocannon es una dependencia de node similar a artillery
que nos ayuda a relizar los test de carga
Es una herramienta de evaluacion comparativa http / 1.1

0x es una dependenci que perfila y genera un grafico de flama
interactivo para un proceso node en un solo comando
En este caso vamos a hacer los test de carga x codigo
en lugar de x consolo como hicimos con artillery

   */