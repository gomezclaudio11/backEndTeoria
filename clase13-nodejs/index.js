/**NODE JS COMO HERRAMIENTA DE DESARROLLO */
/**
 TRANSPILADOR
 Es un tipo especial de compilador que traduce de un 
 lenguaje fuente a otro fuente, tambien de un nivel
 de abstraccion parecido
 la transpilacion es un caso particular de la compilacion
 Los transpiladores y los compiladores traducen
 codigo desde un origen hacia un destino
 La diferencia radica en la relacion entre los lenguajes 
 origen y destino de la traduccion

 El transpilador traduce codigo entre dos lenguajes que 
 estan al mismo nivel de abstraccion
 
 El compilador lo hace entre lenguajes de diferente
 nivel de abstraccion
 */

 /**BABEL */
/**
 Es un transpilador que nos permite transformar nuestro 
 codigo js de ultima generacion a JS que cualquier navegador
 o version de node.js entienda
 Funciona mediante plugins con los cuales le indicamos cuales
 le indicamos cual es la transformacion que vamos a 
 efectuar

 BABEL Y NODE
 Existe varias formas de utiliarlo
 Vamos a trabajar con la version de linea de comandos(CLI)
 que realiza una compilacion directa
 -Creamos un proyecto de node.js con npm init -y
 -Instalamos libreria babel el cliente y el plugin
  npm i @babel/core @babel/cli @babel/present-env
El primer modulo es la libreria principal
El segundo es el cliente por terminal
El tercero es el plugin de configuracion para que soporte 
todos los js de la nueva generacion
-Crear el fichero de configuracion debabel ".babelrc" y
decirle con que plugin vamos a trabajar
{
    "presets": [@babel/preset-env]
}

 */

/**TSC: TYPESCRIPT COMPILER */
/**
 Los archivos de Typescript se compilan en js mediante TSC
 Se puede instalar como paquete typescript a traves de npm
 Para transpilar los archivos typescript a js lo hacemos
 a traves de un proyecto en node.js
 -Creamos un proyecto de Node.js con npm init -y
 -Instalamos el TSC mediante npm: npm i typescript
 -Creamos un archivo index.ts con contenido en Typescript
 -Transpilamos con el comando: node_modules/.bin/tsc ./index.ts -w
 -Verificamos que en nuestra carpeta de proyecto se 
encuentre index.js
 */

/**MODULOS EN ES6 */
/**
 A oartir de ES6  node.js admite definir archivos y proyectos
 como modulos
 Los modulos permiten ser importados en forma asincronica 
 en lugar de sincronica, lo cual libera el hilo principal
 y mejora la performance de los programas
 Se debe realizar desde el archivo package.json agregando
 el siguiente par clave: valor
 "type": "module"

 Ya no se debe usar la funcion require
 ejemplos

 class MiClase()
 export default MiClase

 function f() {}
 export ( f )

 import MiClase from "./MiClase.js"
import { f } from "./libreria.js"
 */