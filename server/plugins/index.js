const internals = require('./internals');

module.exports = {
  name: 'routes',
  async register(server) {
    await server.register(internals);
  },
};
