const Sequelize = require('sequelize');
const { config } = require('../config/db.config');
// eslint-disable-next-line no-undef
const ENV = process.env.NODE_ENV;

const sequelize = new Sequelize(
  config[ENV].DB,
  config[ENV].USER,
  config[ENV].PASSWORD,
  {
    host: config[ENV].HOST,
    dialect: config[ENV].dialect,
    operatorsAliases: false,
    autoreconnect: true,
    pool: {
      max: config[ENV].pool.max,
      min: config[ENV].pool.min,
      acquire: config[ENV].pool.acquire,
      idle: config[ENV].pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user')(sequelize, Sequelize);
db.role = require('./role')(sequelize, Sequelize);

db.role.hasMany(db.user);
db.user.belongsTo(db.role);

module.exports = db;
