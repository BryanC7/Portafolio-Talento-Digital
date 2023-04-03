import { Router } from "express"
import bodyParser from "body-parser"
import conexion from "../db.js"

const router = Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/index', (req, res) => res.render('index'))
router.get('/templates', (req, res) => res.render('templates'))
router.get('/contact', (req, res) => res.render('contact'))
router.get('/admin', (req, res) => res.render('admin'))

router.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    
    conexion.query('select * from usuario;',(error, results) => {
        if(error) throw error
        else {
            results.forEach(result => {
                if(email === result.email && password === result.password) {
                    res.render('index')
                } 
            })
        }  
    })
})

router.post('/register', (req, res) => {
    const name = req.body.name
    const lastNames = req.body.lastNames
    const email = req.body.email
    const password = req.body.password

    conexion.query(`insert into usuario (name, lastNames, email, password) values ('${name}', '${lastNames}', '${email}', '${password}');`,(error, results) => {
        if(error) throw error
        else {
            conexion.query('select * from usuario;',(error, results) => {
                if(error) throw error
                else {
                    console.log(results)
                }  
            })
            
        }  
    })
})

export default router