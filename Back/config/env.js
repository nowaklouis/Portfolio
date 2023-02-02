const env = require('dotenv').config();

const DEV = {
  PORT: '3001',
  HOSTNAME: 'localhost',
  HOSTS: ['http://localhost:3000'],
};

const PROD = {
  PORT: '3001',
  HOSTNAME: 'localhost',
};

const getEnv = () => {
  switch (env.NODE_ENV) {
    case 'DEV':
      return DEV;
      // eslint-disable-next-line no-unreachable
      break;
    case 'PROD':
      return PROD;
      // eslint-disable-next-line no-unreachable
      break;
    default:
      return 'error or other settings';
      // eslint-disable-next-line no-unreachable
      break;
  }
};

const ENV = getEnv();
module.exports = ENV;
