import { sequelize } from "../../backend/connect_db.js"
import { pedidos } from "../../backend/models/pedidos.js"

export async function newOrder(num_order){
    try {
        const order = await pedidos.create({
            nro_pedido: num_order
        })
        console.log('El pedido ha sido creado con éxito.')
    } catch (error) {
        console.error('Error al crear el nuevo pedido', error)
    }
}

sequelize.sync()