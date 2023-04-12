import { DataTypes, Model } from "sequelize";
import sequelize from "../index.js";

import { Order } from "./Order.js";

export class User extends Model{}

User.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }},
    {
        sequelize,
        createdAt: false,
        updatedAt: false,
        tableName: 'usuarios'
    }
)

User.hasMany(Order, {
    foreignKey:'id_usuario'
})

Order.belongsTo(User, {
    foreignKey:'id_usuario'
})