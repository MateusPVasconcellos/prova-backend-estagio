'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('posts', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            username: {
                type: Sequelize.STRING
            },
        });
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.dropTable('posts');
    }
};
