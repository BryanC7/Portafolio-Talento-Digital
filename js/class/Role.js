import { roles } from "../../backend/models/roles.js"

export async function newRole(tipo){
    try {
        const rol = await roles.create({
            tipo
        })
        console.log('Nuevo rol creado')
    } catch (error) {
        console.error('No se pudo crear el nuevo rol.', error)
    }
}