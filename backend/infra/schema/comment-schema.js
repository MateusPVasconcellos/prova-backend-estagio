import { Sequelize } from 'sequelize';
import { database } from '../database.js';
import { PostSchema } from './post-schema.js';

export const CommentSchema = database.define('comments', {
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
        references: { model: 'posts', key: 'id' }
    }
});

CommentSchema.belongsTo(PostSchema, {
    as: 'post',
    foreignKey: 'postId'
});