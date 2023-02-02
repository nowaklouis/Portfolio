const env = require('dotenv').config();

const config = {
  DEV: {
    HOST: env.DB_HOST,
    USER: env.DB_USER,
    PASSWORD: env.DB_PASSWORD,
    DB: env.DB_NAME,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  PROD: {
    HOST: env.DB_HOST,
    USER: env.DB_USERNAME,
    PASSWORD: env.DB_PASSWORD,
    DB: env.DB_NAME,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};

module.exports = { config };
