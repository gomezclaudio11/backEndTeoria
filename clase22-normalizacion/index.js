/**NORMALIZACION DE DATOS */
/**
 Es un proceso de estandarizacion y validacion de datos
 que consiste en eliminar las redundancias o inconsistencias
 completando datos mediante una seri de reglas que 
 actualizan la informacion, protegiendo su integridad y 
 favoreciendo la interpretacion para que asi sea mas facil
 de consultar y mas util para quien la gestiona
 Es util cuando un repositorio de datos es demasiado grande
 contiene redundancias 
 tiene informacion profundamente anidada y es dificil de  usar
 Reglas a seguir:
 la estructuras de datos debe ser plana
 cada entidad debe almacenarse como propiedad de objeto 
 diferente
 Las relaciones con otras entidades deben crearse basadoas en 
 identificadores (id)
*/
/**NORMALIZR */
/**
 Es un paquete que se utiliza para la definicion de esquemas
 personalizados para crear datos normalizados
 npm i normalizr 
 const blogposts ={
    "id": 1,
    "title":...
 }
 //los datos sobre el autor se almacenaranen el objeto "autores"
 const authorSchema = new schema.Entity("authors")

//los datos sobre el comentario se almacenaran en el objeto
"comentarios"
const commentSchema = new schema.Entity("comments");

//El objeto de publicacion tiene indor sobre un autor y 
muchos comentarios almacenados en una matriz
La info del autor se almacena en "autor"y la matriz de 
comentarios en "comentarios"
const postSchema = new schema.Entity("post", {
    author:authorSchema,
    comments:[commentSchema]
}) 

//crea datos normalizados a partir del objeto "blogsposts"
con esquema "postSchema" 
const normalizedBlogposts = normallize(blogposts, postSchema)
 */