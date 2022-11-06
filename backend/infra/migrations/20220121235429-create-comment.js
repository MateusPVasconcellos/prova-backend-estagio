'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('comments', {
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
            postId: {
                type: Sequelize.INTEGER,
                references: { model: 'posts', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            }
        });
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.dropTable('comments');
    }
};
