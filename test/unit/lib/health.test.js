const test = require('ava');
const health = require('../../../lib/health');

test('healt object', (t) => {
  t.plan(2);

  const healthResult = health();

  t.is(healthResult.code, 200, 'status code result');
  t.is(healthResult.status, 'UP', 'status for the application');
});
