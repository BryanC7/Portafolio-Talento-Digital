export class User {
    constructor() {
        this.url = ''
    }

    getUsers = async () => {
        await fetch(this.url)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    getClients = async () => {
        await fetch(this.url)
            .then(res = res.json())
            .then(data = console.log(data))
    }

    editUser = async () => {
        await fetch(this.url,)
    }

    deleteUser = async () => {
        await fetch(this.url,)
    }
}