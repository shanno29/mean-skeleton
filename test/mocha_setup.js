require('rootpath')();

const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

process.env.DB_URL += '-test';

before(function(done) {
	mongoose.connect(process.env.DB_URL)
		.then(function() {
			console.log('Connected to MongoDB at ' + process.env.DB_URL);
			require('lib/models');

			done();
		}).catch(function(err) {
			throw err;
		});
});

after(function(done) {
	mongoose.connection.db.dropDatabase();
	console.log('Test database purged');
	done();
});