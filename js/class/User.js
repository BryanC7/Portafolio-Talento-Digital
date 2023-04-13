import { sequelize } from "../../backend/connect_db.js"
import { usuarios } from "../../backend/models/usuarios.js"

export async function newUser(name, lastName, email, password){
    try {
        const user = await usuarios.create({
            nombre: name,
            apellido: lastName,
            email,
            password
        })
        console.log('El nuevo usuario ha sido creado con éxito.')
    } catch (error) {
        console.error('Error al crear el nuevo usuario', error)
    }
}

export async function getTableUser(){
    const data = await usuarios.findAll({
        raw:true
    })
   
    return data
}

sequelize.sync()