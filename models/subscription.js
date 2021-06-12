const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Subscription extends Model {}

Subscription.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        //counted in days?
        pay_interval: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        trial: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        trial_duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'subscription',
    }
)

module.exports = Subscription;