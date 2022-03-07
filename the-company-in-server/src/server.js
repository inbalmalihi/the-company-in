import express from 'express';
import * as http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import {config} from './config.js';
import { AppRouter } from './router.js';

export class Server {
  static bootstrap() {
    return new Server();
  }

   constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(AppRouter);
    this.server = http.createServer(this.app);
    this.server.listen(config.server.port, () => {
      console.log(`Server running on port ${config.server.port}`);
    });
  }
}
