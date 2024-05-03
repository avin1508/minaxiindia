const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Trim = sequelize.define('Trim', {
    no: { 
        type: DataTypes.INTEGER,
        allowNull: true 
    },
    code: { 
        type: DataTypes.STRING, 
        allowNull: true 
    },
    trimDetails: { 
        type: DataTypes.STRING, 
        allowNull: true 
    },
    duty: { 
        type: DataTypes.FLOAT, 
        allowNull: true 
    },
    cur: { 
        type: DataTypes.STRING, 
        allowNull: true 
    },
    price: { 
        type: DataTypes.FLOAT, 
        allowNull: true 
    },
    consp: { 
        type: DataTypes.FLOAT, 
        allowNull: true 
    },
    inr: { 
        type: DataTypes.FLOAT, 
        allowNull: true 
    },
    createdAt: { 
        type: DataTypes.DATE, 
        allowNull: true 
    },
    updatedAt: { 
        type: DataTypes.DATE, 
        allowNull: true 
    }
});

module.exports =  Trim;
