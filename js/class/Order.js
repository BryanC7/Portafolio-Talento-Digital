import { pedidos } from "../../backend/models/pedidos.js"

export async function newOrder(num_order, id){
    try {
        const order = await pedidos.create({
            nro_pedido: num_order,
            id_usuario: id
        })
        console.log('El pedido ha sido creado con éxito.')
    } catch (error) {
        console.error('Error al crear el nuevo pedido', error)
    }
}

export async function getTableOrders() {
    const data = await pedidos.findAll({
        raw: true
    })
   
    return data
}

export async function getOrdersCount() {
    const amount = await pedidos.count({
        col: 'nro_pedido'
    })

    return amount
}