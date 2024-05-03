const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Costing = sequelize.define('Costing', {
    no: { 
        type: DataTypes.INTEGER, 
        allowNull: true 
    },
    fabric: { 
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
    cons: { 
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

module.exports =  Costing;
