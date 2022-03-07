const nconf = require('nconf');

nconf.argv()
  .env()
  .defaults({
    SERVER_PORT: 8181
  });

module.exports = nconf;