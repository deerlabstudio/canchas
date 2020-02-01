const helpers = require('./helpers');

module.exports = {
  name: 'routes',
  async register(server) {
    await server.register(helpers);
  },
};
