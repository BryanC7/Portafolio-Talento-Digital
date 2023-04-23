export class Order {
    constructor() {
        this.url = 'http://localhost:4000/orders'
    }

    async getOrders() {
        const response = await fetch(this.url)
        const data = await response.json()

        return data
    }

    async getOrdersUser(id) {
        const response = await fetch(`${this.url}/${id}`)
        const data = await response.json()

        return data
    }

    async getOrdersCount() {
        const response = await fetch(`${this.url}/countOrders`)
        const data = await response.json()

        return data
    }

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

    async deleteOrder(id) {
        await fetch(`${this.url}/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            } 
        )
    }
}