/***PUG Y EJS */
/** pug */
/**
 PUG JS es un motor de plantillas que permite utilizar
 archivos estaticos como plantillas enviar valores 
 para reemplazar variables dentro de las mismas y transformar
 estos archivos en pag html q se envian al cliente

 1. npm i pug
 2. app.set("views", "./views")
 app.set("view engine", "pug")
 */

 /**EJS */
 /**
  Motores de visualizacion tematico
  Son plantillas de js incrustadas
  Se puede usar del lado del servidor como en el del cliente

  1.npm i ejs
  2.Configuramos ejs como el motor de visualizacion de nuestra
    aplicacion express usando
        app.set("view engine", "ejs")
  3. Creamos la carpeta views
  4. ejs enviara una vista al usuario usando res.render()

  sintaxis basica (etiquetas)
  <%= incrusta en la plantilla el valor tal cual es
  <%- incrusta en la plantilla el calor renderizado como HTML
  <% scriptlet admite instrucciones en js para declaracion
                de variables y control de flujo

Creacion de partials
Para incluirlas 
    <%- include("ralative/path/to/file"2) %>
    <%- el guion es para indicar que ejs renderice html 
    sin formato

Incorporando datos en vistas
Definimos una variable y una lista para pasar a nuestra
pagina de inicio
Renderizar una variable unica en EJS
    Para utilizaar una de las variables pasadas,
    usamos directamente el nomvre de la misma
    <%= tagline %>
Incorporando datos en parciales
    
  */