import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../connect_db.js'

export class pedidos extends Model {}

pedidos.init({
    nro_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false
    } 
}, 
{
    sequelize,
    tableName: 'pedidos',
})