/**JSON WEB TOKEN */
/**
 Es un metodo estandar y abierto para representar reclamaciones
 de forma segura entre 2 partes

 JWT.IO nos permite decodificar verificar y generar jwt

 Los jwt son cadenas de datos que se pueden utilizar para 
 autenticar e intercambiar informacion entre un servidor
 y un cliente

FLUJO DE FUNCIONAMIENTO
El cliente envía credenciales al servidor.
El servidor verifica las credenciales, genera un JWT y lo 
envía como respuesta.
Las solicitudes posteriores del cliente tienen un JWT en los
 headers de la solicitud.
El servidor valida el token y, si es válido, proporciona la 
respuesta solicitada.
Las solicitudes posteriores del cliente tienen un JWT en los
 headers de la solicitud.
El servidor valida el token y, si es válido, proporciona 
la respuesta solicitada.
Si no se valida el token, se niega el acceso.

 EMPEZAR A UTILIZARLO
 npm i jsonwebtoken

 const jwt = require ("jsonwebtoken")
 const PRIVATE_KEY = "myprivatekey"

 GENERAR EL TOKEN
 La función generateToken recibe como parámetro un usuario y 
 devuelve el token. En otras palabras, inicia sesión.
Se utiliza el método jwt.sign.
El tercer parámetro es el tiempo hasta que expire ese token,
 es decir, el tiempo que la sesión va a permanecer iniciada 
 como máximo.
 
 function generateToken (user) {
    const token = jwt.sign({ data: user }, PRIVATE_KEY, {
        expiresIn: "24"
    })
    return token;
 }

 RUTA DE REGISTRO
 Primero se chequea que no exista el usuario.
Si no existe, se crea un usuario nuevo, y se guarda en la BD.
Luego, si está todo bien, se genera un token, que llama a la 
función generateToken y le pasa el usuario creado como 
parámetro.

//REGISTER
app.post ("/register", (req, res) => {
    const { nombre, password, direccion } = req.body

    const yaExiste = usuarios.find( usuario => usuario.nombre == nombre)
    if(yaExiste) {
        return res.json ({ ERROR: "YA EXISTE ESTE USUARIO" })
    }

    const usuario = { nombre, password, direccion }

    usuarios.push(usuario)

    const acces_token = generateToken(usuario)

    res.json ({ acces_token })
})

//RUTA DE LOGIN
Busca el usuario en la BD. Si lo encuentra, chequea la 
contraseña.
Si coinciden las contraseñas, se genera el token, que llama a
 la función generateToken y le pasa el usuario encontrado
  como parámetro para iniciar sesión.

  //login
app.post("/login", (req, res) => {
    const { nombre, password} = req.body

    const usuario = usuarios.find( u => u.nombre == nombre && u.password == password)
    if (!usuario) {
        return res.json( { error: "credenciales invalidas" })
    }

    const access_token = generateToken (usuario)

    res.json({ access_token })
})

//MIDDLEWARE DE VERIFICACION
Este middleware verifica que exista un token, y si existe, 
trae los datos de ese usuario.
Lo usamos para autorizar ciertas rutas a ciertos usuarios.
Extrae el token desde el encabezado de la petición 
(generalmente del campo authorization, y generalmente
 precedido por la palabra ‘Bearer’ y un espacio).
Si existe, entonces utiliza jwt.verify para poder obtener los
 datos del usuario, que luego los guarda en req.user.

 function auth (req, res, next) {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status (401).json({
            error:"not authenticated"
        })
    }

    const token = authHeader.split(" ") [1];

    jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
        if(err) {
            return res.status (40).json({
                error:"not authorized"
            })
        }

        req.user = decoded.data
        next();
    })
 }
 */