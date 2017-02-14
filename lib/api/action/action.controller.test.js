const expect = require('chai').expect;

const action = require('./action.controller');

describe('Action Controller', function() {
    describe('validation', function() {
        it('should fail validation when missing command field', function(done) {
            action.validate({})
                .then(function(action) {
                    expect(action).to.not.exist;
                    done('Action should fail validation');
                }).catch(function(err) {
                    expect(err).to.exist;
                    done();
                });
        });

        it('should validate when given required parameters', function(done) {
            action.validate({
                command: 'Hello World',
            }).then(function() {
                done();
            }).catch(function(err) {
                done(err);
            });
        });
    });

    describe('create', function() {
        it('should create an action', function(done) {
            action.create({
                command: 'Hello World',
            }).then(function(action) {
                expect(action).to.exist;
                done();
            }).catch(function(err) {
                done(err);
            });
        });

        it('should not create an action when missing required parameters', function(done) {
            action.create({})
                .then(function(action) {
                    expect(action).to.not.exist;
                    done('Action should fail creation');
                }).catch(function(err) {
                    expect(err).to.exist;
                    done();
                });
        });
    });

    describe('query', function() {
        it('should return all actions when given no query');
        it('should return only actions matching query');
    });

    describe('get', function() {
        it('should return an action given an id');
        it('should not return an action when given an invalid id');
    });

    describe('update', function() {
        it('should update an action');
        it('should fail to update an action given an invalid id');
    });

    describe('delete', function() {
        it('should delete an action')
    });
/*
    it('Create Action No ID', function(done) {
        let promise = controller
            .make({
                user: config.get('userOne'),
                name: 'actionOne',
                params: [{user: config.get('userOne'), command: 'Hello World'}],
            });
            promise.then(function(response) {
                response.name.equal('actionOne');
                response.params[0].command.equal('Hello World');
                return controller.remove(response._id);
            })
            .then(function(response) {
                response.name.equal('actionOne');
                response.params[0].command.equal('Hello World');
                done();
            });
    });

    it('Create Action', function(done) {
        controller
            .make({
                _id: config.get('actionOne'),
                user: config.get('userOne'),
                name: 'actionOne',
                params: [{user: config.get('userOne'), command: 'Hello World'}],
            })
            .then(function(response) {
                response.name.equal('actionOne');
                response.params[0].command.equal('Hello World');
                done();
            });
    });


    it('Find Action', function(done) {
        controller
            .lookup(config.get('actionOne'))
            .then(function(response) {
                response.name.equal('actionOne');
                response.params[0].command.equal('Hello World');
                done();
            });
    });

    it('Update Action', function(done) {
        controller
            .edit(config.get('actionOne'), {
                params: [{user: config.get('userOne'), command: 'Goodbye World'}],
            })
            .then(function(response) {
                response.name.equal('actionOne');
                response.params[0].command.equal('Hello World');
                response.params[1].command.equal('Goodbye World');
                response.params.length.equal(2);
                done();
            });
    });

    it('List Actions', function(done) {
        controller
            .listAll()
            .then(function(response) {
                response.length.equal(1);
                done();
            });
    });

    it('Delete Action', function(done) {
        controller
            .remove(config.get('actionOne'))
            .then(function(response) {
                response.name.equal('actionOne');
                response.params[0].command.equal('Hello World');
                response.params[1].command.equal('Goodbye World');
                done();
            });
    });
    */
});
