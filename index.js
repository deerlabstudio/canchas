const serverFactory = require('./server/server');
const config = require('./config/config');

const logger = require('./utils/logger');

const databaseSetup = require('./lib/databaseSetup');

async function main() {
  try {
    const server = await serverFactory.init(config);

    await databaseSetup(config);
    await server.start();

    logger.info(`Server Running at ${server.info.uri}`);
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}

process.on('unhandledRejection', (err) => {
  logger.error(err);
  process.exit(1);
});

main();
