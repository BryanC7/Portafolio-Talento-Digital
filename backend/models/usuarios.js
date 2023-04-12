'use strict'

const {Model} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class usuarios extends Model {
        static associate(models) {
            usuarios.belongsTo(models.pedidos)
        }
    }
    
    usuarios.init({
        id_usuario: DataTypes.INTEGER,
        nombre: DataTypes.STRING,
        apellido: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, 
    {
        sequelize,
        modelName: 'usuarios',
    }
)
  return usuarios
}