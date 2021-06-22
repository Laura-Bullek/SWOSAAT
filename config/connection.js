const Sequelize = require("sequelize");
require("dotenv").config();
const config = require("config");

let sequelize;

if (config.production.use_env_variable) {
  sequelize = new Sequelize(process.env[config.production.use_env_variable], config.production);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
