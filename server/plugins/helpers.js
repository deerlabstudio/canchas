const health = require('./health');
const info = require('./info');

module.exports = {
  name: 'internals',
  once: true,
  async register(server) {
    const routes = [
      {
        plugin: health,
      },
      {
        plugin: info,
      },
    ];

    await server.register(routes, { routes: { prefix: '/helpers' } });
  },
};
