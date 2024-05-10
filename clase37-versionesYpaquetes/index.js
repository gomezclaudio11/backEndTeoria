/**VERSIONES Y PAQUETES */
/**
 ADMINISTRADORES DE VERSIONES
 NVM
 node version manager
 Es un script bash simple para administrar multiples versiones
 activas de node 
 Nos permite instalar multiples versiones de node

 INSTALAR NVM EN WINDOWS
 Para instalar NMV, debemos primero descargarlo desde la
  página de versiones de NVM.
Luego, debemos asegurarnos de eliminar la versión de Node y 
npm que tengamos instaladas en nuestro sistema, previo a 
instalar nvm.
Ejecutar el instalador y seguir los pasos que indica. Aceptar
 los términos, luego elegir la ruta de instalación. 
Además, tendremos que definir el directorio de instalación de 
Node que funcionará como un enlace simbólico que apunta a la
versión actualmente utilizada de Node.
Para empezar a usarlo, en una terminal usamos el comando
                    nvm
Para visualizar todas las versiones de Node disponibles para 
instalar usamos el comando
                     nvm list available
Luego, para instalar la versión específica que queramos,
 podemos usar el comando: 
                      nvm install 14.15.4

NVM EN LINUX
VER DIAPOSITIVAS
 */
/**
 ADMINISTRADORES DE PAQUETES
Al desarrollar y usar aplicaciones node, un software comun en el 
que los desarrolladores y los usuarios genereales siempre confian
es un administrador de paquetes
el cual interactua con los repositorios de paquetes en linea
y ayuda de muchas maneras inclusive con la instalacion de 
paquetes y la administracion de dependencias

Ayuda a especificar la biblioteca como una dependencia para su
aplicacion de modo que en cualquier sistema donde este instalada
la aplicacion tambien se instalara la biblioteca para que la
aplicacion funcione correctamente

NPM
node package manager
Es un administrador de paquetes de node multiplataforma que fue
desarrollado para ayudar a los desarrolladores de js a 
compartir facilmente su codigo en forma de paquetes

YARN
No solo es un administrador de paquetes rapido seguro y 
confiable de codigo abierto, sino que tambien es un administrador
de proyectos para proyectos estables y reproducibles

Tiene un hilo que permite que la velocidad de instalavion de
paquetes sea mayor que en npm

 */
/**PACKAGE.JSON */
/**
 Se genera cuando se ejecute npm init para inicializar un 
 proyecto js/node con estos metadatos basicos
 proporcionados por los desarrolladores
 name
 version
 description
 license

 tambien soporta la propiedad scripts que puede definirse para
 ejecutar herramientas de linea de comandos que se instalan
 en el contexto local del proyeecto
 */

 /**PACKAGE-LOCK.JSON */
 /**
  Este archivo describe las versiones exactas de las dependencias
  utilizadas en un proyecto de js 
  
  */