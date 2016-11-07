var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Pull in config
var config = require('./config'); // ./config.js

// Define routes
var angular = require('./routes/angular'); // ./routes/angular.js
var api_index = require('./routes/api/index'); // ./routes/api/index.js
var api_action = require('./routes/api/action'); // ./routes/api/action.js

// Create app from express
var app = express();

// Connect to DB
mongoose.connect(config.mongo.url, function(err) {
  if (err) {
    console.error('Could not connect to MongoDB.');
  }
  console.log('Connected to MongoDB.');
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(config.server.distFolder, 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(config.server.distFolder));

app.use('/api', api_index) // Serve 'api_index' from /api
app.use('/api/action', api_action); // Server 'api_action' from /api
app.use('/', angular); // Serve 'angular' from /

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

// Export application
module.exports = app;