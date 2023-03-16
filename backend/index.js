const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path')

app.set('view engine', 'hbs')
app.set('views', './views')


app.use(express.static(path.join(__dirname , '../node_modules/bootstrap/dist')))
app.use(express.static(path.join(__dirname , '../node_modules/jquery/dist')))

app.use(express.static('../public'))    
app.use('/js', express.static('../js'))

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