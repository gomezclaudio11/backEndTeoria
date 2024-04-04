/**AUTENTICACION Y AUTORIZACION
 * Es el proceso de identificacion de usuarios para asegurarse
 * su identidad
 Existe varios metodos. la contraseña el mas conocido
 El sistema puede validar la identidad del usuario y permitir
 el acceso a los recursos solicitados
 Uno de los usos mas comunes es para generar distintos permisos
 para el usuario comun y el administrador
 SSe utiliza el metodo mendiante middleware
 La autenticacion verifica las identidades 
 La autorizacion verifica los permisos que corresponda a cada 
 identidad
 
 METODOS DE AUTENTIFICACION
 Usuario y contraseña
 Sin contraseña(passwordless)
 Por redes sociales
 Datos biometricos
 JWT (JSON WEB TOKEN)Transmicion segura de datos entre las 
 distintas partes
 OAuth 2.0 permite que mediante una api el usuario se autentique

 */
/**PASSPORT */
/**
 Es un middleware de autenticacion de nodejs
 Cumple la funcion de autenticar solicitudes, x lo que delega 
 toda las demas funciones a la aplicacion
 Manteniendo el codigo limpio y facil de mantener
 Reeconoce los distintos metodos de login utilizados actualmente
 por lo que sus mecanismos de autenticacion se empaquetan
 como modulos individuales
 Estos mecanismos se llaman STRATEGIES
 
 STRATEGIES
 cada uno tiene un modulo distinto de nodejs para instalar
 -passport-local: para autenticacion de usuarios mendiante nombre
                de usuario y contraseña
-passport-openid: para autenticacion mediante OpenId
-passport-oauth: para autenticacion mediante API de otros 
               proveedores como de redes sociales

               */
/** PASSPORT LOCAL*/
/**
 1- Debemos instalar el modulo passport y el de passport local
     npmi passport npm i passport-local
    instalar tambien estas dependencias
    bcrypt
    express
    express-handlebars
    express-session
    mongoose

    2- requerir los modulos
    const session = require ("express-session")
    const passport = require ("passport")
    const LocalStrategy = require ("passport-local").Strategy

    3- configurar localStrategy de LOGIN
    Se define una nueva instancia de LocalStrategy y se la 
    carga mediante el método passport.use( ).
El primer parámetro es el nombre de la strategy (“login” en 
    este caso) y el segundo es una instancia de la estrategia
     que se desea usar (LocalStrategy en este caso)
LocalStrategy espera encontrar por defecto las credenciales
 de usuario en los parámetros nombre de usuario ‘username’ y 
 contraseña ‘password’ (si se definen con otros nombres, no 
    los encontrará!)

    Buscamos el usuario por su username en la base de datos 
    mediante User.findOne( ).
Utilizamos el callback de verificación done en el return para
 devolver lo que corresponda.
Si el usuario se encuentra en la base de datos y es válido se
 devuelve en el done : null (indicando que no hubo error) y 
 el usuario encontrado user.

    
    passport.use("login", new LocalStrategy(
        (username, password, done) => {
            User.findOne ( { username }, (err, user) => {
                if (err)
                return done (err);

                if (!user) {
                    console.log ("usuario no encontrado")
                    return done (null, false)
                }

                if (!isValidPassword (user, password)) {
                    console.log("contraseña invalida")
                    return done (null, false)
                }

                retuen done (null, user)
            })
        }
    ))

    La función isValidPassword es
    function isVAlidPassword (user, password) {
        return bCrypt.compareSync (password, user.password)
    }
 */
/**
 Configurar el LocalStrategy de SIGNUP
 Para crear la instancia de strategy para el registro de 
 nuevo usuario es similar al de login
 La diferencia es que primero chequeamos si ya existe o no ese
 usuario
 - si no existe creamos un usuario nuevo y lo guardamos en 
 la base de datos
 - si ya existe devolvemos un mensaje que lo informe dando error
 al registrar
 
  passport.use("signup", new LocalStrategy({
    passReqToCallback: true
  },
  (req, username, password, done) => {
    User.findOne ({ "ussername": username}, function
    (err, user) {

        if (err) {
            console.log("usuario ya existe");
            return done ( null, false)
        }

        if (user) {
            console.log("usuario ya existe");
            return done (null, false)
        }

        const newUser = {
            username: username,
            password: createHash(password),
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }

        User.create(newUser, (err, userWhithId) => {
            if (err) {
                console.log("error" + err)
                return done (err);
            };
            console.log(user)
            console.log("usuario registrado exitosamene");
            return done(null, userWhithId);
        })
    })
  })
  )

  function createHash (password) {
    return bCrypt.hashSync(
        password,
        bCrypt.genSaltSync(10),
        null);
  }
 */
/**SERIALIZAR Y DESERIALIZAR */
/**
 Para restaurar el estado de autenticacion a traves de solucitudes
 HTTP, passport necesita serializar usuarios y deserializarlos
 fuera de la sesion
 Esto se hace de modo que cada solicitud subsiguiente no 
 contenga las credenciales del usuario anterior
 Se suele implementar propornionando el ID de usuario a 
 serializar y consultando el registro de usuario x ID de la 
 base de datos al deserializar
 Los metodos que proporciona Passport para esto son
 serilizeUser y deserializeUser

 passport.serializeUser ( (user, done) => {
    done(null, user._id)
 })

 passport.deserializeUser( (id, done) => {
    User.findByID(id, done);
 })

 */

 /**INICIALIZACION, RUTAS Y CONTROLLERS */
 /**
  INICIAR PASSPORT
  Debemos inicializar con app.use( ) express y express-session
  Además, debemos inicializar passport como se muestra en el
   código.

  const app = express()

  app.user(session ({
    secret: "keybpard cat",
    cookie: {
        httpOnly: false,
        secure: false,
        maxAge: config.TIEMPO_EXPIRACION
    },
    rolling: true,
    resave: true,
    saveUninitialized: false
  }));

  app.use(passport.initialize())
  app.use(passport.session())
  */


 /**DEFINIR LAS RUTAS */
 /**
  Definimos las rutas de index, login, singup, logout y fail 
  route. En las rutas por post de login y signup, en las que 
  se procesan los datos ingresados en los formularios, 
  utilizamos como middleware el método authenticate de 
  passport, con el nombre de la LocalStrategy configurada 
  como primer parámetro, y a dónde redirigir en caso de falla
   como segundo.
   //index
   app.get("/", routes.getRoot);

   //LOGIN
   app.get("/login", routes.getLogin)
   app.post("login", passport.authenticate("login", {failureRedirect: "/faillogin"}), routes.postLogin)
   app.get("/faillogin", routes.getFaillogin);

   //SIGNUP
   app.get("/signup", routes.getSignup)
   app.post("signup", passport.authenticate("signup", {failureRedirect: "/failsignup"}), routes.postSignup)
   app.get("/failsignup", routes.getFailsignup);

   //LOGOUT
   app.get("/logout", routes.getLogout)
  
  //FAIL ROUTE
  app.get("*", routes.failRoute)
   */


  /** METODOS DEFINIDOS EN LAS RUTAS*/
  /**
   * A continuación, está el código de ejemplo para el 
   * controller de los métodos de las rutas que definimos en 
   * la diapositiva anterior.
   * Observamos que las rutas por get muestran una vista o 
   * un mensaje.
En getLogin primero verifica si ya está logueado, mediante el
 método isAuthenticated del request req que nos da passport.

 //index
   function getRoot(req, res) {
    res.send("bienvenidos")
   }

   //login
   function getLogin(req, res) {
    if (req.isAuthentucates()) {
        let user = req.user;
        console.log("useuario logueado")
        res.sender("profileUser", {user})
    }
    else{
        console.log("usuario no logueado")
        res.render("login")
    }
   }

   //SINGUP
   function getSignup (req, res) {
    res.render("signup")
   }

   //PROCESS LOGIN
   function postLogin (req, res) {
    let user = req.user;
    res.render("profileUser")
   }

   //PROCESS SIGNUP
   function postSignup (req, res) {
    let user= req.user,
    res.render("profileUser")
   }

   function getFaillogin(req, res) {
    console.log("error en login");
    res.render("login-error", {})
   }

   function getFailsignup (req, res) {
    console.log("error en signup");
    res.render("signup-error", {})
   }

   //logout
   function getLogout (req, res) {
    req.logout();
    res.render("index")
   }

   function failRoute (req, res) {
    res.status(404).render("routing-error", {})
   }

   Las rutas por post solo muestran una vista ya que el inicio
   de sesión en sí lo realiza directo passport con el 
   middleware passport.authenticate.
Para el getLogout se utiliza el método logout del request 
req que nos da passport.
   */


/**RUTAS PROTEGIDAS */
/**
 AUTORIZAR RUTAS PROTEGIDAS
 Mediante middlewares, podemos proteger distintas rutas, de
  modo que solo se pueda acceder si hay un usuario logueado.
Para esto, usamos nuevamente req.isAuthenticated( ). Si 
existe, entonces podemos continuar mediante next( ). Si no 
existe, redirigimos al login.

function checkAuthentication (req, res, next) {
    if (req.isAuthentucated()) {
        next();
    } else {
        res.redirect("/login")
    }
}

En la o las ruta/s que queremos proteger, se agrega el 
middleware que vimos en la diapositiva anterior. Queda 
entonces, como se muestra en el siguiente código.

app.get("/ruta-protegida", checkAuthentication, (req, res) => {
    let user = req. user;
    console.log (user);
    res.send("<h1>ruta ok</h1>")
})
 */