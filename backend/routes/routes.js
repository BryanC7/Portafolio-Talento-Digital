import { Router } from 'express'
import passport from 'passport'
import bodyParser from 'body-parser'
import flash from 'express-flash'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { Strategy } from 'passport-local'

import {newUser, getTableUser, syncTables} from '../../js/class/User.js'
import {newOrder} from '../../js/class/Order.js'

export const router = Router()
const users = await getTableUser()
let currentUser

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

passport.use(new Strategy(function(email, password, done) {
    let userFound
    if(users.filter(user => user.email === email)) {
        userFound = users.filter(user => user.email === email)[0]
    }
    
    if(userFound) {
        if(userFound.password === password) {
            return done(null, {id: userFound.id_usuario, name: userFound.nombre, lastName: userFound.apellido, email: userFound.email})
        } else {
            return done(null, false, {message: 'Contraseña incorrecta'})
        }
    } else {
        return done(null, false, {message: 'El usuario no fue encontrado'})
    }
}))

passport.serializeUser(function(user, done) {
    done(null, user)
})

passport.deserializeUser(function(user, done) {
    done(null, user)
})

router.get('/index', (req ,res) => {
    currentUser = req.session.passport
    if(!currentUser) {
        res.render('index')
    } else {
        currentUser.user.isAdmin = false
        if (currentUser.user.id_rol === 1){
            currentUser.user.isAdmin = true
        } 
        res.render('index', {'username': currentUser.user.name, 'isAdmin': currentUser.user.isAdmin})
    }
})

router.get('/contact', (req, res) => res.render('contact'))
router.get('/register', (req, res) => res.render('register'))

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

router.get('/login', (req, res) => {
    if (req.session.flash) {
        if (req.session.flash.error) {
            let msjError = req.session.flash.error[0].toString()
            res.render('login', {error:msjError})  
        }  else {
            res.render('login')
        }
    } else {
        res.render('login')
    } 
})

router.get('/clientView', (req, res, next) => {
    if(req.isAuthenticated()) return next()
    res.redirect('/index')
}, (req, res) => {
    res.render('clientView', {'user': currentUser.user})
})

router.get('/adminView', (req, res, next) => {
    next()
}, (req, res) => {
    res.render('adminView', {"usersList": users})
})

router.get('/tableUsers', (req, res, next) => {
    next()
}, (req, res) => {
    res.render('tableUsers', {"usersList": users})
})

router.get('/tableOrders', (req, res, next) => {
    next()
}, (req, res) => {
    res.render('tableOrders', {"usersList": users})
})

router.post('/login-user', passport.authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/login',
    failureFlash: true
}))

router.get('/logout', (req, res, next) => {
    req.logout(err => {
        if (err) return next(err)
        res.redirect("index")
    })  
})

router.post('/register-user', async (req, res) => {
    const name = req.body.name
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password
    
    try {
        await newUser(name, lastName, email, password)
        res.redirect('/login')
    } catch (error) {
        console.log('El usuario no se pudo registrar', error)
    }
})

export default router