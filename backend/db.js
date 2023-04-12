import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('digitalizatedb', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
})

async function testConnection() {
    try {
        await sequelize.authenticate()
        await sequelize.sync({force: true})
            .then(()=>{
                console.log('Modelo de datos sincronizados')
            })
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

testConnection()