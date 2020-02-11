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
  database: {
    username: {
      doc: 'Username for the Database connection',
      env: 'DB_USERNAME',
      default: 'root',
    },
    password: {
      doc: 'Password for the Database connection',
      env: 'DB_PASSWORD',
      default: 'admin',
    },
    database: {
      doc: 'Name of the database to connect',
      env: 'DB_NAME',
      default: 'canchas',
    },
    host: {
      doc: 'Host to connect to the database',
      env: 'DB_HOST',
      default: '127.0.0.1',
    },
    dialect: {
      doc: 'Type of Database to use',
      env: 'DB_DIALECT',
      default: 'mysql',
    },
    loggin: {
      doc: 'Variable to enable log querys',
      env: 'DB_LOGGING',
      default: true,
    },
  },
});
