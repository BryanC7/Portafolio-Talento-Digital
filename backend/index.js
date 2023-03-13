const express = require("express");
const app = express()
const hbs = require("hbs")
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static("public"))
hbs.registerPartials(__dirname+"/views/partials")

app.listen(3000)

app.get("/",(req, res)=>{
    res.render("index")
})

app.get("/templates",(req, res)=>{
    res.render("templates")
})