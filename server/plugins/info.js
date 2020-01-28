const info = require('../../lib/info');

module.exports = {
  name: 'info',
  register: (server) => {
    const infoResponse = info();
    server.route({
      path: '/info',
      method: 'GET',
      handler: (request, h) => h.response(infoResponse),
    });
  },
};
