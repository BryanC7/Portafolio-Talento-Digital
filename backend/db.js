import mysql from "mysql"

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'usuarios',
    user: 'root',
    password: '1234'
})

conexion.connect(error => {
    if(error) throw error
    else {
        console.log('Conexión existosa')
    }
})

export default conexion