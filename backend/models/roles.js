import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../connect_db.js'

export class roles extends Model {}

roles.init({
    id_rol:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.STRING(10),
        allowNull: false,
    } 
}, 
{
    sequelize,
    tableName: 'roles',
})