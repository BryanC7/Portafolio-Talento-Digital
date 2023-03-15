const express = require('express')
const app = express()
const hbs = require('hbs')

app.set('view engine', 'hbs')
app.set('views', './views')
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/css', { type: 'text/css' }))
app.use('/css', express.static(__dirname + '/public/css'))

hbs.registerPartials(__dirname + '/views/partials')

app.listen(3000)

app.get('/index',(req, res)=>{
    res.render('index')
})

app.get('/templates',(req, res)=>{
    res.render('templates')
})

app.get('/contact',(req, res)=>{
    res.render('contact')
})