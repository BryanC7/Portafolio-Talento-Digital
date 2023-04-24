export class Order {
    constructor() {
        this.url = 'http://localhost:4000/orders'
    }

    // Método para buscar todos los pedidos
    async getOrders() {
        const response = await fetch(this.url)
        const data = await response.json()

        return data
    }

    // Método para buscar los pedidos de cierto usuario
    async getOrdersUser(id) {
        const response = await fetch(`${this.url}/${id}`)
        const data = await response.json()

        return data
    }

    // Método para obtener la cantidad total de pedidos
    async getOrdersCount() {
        const response = await fetch(`${this.url}/countOrders`)
        const data = await response.json()

        return data
    }

    // Método para agregar un pedido
    async addOrder(order) {
        await fetch(this.url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(order)
            } 
        )
    }

    // Método para eliminar un pedido
    async deleteOrder(id) {
        await fetch(`${this.url}/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            } 
        )
    }
}