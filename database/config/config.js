const config = require('../../config/config');

module.exports = {
  development: config.get('database'),
  test: config.get('database'),
  production: config.get('database'),
};
