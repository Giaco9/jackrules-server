'use strict';

module.exports = function (port) {
  let express = require('express'),
      express_logger = require('morgan'),
      coolog = require('coolog'),
      path = require('path');

  let statics = express.static;
  let api = require('./api')();

  let app = express();

  let server = require('http').Server(app);
  let io = require('socket.io')(server);

  coolog.addChannel({
    name: 'root',
    level: 'debug',
    appenders: ['console']
  });

  let logger = coolog.logger(path.basename(__filename));

  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');

  app.use(express_logger('dev'));

  app.use(statics(__dirname + '/public'));

  // API
  app.get('/init/:user', api.init);

  server.listen(port, function() {
    logger.info('listen on ', port);
  });

  io.on('connection', function (socket) {
    socket.on('addEvent', function(data) {
      socket.broadcast.emit('addEvent', data);
      logger.info('resending', data);
    });
  });
};
