const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const packages = require('../../package.json');
const config = require('../config');
const router = require('../routes');

class Server {
  constructor() {
    this.port = config.get('SERVER_PORT');
    this.packages = packages;
    this.app = express();
    this.router = express.Router();
    this.defineRoutes();
    this.defineConfig();
  }

  defineRoutes() {
    router(this.router);
  }

  defineConfig() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/products', this.router);
  }

  start() {
    return new Promise((resolve) => {
      const env = process.env.NODE_ENV;

      this.httpServer = this.app.listen(this.port, () => {
        console.info('------------------------------------------------------------------');
        console.info(`${this.packages.name} - Version: ${this.packages.version}`);
        console.info('------------------------------------------------------------------');
        console.info(`ATTENTION, ${env} ENVIRONMENT!`);
        console.info('------------------------------------------------------------------');
        console.info(`Express server listening on port: ${this.port}`);
        console.info('------------------------------------------------------------------');

        return resolve(this.app);
      });
    });
  }

  stop() {
    return new Promise((resolve) => {
      if (this.httpServer) {
        return this.httpServer.close(resolve);
      }
      return resolve();
    });
  }
}

module.exports = Server;
