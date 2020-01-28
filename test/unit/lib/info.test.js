const test = require('ava');
const info = require('../../../lib/info');
const pk = require('../../../package.json');

test('healt object', (t) => {
  t.plan(2);

  const infoResult = info();

  t.is(infoResult.service, pk.name, 'App name in package.json');
  t.is(infoResult.version, pk.version, 'Version in package.json');
});
