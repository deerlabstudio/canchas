const test = require('ava');
const hapi = require('@hapi/hapi');
const getPort = require('get-port');

const infoPlugin = require('../../../../server/plugins/info');
const config = require('../../../../config/config');
const pk = require('../../../../package.json');

let server;

test.beforeEach(async () => {
  const port = await getPort();
  config.set('server', { port });
  server = hapi.server(config.get('server'));
  await server.register(infoPlugin);
  await server.start();
});

test.after(() => {
  server.stop();
});

test.serial('Evaluate the unique registered plugins is Info', (t) => {
  const registrations = Object.keys(server._core.registrations).length;
  t.is(registrations, 1);
});

test.serial('Obtain response from info', async (t) => {
  const response = await server.inject({
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
