const db = require('../models');
const datasUser = require('./user');
const datasRole = require('./role');

// eslint-disable-next-line no-undef
const ENV = process.env.NODE_ENV;

if (ENV === 'DEV') {
  db.sequelize.sync({ force: true }).then(() => {
    console.log('Resync Db');
    datasRole(db);
    datasUser(db);
  });
}
