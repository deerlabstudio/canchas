const test = require('ava');
const getPort = require('get-port');

const server = require('../../server/server');
const config = require('../../config/config');

let app;
let port;

test.beforeEach(async () => {
  port = await getPort();
  config.set('server', { port });
  app = await server.init(config);

  await app.start();
});

test.after(() => {
  app.stop();
});

test('Check the number of plugins registered', (t) => {
  t.plan(1);
  const registrations = Object.keys(app._core.registrations).length;
  t.is(registrations, 4);
});

test('Check the application start in the correct port', (t) => {
  t.plan(1);
  t.is(app._core.info.port, port);
});
