const test = require('ava');
const hapi = require('@hapi/hapi');
const getPort = require('get-port');

const healthPlugin = require('../../../../server/plugins/health');
const config = require('../../../../config/config');

let server;

test.beforeEach(async () => {
  const port = await getPort();
  config.set('server', { port });
  server = hapi.server(config.get('server'));
  await server.register(healthPlugin);
  await server.start();
});

test.after(() => {
  server.stop();
});

test.serial('Evaluate the unique registered plugins is Health', (t) => {
  const registrations = Object.keys(server._core.registrations).length;
  t.is(registrations, 1);
});

test.serial('Obtain response from health', async (t) => {
  const response = await server.inject({
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
