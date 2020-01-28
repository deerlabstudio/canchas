const server = require('./server/server');
const config = require('./config/config');

async function main() {
  try {
    const app = await server.init(config);
    await app.start();

    console.log('Server Running');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

main();
