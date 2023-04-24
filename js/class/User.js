export class User {
    constructor() {
        this.url = 'http://localhost:4000/users'
    }

    // Método para obtener todos los usuarios
    async getUsers() {
        const response = await fetch(this.url)
        const data = await response.json()

        return data
    }

    // Método para obtener sólo clientes
    async getClients() {
        const response = await fetch(`${this.url}/clients`)
        const data = await response.json()

        return data
    }

    // Método para traer las cantidades de clientes y administradores
    async getUsersCount() {
        const response = await fetch(`${this.url}/userscount`)
        const data = await response.json()

        return data
    }

    // Método para agregar un nuevo usuario
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

    // Método para editar un usuario
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

    // Método para eliminar un usuario
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