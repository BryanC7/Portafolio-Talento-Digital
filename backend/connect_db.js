import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('digitalizate_db', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    }
})