/**
CLASE 1
Front end: se lo conoce como el lado del cliente
            la parte que interactua con los usuarios
            todo lo que vemos en la pantalla
Back end: el lado del servidor 
        consiste en un servidor una aplicacion y una base de datos
        se toman los datos, se procesa la info y se envia al
        usuario
MERN STACK
mongoDB: base de datos no relacional NoSQL orientado a documentos
        de codigo abierto. Su diseño brinda alta escalabilidad y
        disponibilidad
expressJs: framework para crear servidores en NodeJS,
        nos proporciona funcionalidades con el enrutamiento
        opciones para gestionar sesiones y cookies
reactjs: libreria para desarrollar interfaces de usuarios
nodejs: entorno de ejecucion de javascript para la capa del servidor
        Es de codigo abierto, asincrino, arquitectura orientada a 
        eventos


 */
/**CLASE 2 */
/*
function mostrarLista (datos) {
    if (datos.length === 0 ) {
        console.log("lista vacia");
    } else {
        console.log(datos);
        datos.forEach((elemento, indice) => {
            console.log(`${indice + 1}. ${elemento}`);
        });
    }
}

const datos = []
mostrarLista(datos)
*/
/*
((lista) => {
    if (lista.length > 0) {
        console.log("Contenido de la lista:");
        lista.forEach((elemento, indice) => {
          console.log(`${indice + 1}. ${elemento}`);
        });
      } else {
        console.log("Lista vacía.");
      }
}), ([1, 2, 3]);
*/
/*
const crearMultiplicador = (factor) => {
    return (numero) => {
        return numero * factor
    }
}

const duplicar = crearMultiplicador(2)
const triplicar = crearMultiplicador(3)

console.log(duplicar(5));
console.log(triplicar(5));
*/
/*
class Contador {
    static contadorGlobal = 0;

    constructor (responsable) {
        this.responsable = responsable;
        this.contadorIndividual = 0;
    }

    incrementar () {
        this.contadorIndividual++;
        Contador.contadorGlobal++;
    }

    obtenerContadorIndividual () {
        return this.contadorIndividual;
    }

    obtenerContadorGlobal () {
        return Contador.contadorGlobal;
    }

    obtenerResponsable () {
        return this.responsable
    }
}

const contador1 = new Contador("Persona A");
const contador2 = new Contador("Persona b");

contador1.incrementar()
contador1.incrementar()
contador2.incrementar()
const nombreResponsables = contador2.obtenerResponsable()


console.log(contador1.obtenerContadorIndividual()); // Devuelve 2
console.log(contador2.obtenerContadorIndividual()); // Devuelve 1

console.log(contador1.obtenerContadorGlobal()); // Devuelve 3
console.log(contador2.obtenerContadorGlobal()); // Devuelve 3
console.log(nombreResponsables); 
*/
/**CLASE 3 */
/**
callback
Es una funcion que se envia como argumento a otra funcion
la intencion es qie la funcion que hace de receptora
ejecute la funcion que se le esta pasando como parametro 
siempre es el ultimo parametro
 */
/*
const operacion = (par1, par2, funcionArealizar) =>{
    return funcionArealizar  (par1, par2)
}

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const  division = (a, b) => (b !== 0 ? a / b : "no se puede dividir por 0");

console.log(operacion(7, 2, suma));
console.log(operacion(7, 2, resta));
console.log(operacion(7, 2, division));
console.log(operacion(7, 2, multiplicar));
*/

/**PROMESAS */
/*
function dividir (dividendo, divisor) {
    return new Promise ((resolve, reject) =>{
        if ( divisor == 0 ) {
            reject ("no se puede dividir x cero")
        } else {
            resolve ( dividendo / divisor)
        }
    })
}

const resultado = dividir (10, 2)
.then (resultado => {
    console.log(`resultado es ${resultado}`);
})
.catch (error => {
    console.log(`error ${error}`);
})
*/

/**SINCRONIA Y ASINCRONIA */
/**
 Ejecucion sincronica
 Ejecucion secuencial
 Retorna cuando la operacion ha sido completada en su 
 totalidad
 es una funcion bloqueante

 Ejecucion asincronica
 La finalizacion de la operacion es notificada al 
 programa principal
 El procesado de la respuesta se hara en algun momento
 futuro
 Es una funcion no bloqueante
 */
/*
 const mostrarLetras = (mensaje, fin, demora) => {
    let indice = 0;
  
    const mostrarSiguienteCaracter = () => {
      if (indice < mensaje.length) {
        console.log(mensaje[indice]);
        indice++;
        setTimeout(mostrarSiguienteCaracter, demora);
      } else {
        fin();
      }
    };
  
    mostrarSiguienteCaracter();
  };
  
  const fin = () => console.log("termine");
  
  // Realizar tres llamadas a mostrarLetras con diferentes demoras
  mostrarLetras("HOLA", fin, 250);
  mostrarLetras("HOLA", fin, 500);
  mostrarLetras("HOLA", fin, 250);
  */

  /**MODULO NATIVO FILE SYSTEM: FS */
  /**
   fs es la abreviatura de file sistem o sistema de archivos
   En node.js es posible manipular archivos a traves de fs
   (crear, leer, modificar)
   se puede usar de manera sincronica como asincronica

   const fs = require ("fs")

   Operaciones Sincronicas
   Terminan con "Sync"
   Son operaciones bloqueantes que devuelven un resultado
   readFileSync lectura de un archivo en forma sincronica
            const data = fs.readFileSync ("./test.txt", "utf-8")
            console.log(data)
   writeFileSync sobreescribir archivos
            const sobreescribir = fs.writeFileSync ("test.txt", "esto es una prueba")
   appendFileSync actualizacion de un archivo en forma
            sincronica
            const agregarContenido = fs.appendFileSync ("test.txt", "esto es un agregado")
   unlinkSync borrado
            const borrar = fs.unlinkSync ("test.txt")
   mkdirSync creacion de una carpeta

   MANEJO DE ERRORES
   try {
        const data = fs.readFileSync ("./test.txt", "utf-8")
   } catch (error) {
    console.log (error)
   }

   */
  /*
   const fs = require ("fs")
   try {
   const fyh = fs.readFileSync ("fyh.txt", "utf8") 
   console.log(fyh)
   } catch (error) {
    console.log(error);
   }
   */

/**modo asincronico */
/** fs con callbacks */
/**
 fs.readFile(ruta, encoding, callback)

 fs.readFile("ruta.txt", "utf-8", (error, contenido) => {
    if (error) {
        "HUBO UN ERROR"
    } else {
        acceder al archivo a traves de la variable contenido
        console.log (contenido)
    }
 })

 fs.writeFile (ruta, datos, callback)

 fs.writeFile("ruta.txt", "texto a sobreescribir", error => {
    if (error) {
        "HUBO UN ERROR"
    } else {
        NO HUBO ERROR
            console.log("guardado")
    }
 })

 fs.appendFile (ruta, datos, callback)

 fs.appendFile("ruta.txt", "texto a agregar", error => {
    if (error) {
        "HUBO UN ERROR"
    } else {
        NO HUBO ERROR
            console.log("guardado")
    }
 })

  fs.unlinkFile (ruta, callback)

 fs.unlikFile("ruta.txt", error => {
    if (error) {
        "HUBO UN ERROR"
    } else {
        NO HUBO ERROR
            console.log("borrado")
    }
 })
 */

 /** FS MODO ASINCRONICO VIA PROMESAS */
 /**
  En una actualizacion de este modulo se agregaron versiones
  de funciones asincronicas que en lugar de recibir callbacks
  operan mediantesproomesas con then/catch
  Posteriormente se incluyo sintaxis simplificada utilizando
  las nuevas palabras reservadas aync y await
  
  Leer un archivo fs.promises.readFile (ruta, enconding)
  
  Sobreescribir un archivo fs.promises.writeFile(ruta, datos)

  agregar contenido a un archivo fs.promises.appendFile (ruta, datos)

  renombrar un archivo fs.promises.rename (rutaVieja, rutaNueva)

   
  */