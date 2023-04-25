// Importaciones de dependencias
import { Router } from 'express'
import passport from 'passport'
import bodyParser from 'body-parser'
import flash from 'express-flash'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { Strategy } from 'passport-local'
import methodOverride from 'method-override'
import bcrypt from 'bcryptjs'

// Importaciones de clases
import { User } from '../../js/class/User.js'
import { Order } from '../../js/class/Order.js'

// Router para el uso de rutas 
const router = Router()

// Instancias de clases
const user = new User()
const order = new Order()

// Variables globales para validar y autenticar usuario activo en sesión
let userFound
let currentUser

// Uso de la variable router para la aplicación de dependencias
router.use(methodOverride("_method", { methods: ["GET", "POST"] }))
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.use(cookieParser('secretpassword'))
router.use(session({
    secret: 'secretpassword',
    resave: true,
    saveUninitialized: true
}))
router.use(flash())
router.use(passport.initialize())
router.use(passport.session())

// Uso de estrategia para el control del inicio de sesión de usuarios
passport.use(new Strategy(async function(email, password, done) {
    const users = await user.getUsers()
    if(users.filter(user => user.email === email)) {
        userFound = users.filter(user => user.email === email)[0]
    } 

    if(userFound) {
        if(bcrypt.compare(password, userFound.password)) {
            return done(null, {
                id: userFound.id_usuario, 
                name: userFound.nombre, 
                lastName: userFound.apellido, 
                email: userFound.email, 
                id_rol: userFound.id_rol
            })
        } else {
            return done(null, false, {message: 'Contraseña incorrecta'})
        }
    } else {
        return done(null, false, {message: 'El usuario no fue encontrado'})
    }
}))

// Serializadores
passport.serializeUser(function(user, done) {
    done(null, user)
})

passport.deserializeUser(function(user, done) {
    done(null, user)
})

// ---------- Rutas get hacia las diferentes vistas ---------- //

// Ruta index: Si existe un usuario activo en session se da el rol de admin al usuario con id_rol === 1
router.get('/index', (req ,res) => {
    currentUser = req.session.passport
    if(!currentUser) {
        res.render('index')
    } else {
        currentUser.user.isAdmin = false
        if (currentUser.user.id_rol === 1){
            currentUser.user.isAdmin = true
        }
        res.render('index', {
            'username': currentUser.user.name, 
            'isAdmin': currentUser.user.isAdmin
        })
    }
})

// Gets hacia vistas
router.get('/contact', (req, res) => res.render('contact'))
router.get('/register', (req, res) => res.render('register'))

// Muestra la información del usuario activo en la vista editInfo
router.get('/editInfo', (req, res, next) => {
    if(req.isAuthenticated()) return next()
    res.redirect('/index')
}, (req, res) => {
    res.render('editInfo', {
        'user': currentUser.user.name, 
        'id': userFound.id_usuario, 
        'name': userFound.nombre, 
        'lastName': userFound.apellido, 
        'email': userFound.email, 
        'password': userFound.password
    })
})

// Valida si el usuario está autenticado para acceder a la vistas
router.get('/templates', (req, res, next) => {
    if(req.isAuthenticated()) return next()
    res.redirect('/index')
}, (req, res) => {
    res.render('templates')
})

router.get('/pay',(req, res, next) => {
    if(req.isAuthenticated()) return next()
    res.redirect('/index')
}, (req, res) => {
    res.render('pay')
})

// Si la estrategia falla por no recibir ni un valor o no encuentra al usuario aqui se controla el error 
router.get('/login', async (req, res) => {
    if (req.session.flash) {
        if (req.session.flash.error) {
            let msjError = req.session.flash.error[0].toString()
            if(msjError === 'Missing credentials') {
                msjError = 'Todos los campos son requeridos'
            }
            res.render('login', {error: msjError})  
        }  else {
            res.render('login')
        }
    } else {
        await user.getUsers() 
        res.render('login')
    } 
})

// Vista de los datos cliente 
router.get('/clientView', (req, res, next) => {
    if(req.isAuthenticated()) return next()
    res.redirect('/index')
}, (req, res) => {
    res.render('clientView', {'user': currentUser.user.name})
})

// Vista administrador, control de pedidos y clientes 
router.get('/adminView', (req, res, next) => {
    if(req.isAuthenticated()) return next()
    res.redirect('/index')
}, async (req, res) => {
    const arrayAmounts = await user.getUsersCount()
    res.render('adminView', {
        'user': currentUser.user.name, 
        "usersList": await user.getClients(), 
        'adminsAmount': arrayAmounts[1].cantidad, 
        'usersAmount': arrayAmounts[0].cantidad, 
        'ordersAmount': await order.getOrdersCount()
    })
})

// Vista hacia la tabla de usuarios
router.get('/tableUsers', (req, res, next) => {
    if(req.isAuthenticated()) return next()
    res.redirect('/index')
}, async (req, res) => {
    res.render('tableUsers', {
        'user': currentUser.user.name, 
        "usersList": await user.getClients()
    })
})

// Vista hacia la tabla de pedidos
router.get('/tableOrders', (req, res, next) => {
    if(req.isAuthenticated()) return next()
    res.redirect('/index')
}, async (req, res) => {
    res.render('tableOrders', {
        'user': currentUser.user.name, 
        "orderList": await order.getOrders()
    })
})

// Vista hacia los pedidos de cierto usuario
router.get('/ordersUser/', (req, res, next) => {
    if(req.isAuthenticated()) return next()
    res.redirect('/index')
}, async (req, res) => {
    res.render('ordersUser', {
        'user': currentUser.user.name, 
        "orderList": await order.getOrdersUser(userFound.id_usuario)
    })
})

// Logout de la sesión
router.get('/logout', (req, res, next) => {
    req.logout(err => {
        if (err) return next(err)
        res.redirect("index")
    })  
})

// En caso de autenticación fallida o correcta del usuario, los respectivos redireccionamientos 
router.post('/login-user', passport.authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/login',
    failureFlash: true
}))

// Ruta encargada de leer los datos del formulario de registro para su inserción. Además valida si el correo registrado ya existe
router.post('/register-user', async (req, res) => {
    const users = await user.getUsers()
    const salt = await bcrypt.genSalt(8)
    const passwordHash = await bcrypt.hash(req.body.password, salt)

    const newUser = {
        nombre: req.body.name,
        apellido: req.body.lastName,
        email: req.body.email,
        password: passwordHash
    }

    if(await users.filter(user => user.email === newUser.email) == []) {
        res.render('register', {error: 'El correo electrónico ya se encuentra registrado'})
    } else {
        try {
            await user.addUser(newUser)
            res.send("<script>alert('Usuario registrado correctamente');window.location.href='/login'</script>")
        } catch (error) {
            console.log('El usuario no se pudo registrar', error)
        }
    }
})

// Ruta para la edición del usuario
router.post('/edit-user', async (req, res) => {
    const salt = await bcrypt.genSalt(8)
    const passwordHash = await bcrypt.hash(req.body.password, salt)

    const userEdited = {
        id: currentUser.user.id,
        nombre: req.body.name,
        apellido: req.body.lastName,
        email: req.body.email,
        password: passwordHash
    }

    try {
        await user.editUser(userEdited)
        res.send("<script>alert('Tus datos se han actualizado correctamente, no los olvides para volver a iniciar sesión');window.location.href='/index'</script>")
    } catch (error) {
        res.send("<script>alert('El usuario no se pudo editar');window.location.href='/editInfo'</script>")
        console.log(error)
    }
})

// Ruta que una vez se realiza el pago del pedido se almacena en la base de datos
router.post('/payment', async (req, res) => {
    const newOrder = {
        nro_pedido: Math.round(Math.random()*999999),
        id_usuario: currentUser.user.id
    }

    try {
        await order.addOrder(newOrder)
        res.send("<script>alert('Se ha autorizado el pago y se almacenó tu pedido');window.location.href='/index'</script>")
    } catch (error) {
        res.send("<script>alert('No se logró realizar el pedido');window.location.href='/payment'</script>")
        console.log(error)
    }
})

// Ruta para eliminar un usuario en la vista administrador
router.delete("/tableUsers/:id", async (req, res) => {
    const { id } = req.params
    try {
        await user.deleteUser(id)
        res.redirect('/tableUsers')
    } catch (error) {
        console.log('No se pudo eliminar usuario', error)
    }
})

// Ruta para eliminar un pedido en la vista administrador
router.delete("/tableOrders/:id", async (req, res) => {
    const { id } = req.params
    try {
        await order.deleteOrder(id)
        res.redirect('/tableOrders')
    } catch (error) {
        console.log('No se pudo eliminar pedido', error)
    }
})

// Ruta para que el usuario pueda eliminar sus pedidos
router.delete("/ordersUser/:id", async (req, res) => {
    const { id } = req.params
    try {
        await order.deleteOrder(id)
        res.redirect('/ordersUser')
    } catch (error) {
        console.log('No se pudo eliminar pedido', error)
    }
})

// Exportación de la variable router para su uso en archivo index.js
export default router