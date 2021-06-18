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
        service_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        input_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        //counted in days?
        pay_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        trial: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        trial_duration: {
            type: DataTypes.INTEGER,
            defaultValue: null,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
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