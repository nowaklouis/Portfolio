const publics = require('./public');
const auth = require('./auth');

const setupRoutes = app => {
  app.use('/', publics);
  app.use('/auth', auth);
};

module.exports = setupRoutes;
