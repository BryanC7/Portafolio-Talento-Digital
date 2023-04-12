import { Router } from "express"
import passport from "passport"
import bodyParser from "body-parser"
import flash from 'express-flash'
import cookieParser from "cookie-parser"
import session from "express-session"
import { Strategy } from "passport-local"

import usuarios from "../models/usuarios.js"

export const router = Router()

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

passport.use(new Strategy(function(username, password, done){
    if(username === 'correo@correo.com' && password === '1234') {
        return done(null, {id: 1, name: 'Pablo'})
    }
    done(null, false)
}))

passport.serializeUser(function(user, done) {
    done(null, user.id)
})

passport.deserializeUser(function(id, done) {
    done(null, {id})
})

router.get('/index', (req, res) => res.render('index'))

router.get('/templates', (req, res, next) => {
    if(req.isAuthenticated()) return next()
    res.redirect('/index')
}, (req, res) => {
    res.render('templates')
})
router.get('/pay',(req, res, next) => {

}, (req, res) => {
    res.render('pay')
})

router.get('/contact', (req, res) => res.render('contact'))
router.get('/login', (req, res) => res.render('login'))
router.get('/register', (req, res) => res.render('register'))

router.get('/clientView', (req, res, next) => {
    next()
}, (req, res) => {
    res.render('clientView')
})

router.get('/adminView', (req, res, next) => {
    next()
}, (req, res) => {
    res.render('adminView')
})

router.post('/login-user', passport.authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/login'
}))

router.post('/register-user', (req, res) => {
    const name = req.body.name
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password
    
    try {
        usuarios.create({
            nombre: name,
            apellido: lastName,
            email,
            password
        })

        console.log('El usuario se ha registrado correctamente')
    } catch (error) {
        console.log('El usuario no se pudo registrar', error)
    }
})

export default router