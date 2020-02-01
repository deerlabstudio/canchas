const server = require('./server/server');
const config = require('./config/config');

const logger = require('./utils/logger');

async function main() {
  try {
    const app = await server.init(config);
    await app.start();

    logger.info('Server Running');
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
