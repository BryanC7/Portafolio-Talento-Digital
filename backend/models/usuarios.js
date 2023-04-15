import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../connect_db.js'
import { pedidos } from './pedidos.js'
import { roles } from './roles.js'

export class usuarios extends Model {}

usuarios.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(40),
        allowNull: false
    }, 
    password: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    id_rol: {
        type: DataTypes.INTEGER,
        defaultValue: 2,     
        allowNull: false
    }
}, 
{
    sequelize,
    tableName: 'usuarios',
})

usuarios.hasMany(pedidos, {foreignKey:'id_usuario'})
pedidos.belongsTo(usuarios, {foreignKey:'id_usuario'})

roles.hasMany(usuarios, {foreignKey:'id_rol'})
usuarios.belongsTo(roles, {foreignKey:'id_rol'})