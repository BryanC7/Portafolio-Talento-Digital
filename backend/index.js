import express from "express"
import hbs from "hbs"
import {dirname, join} from "path"
import {fileURLToPath} from "url"
import indexRoutes from "./routes/routes.js"

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()

app.set('view engine', 'hbs')
app.set('views', '../views')

app.use(express.static(join(__dirname , '../node_modules/bootstrap/dist')))
app.use(express.static(join(__dirname , '../node_modules/jquery/dist')))
app.use(express.static(join(__dirname , '../node_modules/sweetalert2/dist')))
app.use(indexRoutes)
app.use(express.static('../public'))    
app.use('/js', express.static('../js'))

hbs.registerPartials(join(__dirname, '../views/partials'))

app.listen(3000, () => console.log('Servidor funcionando en el puerto 3000'))