const test = require('ava');

test.afterEach(() => {
  delete require.cache[require.resolve('../../../config/config')];
});

test.serial('evaluate defaults config', (t) => {
  t.plan(3);
  const config = require('../../../config/config');

  t.is(config.get('env'), 'test');
  t.is(config.get('server').host, 'localhost');
  t.is(config.get('server').port, 3000);
});

test.serial('override defaults with environment variables', (t) => {
  t.plan(2);

  process.env.APP_PORT = 8000;
  process.env.APP_HOST = '127.0.0.1';

  const config = require('../../../config/config');

  t.is(config.get('server').host, '127.0.0.1');
  t.is(config.get('server').port, 8000);
});
