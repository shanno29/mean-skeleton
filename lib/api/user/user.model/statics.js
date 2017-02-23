const bcrypt = require('bcrypt');

module.exports = function(userSchema) {
	// Generate hash
	userSchema.statics.generateHash = function(password) {
		return bcrypt.hashSync(password, bcrypt.genSaltSync());
	};

	// Checks if incoming password matches hashed password in database
	userSchema.statics.validatePassword = function(incoming, hashed) {
		return bcrypt.compareSync(incoming, hashed);
	};
};
