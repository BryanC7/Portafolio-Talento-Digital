import { DataTypes, Model } from "DataTypes";
import sequelize from "../../backend/index.js";

export class Order extends Model{}

Order.init({
    number_order: {
        type: DataTypes.INTEGER,
        allowNull: false
    }},
    {
        sequelize,
        createdAt: false,
        updatedAt: false,
        tableName: 'orders'
    }
)


const Pedido = sequelize.define('pedido', {
    numero: DataTypes.INTEGER,
    usuarioid: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        }
    }
})