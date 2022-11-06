import { Sequelize } from 'sequelize';
import { database } from '../database.js';

export const PostSchema = database.define('posts', {
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
        allowNull: false,
        type: Sequelize.STRING
    },
});