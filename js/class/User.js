import { sequelize } from "../../backend/connect_db.js"
import { usuarios } from "../../backend/models/usuarios.js"

export async function newUser(name, lastName, email, password) {
    try {
        const user = await usuarios.create({
            nombre: name,
            apellido: lastName,
            email,
            password
        })
        console.log('El nuevo usuario ha sido creado con éxito.')
        await syncTables()
    } catch (error) {
        console.error('Error al crear el nuevo usuario', error)
    }
}

export async function getTableUser() {
    const data = await usuarios.findAll({
        raw: true
    })
   
    return data
}

export async function getClients() {
    const data = await usuarios.findAll({
        where: {
            id_rol: 2
        }
    })
   
    return data
}

export async function adminUser() {
    usuarios.update (
        {id_rol: 1},
        {where: sequelize.literal('id_usuario % 3 = 0')}
    )
}

export async function getUsersCount() {
    const amount = await usuarios.count({
        col: 'nombre'
    })

    return amount
}

export async function syncTables() {
    try {
      await sequelize.sync()
      console.log('Tablas sincronizadas correctamente.')
    } catch (error) {
      console.error('Error en la sincronización', error)
    }
}