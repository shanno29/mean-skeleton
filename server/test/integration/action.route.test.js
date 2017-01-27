const config = require('../../config');
const request = require("supertest");
const app = require('../../app');
require('chai').should();

describe('Action Route', function(){

    it('Create Action One', function(done){
        request(app.listen())
            .post('/api/actions')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.actionOne,
                name: 'actionOne',
                params: [{user: config.userOne, command: 'Hello World'}]
            })
            .expect(200)
            .then(function(response){
                response.body.name.should.equal('actionOne');
                response.body.params[0].user.should.equal(config.userOne);
                response.body.params[0].command.should.equal('Hello World');
                done();
            });
    });
    
    it('Create Action Two', function(done){
        request(app.listen())
            .post('/api/actions')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.actionTwo,
                name: 'actionTwo',
                params: [{user: config.userTwo, command: 'Hello World'}]
            })
            .expect(200)
            .then(function(response){
                response.body.name.should.equal('actionTwo');
                response.body.params[0].user.should.equal(config.userTwo);
                response.body.params[0].command.should.equal('Hello World');
                done();
            });
    });

    it('Create Action Three', function(done){
        request(app.listen())
            .post('/api/actions')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.actionThree,
                name: 'actionThree',
                params: [{user: config.userThree, command: 'Hello World'}]
            })
            .expect(200)
            .then(function(response){
                response.body.name.should.equal('actionThree');
                response.body.params[0].user.should.equal(config.userThree);
                response.body.params[0].command.should.equal('Hello World');
                done();
            });
    });

    it('Find Action One', function(done){
        request(app.listen())
            .get('/api/actions/' + config.actionOne)
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response){
                response.body.name.should.equal('actionOne');
                response.body.params[0].user.should.equal(config.userOne);
                response.body.params[0].command.should.equal('Hello World');
                done();
            });
    });

    it('Find Action Two', function(done){
        request(app.listen())
            .get('/api/actions/' + config.actionTwo)
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response){
                response.body.name.should.equal('actionTwo');
                response.body.params[0].user.should.equal(config.userTwo);
                response.body.params[0].command.should.equal('Hello World');
                done();
            });
    });

    it('Find Action Three', function(done){
        request(app.listen())
            .get('/api/actions/' + config.actionThree)
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response){
                response.body.name.should.equal('actionThree');
                response.body.params[0].user.should.equal(config.userThree);
                response.body.params[0].command.should.equal('Hello World');
                done();
            });
    });
    
    it('List All Actions', function(done){
        request(app.listen())
            .get('/api/actions')
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response){
                response.body.length.should.equal(3);
                done();
            });
    });
    
    it('Update Action One', function(done){
        request(app.listen())
            .put('/api/actions/' + config.actionOne)
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                params: [{user: config.userOne, command: 'Goodbye World'}]
            })
            .expect(200)
            .then(function(response){
                response.body.name.should.equal('actionOne');
                response.body.params[0].user.should.equal(config.userOne);
                response.body.params[0].command.should.equal('Hello World');
                response.body.params[1].user.should.equal(config.userOne);
                response.body.params[1].command.should.equal('Goodbye World');
                response.body.params.length.should.equal(2);
                done();
            });
    });

    it('Update Action Two', function(done){
        request(app.listen())
            .put('/api/actions/' + config.actionTwo)
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                params: [{user: config.userTwo, command: 'Goodbye World'}]
            })
            .expect(200)
            .then(function(response){
                response.body.name.should.equal('actionTwo');
                response.body.params[0].user.should.equal(config.userTwo);
                response.body.params[0].command.should.equal('Hello World');
                response.body.params[1].user.should.equal(config.userTwo);
                response.body.params[1].command.should.equal('Goodbye World');
                response.body.params.length.should.equal(2);
                done();
            });
    });

    it('Update Action Three', function(done){
        request(app.listen())
            .put('/api/actions/' + config.actionThree)
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                params: [{user: config.userThree, command: 'Goodbye World'}]
            })
            .expect(200)
            .then(function(response){
                response.body.name.should.equal('actionThree');
                response.body.params[0].user.should.equal(config.userThree);
                response.body.params[0].command.should.equal('Hello World');
                response.body.params[1].user.should.equal(config.userThree);
                response.body.params[1].command.should.equal('Goodbye World');
                response.body.params.length.should.equal(2);
                done();
            });
    });

});
