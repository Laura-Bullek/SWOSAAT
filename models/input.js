const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Input extends Model {}

Input.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        serviceName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        input_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'input'
    }
)

module.exports = Input;