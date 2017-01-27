const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.mongo.test_url);

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/json'}));

app.use(express.static(config.server.distFolder));
app.use('/coverage', express.static(path.join(__dirname + config.coverage)));
app.use('/documentation', express.static(path.join(__dirname + config.doc)));
app.use('/public', express.static(path.join(__dirname + config.public)));
app.use('/angular', require('./angular/index'));
app.use('/api', require('./api/index'));

module.exports = app;