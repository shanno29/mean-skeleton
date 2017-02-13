require('rootpath')();
require('dotenv').config();

const app = module.exports = require('./lib/boot');
require('./server')(app);
