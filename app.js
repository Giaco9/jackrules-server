'use strict';
let cluster = require('cluster'),
  numCPUs = require('os').cpus().length,
  port = 8080;

  numCPUs = 1;
if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    console.log('start worker', i);
    cluster.fork();
    process.env.started = true;
  }
  cluster.on('exit', function(worker) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
  require('./worker.js')(port);
}
