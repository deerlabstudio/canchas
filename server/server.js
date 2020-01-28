const hapi = require('@hapi/hapi');

const plugins = require('./plugins');

async function init(options) {
  const server = hapi.server(options.get('server'));

  await server.register(plugins);

  return server;
}

module.exports = { init };
