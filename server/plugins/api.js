const usersRoutes = require('./routes/users');

module.exports = {
  name: 'api',
  once: true,
  async register(server) {
    const routes = [
      {
        plugin: usersRoutes,
      },
    ];

    await server.register(routes, { routes: { prefix: '/api' } });
  },
};
