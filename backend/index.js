const express = require('express')
const app = express()
const hbs = require('hbs')

app.set('view engine', 'hbs')
app.set('views', './views')
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'))
app.use(express.static(__dirname + 'public'))
hbs.registerPartials(__dirname + '/views/partials')

app.listen(3000)

app.get('/index',(req, res)=>{
    res.render('index')
})

app.get('/templates',(req, res)=>{
    res.render('templates')
})