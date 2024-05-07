/**CONTROL DE VERSIONES */
/**
 Es una manera de registrar los cambios realizados sobre un 
 archivo a lo largo del tiempo
 Permitiendo recuperar versiones especificas mas adelante
 
 sistema de control de versiones distribuidos
 Su idea parte de que cada desorrallor de un proyecyo tenga
 una copia local de todo el proyecto
 Al no existir un repositorio central cada desarrollador puede
 trabajar a su propio ritmo

 GIT
 Es una herramienta para llevar a cabo el control de versiones
 
 Repositorio remoto: es el lugar centralizado donde se guardan 
                    los archivos

Repositorio local: Es el lugar dentro de la computadora donde
                se guardan los archivos

working directory: copia del repositorio local (donde voy a 
    empezar a trabajar)

version: captura del repositorio en determinado momento

commit: modificaciones que le hacemos a los archivos del 
       repositorio en nuestra computadora
    
tag: Es una version a la que le damos cierta importancia

push: registrar los commits en el repositorio remoto

pull: obtener los cambios en el repositorio remoto

branch: secuencia de commits sucesivos, que conforman una
     ramificacion en la linea temporal de un proyecto
     Por convencion tenemos una llamada "master" o "main"
    
Merge: realizar una fusionentre dos branches

BRANCH
Son utilizadas para desarrollar funcionalidades aisladas unas
de otras
Rama master es la rama principal por defecto
Es la rama de produccion que se suele usar solo para lo que 
ya este listo
 Se suele tener una rama llamada dev
 En la cual se va fusionando las nuevas funcionalidades una vez
 que se desarrollan y se aprueban su correcto funcionamiento
 Es la rama de desarrollo
 para crear una nueva rama y posicionarnos sobre ella en el
 repositorio 
        git checkout -b "nombre de la rama"

Para cambiar entre ramas ya creadas
        git checkout "nombre de la rama"
Para ver el listado de todas las ramas de repositorio
        git branch

Para borrar una rama creada usamos el comando
        git branch -d <nombre de rama>

TOdos los comando anteriores se ejecutan sobre el repositorio
local
Para que la rama se cree luego en el repositorio remoto
hay que hacerle un push
     git push origin <nombre de rama>

Para actualizar el repositorio local en una rama en particular
que se pudo haber actualizado en el remoto, nos posicionamos
en la consola en el proyecto y vamos a la rama que queremos
actualizar. Ahí ejecutamos el comando:
     git pull

Una vez que terminamos la funcionalidad en una rama, debemos 
fusionarla a la rama de Dev o Master, según como estemos
 trabajando.
También, nos puede pasar que para desarrollar una 
funcionalidad necesitamos funcionalidades de otra rama que 
todavía no fue fusionada a Dev o Master, entonces debemos 
fusionarla con la nuestra.
Para hacer esto, nos paramos en la consola sobre la rama a
 la que le queremos fusionar cosas, y ejecutamos el comando
  de Merge:
     git merge <nombre rama que queremos fusionar>


 */

/**PAAS */
/**
 Plataforma como servicio es un entorno de desarrollo e 
 implementacion completo en la nube
 Se compra los recursos que necesitamos a un proveedor de 
 servicios en la nube, a los que accedemos a traves de 
 internet pero solo pagamos x el uso que hacemos de ellos
 Incluye infrestructura (sevidores almacenamiento, redes)
 tanto como middleware, herramientas de desarrollo, 
 servicios de inteligencia empresarial, sistema de 
 administracion de bases de datos
 Esta diseñado para sustentar el ciclo de vida completo
 de las aplicaciones web: compilacion, pruebas, implementacion
 administracion y actualizacion

 ESCENARIOS HABITUALES DE USO DE PAAS
 FRAMEWORK DE DESARROLLO: paas proporciona un framework que los
 desarrolladores pueden ampliar para desarrollar o personalizar
 aplicaciones basadas en la nube
 Permite a los desarrolladores crear aplicaciones usando
 componentes de software integrados

 ANALISIS O INTELIGENCIA EMPRESARIAL: Las herramientas que se
 proporcionan en paas permiten a las empresas realizar analisis
 de datos obtener cierta informacion y entonces poder predecir
 los resultados para mejorar las previsiones de la empresa

 SERVICIOS ADICIONALES: los proveedores de paas pueden ofrecer 
 otros servicios que mejores las app, como flujo de trabajo,
 directorios, seguridad y programacion.

 HEROKU / RAILWAYS
 */