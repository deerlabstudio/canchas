const helpers = require('./helpers');
const api = require('./api');

module.exports = {
  name: 'routes',
  async register(server) {
    const plugins = [
      {
        plugin: helpers,
      },
      {
        plugin: api,
      },
    ];

    await server.register(plugins);
  },
};
