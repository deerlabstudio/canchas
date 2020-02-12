const Sequelize = require('sequelize');

const migrator = require('./migrator');

module.exports = (config) => {
  const {
    database,
    username,
    password,
    host,
    port,
    dialect,
  } = config.get('database');

  const sequelize = new Sequelize(database, username, password, {
    host,
    port,
    dialect,
  });

  return sequelize.authenticate()
    .then(migrator({ sequelize }));
};
