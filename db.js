const mongoose = require('mongoose');

function connect() {
	mongoose.connect(process.env.DB_URL, function(err) {
	  if (err) {
	    console.error('Could not connect to MongoDB.');
	    return;
	  }
	  console.log('Connected to MongoDB.');
	});
}

module.exports = connect;