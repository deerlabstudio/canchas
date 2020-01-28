const convict = require('convict');

module.exports = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  server: {
    host: {
      doc: 'Server host name/IP.',
      format: '*',
      env: 'APP_HOST',
      default: 'localhost',
    },
    port: {
      doc: 'The por to bind.',
      format: 'port',
      env: 'APP_PORT',
      default: 3000,
    },
  },
});
