import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('digitalizate_db', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate().
    then(() => {
        console.log('Connection has been established successfully.')
    }).
    catch(err => {
        console.error('Unable to connect to the database:', err)
    })

sequelize.sync()