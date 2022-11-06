import Sequelize from 'sequelize';

const options = {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: process.env.DATABASE_DIALECT,

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    define: {
        freezeTableName: true,
        timestamps: true
    }
};

export const database = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, options);