const health = require('./health');
const info = require('./info');

module.exports = {
  name: 'internals',
  once: true,
  async register(server) {
    const plugins = [
      {
        plugin: health,
      },
      {
        plugin: info,
      },
    ];

    await server.register(plugins, { routes: { prefix: '/internals' } });
  },
};
