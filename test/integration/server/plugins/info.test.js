const test = require('ava');
const hapi = require('@hapi/hapi');
const getPort = require('get-port');

const infoPlugin = require('../../../../server/plugins/info');
const config = require('../../../../config/config');
const pk = require('../../../../package.json');


test.beforeEach(async (t) => {
  const port = await getPort();
  config.set('server', { port });
  t.context.server = hapi.server(config.get('server'));
  await t.context.server.register(infoPlugin);
  await t.context.server.start();
});

test.afterEach((t) => {
  t.context.server.stop();
});

test('Evaluate the unique registered plugins is Info', (t) => {
  const registrations = Object.keys(t.context.server._core.registrations).length;
  t.is(registrations, 1);
});

test('Obtain response from info', async (t) => {
  const response = await t.context.server.inject({
    url: '/info',
    method: 'GET',
  });

  const expectedResult = {
    service: pk.name,
    version: pk.version,
  };

  t.is(response.statusCode, 200);
  t.deepEqual(response.result, expectedResult);
});
