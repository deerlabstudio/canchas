const usersController = require('../../controllers/users');

module.exports = {
  name: 'apu_users',
  register: (server) => {
    server.route({
      path: '/users',
      method: 'GET',
      handler: usersController.list,
    });
  },
};
