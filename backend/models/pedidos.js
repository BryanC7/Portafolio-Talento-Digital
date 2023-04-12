'use strict'
const {Model} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class pedidos extends Model {
        static associate(models) {
            pedidos.belongsTo(models.usuarios, { foreignKey: "usuario_id" })
        }
    }
    pedidos.init({
        nro_pedido: DataTypes.INTEGER
    }, 
    {
        sequelize,
        modelName: 'pedidos',
    }
    )
    return pedidos
}