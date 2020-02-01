const test = require('ava');
const hapi = require('@hapi/hapi');
const getPort = require('get-port');

const healthPlugin = require('../../../../server/plugins/health');
const config = require('../../../../config/config');

test.beforeEach(async (t) => {
  const port = await getPort();
  config.set('server', { port });
  t.context.server = hapi.server(config.get('server'));
  await t.context.server.register(healthPlugin);
  await t.context.server.start();
});

test.afterEach((t) => {
  t.context.server.stop();
});

test('Evaluate the unique registered plugins is Health', (t) => {
  const registrations = Object.keys(t.context.server._core.registrations).length;
  t.is(registrations, 1);
});

test('Obtain response from health', async (t) => {
  const response = await t.context.server.inject({
    url: '/health',
    method: 'GET',
  });

  const expectedResult = {
    status: 'UP',
    code: 200,
  };

  t.is(response.statusCode, 200);
  t.deepEqual(response.result, expectedResult);
});
