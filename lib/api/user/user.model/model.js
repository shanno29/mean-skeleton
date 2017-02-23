const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
}, {
	timestamps: true,
});

require('./statics')(userSchema);
require('./hooks')(userSchema);

module.exports = mongoose.model('User', userSchema);
