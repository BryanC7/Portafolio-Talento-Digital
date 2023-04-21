export class User {
    constructor() {
        this.url = 'http://localhost:4000/users'
    }

    async getUsers() {
        const response = await fetch(this.url)
        const data = await response.json()

        return data
    }

    async getClients() {
        const response = await fetch(`${this.url}/clients`)
        const data = await response.json()

        return data
    }

    async getUsersCount() {
        const response = await fetch(`${this.url}/countUsers`)
        const data = await response.json()

        return data
    }

    async addUser(user) {
        await fetch(this.url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(user)
            } 
        )
    }

    async editUser(user) {
        await fetch(this.url,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(user)
            } 
        )
    }

    async deleteUser(id) {
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