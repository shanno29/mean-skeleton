const path = require('path');

module.exports = {
  server: {
    distFolder: path.resolve(__dirname, 'public'),
    dbPath: path.resolve(__dirname, 'database')
  }
};
