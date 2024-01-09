/** CLASE 5
 * 
 administradores de paquetes NPM
 NODE.JS
 Es un entorno de tiempo de ejecucion de javaScript
 Incluye todo lo que se necesita para ejecutar un programa
 escrito en js x fuera del navegador
 Esta escrito en C++

 Ejecucion desde archivo js
1 crea carpeta de proyecto
2 abrir la carpeta con vsc
3 Crea el archivo main.js dentro de esa carpeta
4 Escribir codigo en main.js y guardarlo
5 abrir terminal
6 ejecuta el programa desde la terminal. node main.js
 */
//Ejercicio 
/*
// A. Generar 10000 números aleatorios en el rango de 1 a 20
const numerosAleatorios = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 20) + 1);

// B. Crear un objeto con la cuenta de ocurrencias de cada número
const conteoNumeros = numerosAleatorios.reduce((conteo, numero) => {
  conteo[numero] = (conteo[numero] || 0) + 1;
  return conteo;
}, {});
//OPERADO LOGICO OR
// operador! || operador2
// si es distinto de 0, null, undefined, NaN, false o string vacio
// el operador OR || retorna operador 1
// de lo contrario retorna operador 2

// Mostrar resultados por consola
console.log('Números aleatorios generados:', numerosAleatorios);
console.log('Conteo de ocurrencias:', conteoNumeros);
*/



//EJERCICIO
/*

const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const nombreProductos = productos.map((el) => el.nombre)

const arrayJoin = nombreProductos.join(", ")
console.log(arrayJoin);

const precioTotal =  productos.reduce ((acc, el) => acc + el.precio, 0)

console.log(precioTotal); 

const precioPromedio = precioTotal / productos.length 
 console.log(precioPromedio);

 const productoMenorPrecio = productos.reduce((minProducto, producto) => (producto.precio < minProducto.precio ? producto : minProducto), productos[0])
// es una simplificacion de la estructura if else
// sintaxis   condicion ? caso1 : caso2
 console.log(productoMenorPrecio);

 const productoMayorPrecio = productos.reduce((mayProducto, producto) => (producto.precio > mayProducto.precio ? producto : mayProducto), productos[0])

 console.log(productoMayorPrecio);
 */

 /**
  MODULOS NATIVOS EN NODE.JS
  Un modulo es un conjunto de funciones y objetos
  de js que las aplicaciones externas pueden usar

  ADMINISTRADORES DE PAQUETES
  Los package managers sirven para no tener que descargar e
  instalar y mantener las dependencias de un proyecto a mano
  Facilitan la descarga e instalacion de las librerias
  que utiliza el proyecto

  NPM
  nodejs package manager
  Las dependencias pueden instalarse de forma global o local
  Es mejor la instalacion local de dependencias para 
  poder tener multiples proyectos usando distintas versiones
  de una misma libreria sin generar problemas de compatibilidad
  al actualizar a una versin q no sea retrocompatible con
  las anteriores

  ARCHIVO PACKAGE.JSON
  Es un archivo de configuracion en formato json
  que es parte de un proyecto node.js
  se crea a traves de npm init
  npm install para instalar dependencias
  dependencia del entorno de  desarrollo le agregamos -D
  npm install -D <algun modulo>

  versionado => Las librerias de npm siguen un estandar de 
        VERSIONADO de 3 numeros separados entre si x un 
        punto
        2.0.4
        2 major release: actualizaciones grandes
        0 minor release: actualizaciones pequeñas
        4 patches: parches que corrigen defectos
        ACTUALIZACIONES
        ~ (ALT+126) SOLO ACTUALIZA LOS PARCHES
        ^ SOLO ACTUALIZA LOS MINOR RELEASE
        * TODAS LAS ACTUALIZACIONES
  */
        const moment = require('moment');

        const fechaNacimiento = moment('1968-11-29'); // Reemplaza con tu fecha de nacimiento
        const fechaActual = moment();
        
        console.log(`Hoy es ${fechaActual.format('DD/MM/YYYY')}`);
        console.log(`Nací el ${fechaNacimiento.format('DD/MM/YYYY')}`);
        
        const añosTranscurridos = fechaActual.diff(fechaNacimiento, 'years');
        const díasTranscurridos = fechaActual.diff(fechaNacimiento, 'days');
        
        console.log(`Desde mi nacimiento han pasado ${añosTranscurridos} años.`);
        console.log(`Desde mi nacimiento han pasado ${díasTranscurridos} días.`);