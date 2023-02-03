const Sequelize = require("sequelize");
const { config } = require("../config/db.config");

const connexion = new Sequelize(
  config.DEV.DB,
  config.DEV.USER,
  config.DEV.PASSWORD,
  {
    host: config.DEV.HOST,
    dialect: config.DEV.dialect,
    operatorsAliases: false,
    autoreconnect: true,
    pool: {
      max: config.DEV.pool.max,
      min: config.DEV.pool.min,
      acquire: config.DEV.pool.acquire,
      idle: config.DEV.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.connexion = connexion;

db.user = require("./user")(connexion, Sequelize);

module.exports = db;
