const test = require('ava');
const hapi = require('@hapi/hapi');
const getPort = require('get-port');

const helpersPlugins = require('../../../../server/plugins/helpers');
const config = require('../../../../config/config');


test.beforeEach(async (t) => {
  const port = await getPort();
  config.set('server', { port });
  t.context.server = hapi.server(config.get('server'));
  await t.context.server.register(helpersPlugins);
  await t.context.server.start();
});

test.afterEach(async (t) => {
  await t.context.server.stop();
});

test('Evaluate the internals plugins was registered', (t) => {
  t.plan(1);
  const registrations = Object.keys(t.context.server._core.registrations).length;
  t.is(registrations, 3);
});
