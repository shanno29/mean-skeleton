const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const config = require('config');
// const favicon = require('serve-favicon');

// Setup database and models
require('lib/database');

const app = module.exports = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: 'application/json'}));

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(config.get('server.distFolder'), 'favicon.ico')));
app.use(express.static(config.get('server.distFolder')));
app.use('/coverage', express.static(path.join(__dirname + config.get('coverage'))));
app.use('/documentation', express.static(path.join(__dirname + config.get('doc'))));
app.use('/public', express.static(path.join(__dirname + config.get('public'))));
app.use('/', require('lib/routes'));