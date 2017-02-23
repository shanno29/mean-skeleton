module.exports = function(userSchema) {
	userSchema.pre('save', function(next) {
		if (this.isModified('password')) this.password = userSchema.statics.generateHash(this.password);
		next();
	});
};
