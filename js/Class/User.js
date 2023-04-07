import { DataTypes, Model } from "DataTypes";
import sequelize from "../../backend/index.js";

import { Order } from "./Order.js";

export class User extends Model{}

User.init({
    idUser: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastNames: {
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
        tableName: 'users'
    }
)

User.hasMany(Order, {
    foreignKey:'idUser'
})

Order.belongsTo(User, {
    foreignKey:'idUser'
})