const expect = require('chai').expect;

const User = require('./index');

describe('User Model', function() {
	describe('statics', function() {
		describe('generateHash', function() {
			it('should return a different password when hashed', function (done) {
				let password = 'changeme123';
				let user = new User({
					username: 'John',
					email: 'john@john.com'
				});
				user.password = User.generateHash(password);

				expect(user.password).to.not.equal(password);
				done();
			});
		});

		describe('validatePassword', function() {
			it('should return true when comparing equal hashed passwords', function (done) {
				let hash = User.generateHash('password1');
				expect(User.validatePassword('password1', hash)).to.be.true;
				done();
			});

			it('should return false when comparing two unequal hashed passwords', function (done) {
				let hash = User.generateHash('password1');
				expect(User.validatePassword('password2', hash)).to.be.false;
				done();
			});
		});
	});

	describe('hooks', function() {
		describe('pre-save', function() {
			it('should hash the password before saving if password is provided', function(done) {
				let password = 'changeme123';
				User.create({
					username: 'John',
					email: 'john@john.com',
					password: password,
				}).then(function(user) {
					expect(user.password).to.not.equal(password);
					done();
				}).catch(function(err) {
					done(err);
				});
			});
		});
	});

});