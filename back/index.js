const pkg = require('./package.json');
const Server = require('./src/server');

process.title = pkg.name;

const instanceServer = new Server();

const shutdown = async () => {
  console.info('Gracefully shutdown in progress');
  await instanceServer.stop();
  process.exit(0);
};

process.on('SIGTERM', shutdown)
  .on('SIGINT', shutdown)
  .on('SIGHUP', shutdown)
  .on('uncaughtException', (err) => {
    console.error('uncaughtException caught the error: ', err);
    throw err;
  })
  .on('unhandledRejection', (err, promise) => {
    console.error(`Unhandled Rejection at: Promise ${promise} reason: ${err}`);
    newrelic.noticeError(err);
    throw err;
  })
  .on('exit', (code) => {
    console.info(`Node process exit with code: ${code}`);
  });

(async () => {
  try {
    await instanceServer.start();
  } catch (err) {
    console.error('[APP] initialization failed', err);
    newrelic.noticeError(err);
    throw err;
  }
  console.info('[APP] initialized SUCCESSFULLY');
})();
