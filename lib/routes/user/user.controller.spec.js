const controller = require('./user.controller.js');
const config = require('config');

// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect(config.get('mongo.test_url'));

describe('User Controller', function() {
    it('Create User No ID', function(done) {
        controller
            .make({
                email: 'red@email.com',
                password: 'test',
                version: '1.0.0',
            })
            .then(function(response) {
                response.email.should.equal('red@email.com');
                response.password.should.not.equal('test');
                response.version.should.equal('1.0.0');
                return controller.remove(response._id);
            })
            .then(function(response) {
                response.email.should.equal('red@email.com');
                response.password.should.not.equal('test');
                response.version.should.equal('1.0.0');
                done();
            });
    });

    it('Create User', function(done) {
        controller
            .make({
                _id: config.get('userOne'),
                email: 'red@email.com',
                password: 'test',
                version: '1.0.0',
            })
            .then(function(response) {
                response.email.should.equal('red@email.com');
                response.password.should.not.equal('test');
                response.version.should.equal('1.0.0');
                done();
            });
    });

    it('Create User Fail', function(done) {
        controller
            .make({
                _id: config.get('userOne'),
                email: 'red@email.com',
                password: 'test',
                version: '1.0.0',
            })
            .then(null, function(error) {
                error.message.should.equal('That Email Is Already In Use');
                done();
            });
    });

    it('Find User', function(done) {
        controller
            .lookup(config.get('userOne'))
            .then(function(response) {
                response.email.should.equal('red@email.com');
                response.password.should.not.equal('test');
                response.version.should.equal('1.0.0');
                done();
            });
    });

    it('Update User Empty', function(done) {
        controller
            .edit(config.get('userOne'), {})
            .then(function(response) {
                response.email.should.equal('red@email.com');
                response.password.should.not.equal('test');
                response.version.should.equal('1.0.0');
                done();
            });
    });

    it('Update User', function(done) {
        controller
            .edit(config.get('userOne'), {
                version: '1.0.1',
            })
            .then(function(response) {
                response.email.should.equal('red@email.com');
                response.password.should.not.equal('test');
                response.version.should.equal('1.0.1');
                done();
            });
    });

    it('Login User', function(done) {
        controller
            .login(config.get('userOne'), {
                email: 'red@email.com',
                password: 'test',
                version: '1.0.1',
            })
            .then(function(response) {
                response.email.should.equal('red@email.com');
                response.password.should.not.equal('test');
                response.version.should.equal('1.0.1');
                done();
            });
    });

    it('Login User Fail Password', function(done) {
        controller
            .login(config.get('userOne'), {
                email: 'red@mail.com',
                password: 'wrong',
                version: '1.0.1',
            })
            .then(null, function(error) {
                error.message.should.equal('Incorrect Password');
                done();
            });
    });

    it('Login User Fail Client Outdated', function(done) {
        controller
            .login(config.get('userOne'), {
                email: 'red@email.com',
                password: 'test',
                version: '1.0.0',
            })
            .then(null, function(error) {
                error.message.should.equal('Outdated Client');
                done();
            });
    });

    it('List Users', function(done) {
        controller
            .listAll()
            .then(function(response) {
                response.length.should.equal(1);
                done();
            });
    });

    it('Delete User', function(done) {
        controller
            .remove(config.get('userOne'))
            .then(function(response) {
                response.should.have.property('email');
                response.should.have.property('password');
                response.should.have.property('version');
                done();
            });
    });
});
