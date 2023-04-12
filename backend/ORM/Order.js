import { DataTypes, Model } from "sequelize";
import sequelize from "../index.js";

export class Order extends Model{}

Order.init({
    nro_orden: {
        type: DataTypes.INTEGER,
        allowNull: false
    }},
    {
        sequelize,
        createdAt: false,
        updatedAt: false,
        tableName: 'pedidos'
    }
)