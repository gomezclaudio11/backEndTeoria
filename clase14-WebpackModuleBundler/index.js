/**
 WEBPACK

 Es un empaquetador de modulos que genera un archivo
 unico con todos los modulos que necesita la 
 aplicacion para funcionar
 Permite encapsular todos los archivos js en un unico
 archivo x ej bundle.js

 Genera solo aquellos fragmentos de js que realmente
 necesita cada pagina haciendo mas rapido su carga
 */
/**
 WEBPACK Y NODE
 Existen varias formas de utilizar Webpack. 
 Trabajaremos con la versión en línea de comandos (CLI)
  que realiza una empaquetación directa:

Creamos un proyecto de Node.js con npm init -y
Instalamos Webpack y Webpack CLI
npm install webpack webpack-cli
Paso 3: Agrega un script en el archivo package.json para ejecutar Webpack.
{
  "scripts": {
    "build": "webpack --mode production"
  },
Paso 4: Ejecuta el script de construcción
npm run build
Paso 5: Ejecuta el archivo bundle generado
node dist/mensaje1.bundle.js
 */