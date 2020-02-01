const test = require('ava');
const getPort = require('get-port');

const server = require('../../server/server');
const config = require('../../config/config');

test.beforeEach(async (t) => {
  const port = await getPort();
  config.set('server', { port });
  t.context.port = port;
  t.context.app = await server.init(config);

  await t.context.app.start();
});

test.afterEach((t) => {
  t.context.app.stop();
});

test('Check the number of plugins registered', (t) => {
  t.plan(1);
  const registrations = Object.keys(t.context.app._core.registrations).length;
  t.is(registrations, 4);
});

test('Check the application start in the correct port', (t) => {
  t.plan(1);
  t.is(t.context.app._core.info.port, t.context.port);
});
