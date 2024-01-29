/**MOTORES DE PLANTILLAS */
/**template engines */
/**
 CONCEPTO MVC - MODELO VISTA CONTROLADOR
 Este patron trata de separar los datos de su presentacion
 Separar el codigo del programador del codigo del diseñador
 web
 Las plantillas (templates) son una aproximacion mas para
 resolver este problema

 MOTORES DE PLANTILLAS
 Lee un archivo de texto (plantilla) que contiene la presentacion
 ya preparada en una leguaje pseufo HTML
 e inserta en el la informacion dinamica que le ordena
 el controlador que representa la parte que une la vista
 con la informacion
 La sintaxis depende del motor de plantillas utilizado
 los cuales suelen tener un pequeño lenguaje de script
 que permite generar codigo dinamico
 VENTAJAS
  el codigo mas organizado
  Separar al equipo en dos al trabajar interfases de
  usuario sin necesidad de desarrollar en backend
  Reutilizar secciones de codigo
 */
/**HANDLEBARS */
/**
 Es un lenguaje de plantillas simple
 Utiliza una plantilla y un objeto de entrada para generar
 HTML 

 */

 /**MOTORES DE PLANTILLAS PARA EXPRESS */
 /**creando un motor de plantillas custom para express
  1- utilizamos el metodo
    app.engine(ext, callback)
  2- app.set("views", path) especifica la carpeta de plantillas
  3- app.set("view engine") registra el motor de plantillas
  */

 /**HANDLEBARS EN EXPRESS */
 /**
  Handlebars puede funcionar de dos formas
  -desde el lado del servidor
  - desde el lado del cliente

  INSTALAR HANDLEBARS DEL LADO DEL SERVIDOR
  Para instalar handlebars del lado del servidor 
  ** npm i express-handlebars
  */