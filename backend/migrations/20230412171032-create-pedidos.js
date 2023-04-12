'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('pedidos', {
            id_pedido: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            codigo: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            usuario_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "usuarios",
                    key: "id_usuario"
                }
            }
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('pedidos')
    }
}