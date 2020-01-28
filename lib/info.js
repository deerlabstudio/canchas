const pk = require('../package.json');

module.exports = () => ({
  service: pk.name,
  version: pk.version,
});
