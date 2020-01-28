const test = require('ava');
const hapi = require('@hapi/hapi');
const getPort = require('get-port');

const plugins = require('../../../../server/plugins');
const config = require('../../../../config/config');

let server;

test.beforeEach(async () => {
  const port = await getPort();
  config.set('server', { port });
  server = hapi.server(config.get('server'));
  await server.register(plugins);
  await server.start();
});

test.after(async () => {
  await server.stop();
});

test('Evaluate all the plugins was registered', (t) => {
  t.plan(1);
  const registrations = Object.keys(server._core.registrations).length;
  t.is(registrations, 4);
});
