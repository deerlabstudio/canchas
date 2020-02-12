const path = require('path');
const Umzug = require('umzug');
const logger = require('../../utils/logger');

module.exports = (options) => {
  const migrator = new Umzug({
    storage: 'sequelize',
    storageOptions: {
      sequelize: options.sequelize,
      tableName: 'canchas_migrations',
    },
    migrations: {
      params: [
        options.sequelize.getQueryInterface(),
        options.sequelize.constructor,
        () => {
          throw new Error('Migration try to use old style done callback.');
        },
      ],
      path: path.resolve(__dirname, '../../database/migrations'),
      pattern: /\.js$/,
    },
  });

  return migrator.pending()
    .tap((pendingMigrations) => {
      if (pendingMigrations.length > 0) {
        logger.info(`Migrations start to run ${pendingMigrations.length} pending migrations`);
      }
    })
    .then((pendingMigrations) => {
      if (pendingMigrations.length > 0) {
        return migrator.up();
      }
      return pendingMigrations;
    })
    .tap((executedMigrations) => {
      if (executedMigrations.length > 0) {
        logger.info(`${executedMigrations.length} migrations was running succesfully`);
      }
      logger.info('No pending migratios');
    })
    .then(() => {
      logger.info('Migrator was finish sucessufully');
    });
};
