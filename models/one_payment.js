const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Payment extends Model {}

Payment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "one_payment",
  }
);

module.exports = Payment;
