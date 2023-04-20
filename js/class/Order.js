export class Order {
    constructor() {
        this.url = ''
    }

    addOrder = async() => {
        await fetch(this.url,)
    }

    getOrders = async() => {
        await fetch(this.url)
    }

    getCountOrders = async() => {
        await fetch(this.url)
    }
}