// Importaciones de dependencias
import express from "express"
import hbs from "hbs"
import {dirname, join} from "path"
import {fileURLToPath} from "url"

// Importación de la variable router
import indexRoutes from "./routes/routes.js"

// Variable dirname e inicialización de express
export const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()

// Uso de hbs para vistas 
app.set('view engine', 'hbs')
app.set('views', '../views')

// Uso de express para con las rutas de dependencias para utlizarlas en el proyecto
app.use(express.static(join(__dirname , '../node_modules/bootstrap/dist')))
app.use(express.static(join(__dirname , '../node_modules/jquery/dist')))
app.use(express.static(join(__dirname , '../node_modules/sweetalert2/dist')))
app.use(indexRoutes)
app.use(express.static('../public'))    
app.use('/js', express.static('../js'))

// Registro de parciales
hbs.registerPartials(join(__dirname, '../views/partials'))

// Levantamiento del proyecto de puerto 3000
app.listen(3000, () => console.log('Servidor funcionando en el puerto 3000'))