import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../connect_db.js'

export class pedidos extends Model {}

pedidos.init({
    id_pedido:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nro_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    } 
}, 
{
    sequelize,
    tableName: 'pedidos',
})