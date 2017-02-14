const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

mongoose.connect(process.env.DB_URL)
	.then(() => {
		console.log('Connected to MongoDB at ' + process.env.DB_URL);
	}).catch((err) => {
		console.error(err);
		process.exit(1);
	});
