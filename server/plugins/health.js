const health = require('../../lib/health');

module.exports = {
  name: 'health',
  register: (server) => {
    const healthResponse = health();
    server.route({
      path: '/health',
      method: 'GET',
      handler: (request, h) => h.response(healthResponse),
    });
  },
};
