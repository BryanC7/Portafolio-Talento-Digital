import { Sequelize } from "sequelize"
import dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize (
    process.env.NAME_DB,
    process.env.USER_DB,
    process.env.PASSWORD_DB,
    { 
        host:process.env.HOST_DB, 
        dialect:'postgres',
        define: {timestamps: false}
    }
)