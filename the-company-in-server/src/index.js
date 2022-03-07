import mongoose from 'mongoose';
import { Server } from './server.js';
import { config } from './config.js';

(function () {
  console.log('Starting server');
  Server.bootstrap();
  mongoose.connect(config.db.connectionString, { useNewUrlParser: true });
}());
