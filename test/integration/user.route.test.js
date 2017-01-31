const config = require('config');
const request = require("supertest");
const app = require('../../app');
require('chai').should();

describe('User Route', function(){

    it('Create User One', function(done){
        request(app.listen())
            .post('/api/users')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.get('userOne'),
                email: 'red@email.com',
                password: 'test',
                version: '1.0.1'
            })
            .expect(200)
            .then(function(response){
                response.body.email.should.equal('red@email.com');
                response.body.password.should.not.equal('test');
                response.body.version.should.equal('1.0.1');
                done();
            });
    });

    it('Create User Two', function(done){
        request(app.listen())
            .post('/api/users')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.get('userTwo'),
                email: 'blue@email.com',
                password: 'test',
                version: '1.0.1'
            })
            .expect(200)
            .then(function(response){
                response.body.email.should.equal('blue@email.com');
                response.body.password.should.not.equal('test');
                response.body.version.should.equal('1.0.1');
                done();
            });
    });

    it('Create User Three', function(done){
        request(app.listen())
            .post('/api/users')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.get('userThree'),
                email: 'yellow@email.com',
                password: 'test',
                version: '1.0.1'
            })
            .expect(200)
            .then(function(response){
                response.body.email.should.equal('yellow@email.com');
                response.body.password.should.not.equal('test');
                response.body.version.should.equal('1.0.1');
                done();
            });
    });

    it('Create User One Fail', function(done){
        request(app.listen())
            .post('/api/users')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.get('userThree'),
                email: 'red@email.com',
                password: 'test',
                version: '1.0.1'
            })
            .expect(500)
            .then(function(response) {
                response.body.should.equal('That Email Is Already In Use');
                done();
            });
    });

    it('Create User Two Fail', function(done){
        request(app.listen())
            .post('/api/users')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.get('userThree'),
                email: 'blue@email.com',
                password: 'test',
                version: '1.0.1'
            })
            .expect(500)
            .then(function(response) {
                response.body.should.equal('That Email Is Already In Use');
                done();
            });
    });

    it('Create User Three Fail', function(done){
        request(app.listen())
            .post('/api/users')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.get('userThree'),
                email: 'yellow@email.com',
                password: 'test',
                version: '1.0.1'
            })
            .expect(500)
            .then(function(response) {
                response.body.should.equal('That Email Is Already In Use');
                done();
            });
    });

    it('Update User One Empty', function(done){
        request(app.listen())
            .put('/api/users/' + config.get('userOne'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({})
            .expect(200)
            .then(function(response){
                response.body.email.should.equal('red@email.com');
                response.body.email.should.not.equal('test');
                response.body.version.should.equal('1.0.1');
                done();
            });
    });

    it('Update User Two Empty', function(done){
        request(app.listen())
            .put('/api/users/' + config.get('userTwo'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({})
            .expect(200)
            .then(function(response){
                response.body.email.should.equal('blue@email.com');
                response.body.password.should.not.equal('test');
                response.body.version.should.equal('1.0.1');
                done();
            });
    });

    it('Update User Three Empty', function(done){
        request(app.listen())
            .put('/api/users/' + config.get('userThree'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({})
            .expect(200)
            .then(function(response){
                response.body.email.should.equal('yellow@email.com');
                response.body.password.should.not.equal('test');
                response.body.version.should.equal('1.0.1');
                done();
            });
    });

    it('Update User One', function(done){
        request(app.listen())
            .put('/api/users/' + config.get('userOne'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                version: '1.0.1'
            })
            .expect(200)
            .then(function(response){
                response.body.email.should.equal('red@email.com');
                response.body.password.should.not.equal('test');
                response.body.version.should.equal('1.0.1');
                done();
            });
    });

    it('Update User Two', function(done){
        request(app.listen())
            .put('/api/users/' + config.get('userTwo'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                version: '1.0.1'
            })
            .expect(200)
            .then(function(response){
                response.body.email.should.equal('blue@email.com');
                response.body.password.should.not.equal('test');
                response.body.version.should.equal('1.0.1');
                done();
            });
    });

    it('Update User Three', function(done){
        request(app.listen())
            .put('/api/users/' + config.get('userThree'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                version: '1.0.1'
            })
            .expect(200)
            .then(function(response){
                response.body.email.should.equal('yellow@email.com');
                response.body.password.should.not.equal('test');
                response.body.version.should.equal('1.0.1');
                done();
            });
    });

    it('Login User One', function(done){
        request(app.listen())
            .put('/api/users/' + config.get('userOne') + '/login')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.get('userOne'),
                email: 'red@email.com',
                password: 'test',
                version: '1.0.1'
            })
            .expect(200)
            .then(function(response){
                response.body.email.should.equal('red@email.com');
                response.body.password.should.not.equal('test');
                response.body.version.should.equal('1.0.1');

                // uncomment for testing jwt
                // global.userOneJwt = response.body.token;
            done();
        });
    });

    it('Login User Two', function(done){
        request(app.listen())
            .put('/api/users/' + config.get('userTwo') + '/login')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.get('userTwo'),
                email: 'blue@email.com',
                password: 'test',
                version: '1.0.1'
            })
            .expect(200)
            .then(function(response){
                response.body.email.should.equal('blue@email.com');
                response.body.password.should.not.equal('test');
                response.body.version.should.equal('1.0.1');

                // uncomment for testing jwt
                // global.userOneJwt = response.body.token;
                done();
            });
    });

    it('Login User Three', function(done){
        request(app.listen())
            .put('/api/users/' + config.get('userThree') + '/login')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.get('userThree'),
                email: 'yellow@email.com',
                password: 'test',
                version: '1.0.1'
            })
            .expect(200)
            .then(function(response){
                response.body.email.should.equal('yellow@email.com');
                response.body.password.should.not.equal('test');
                response.body.version.should.equal('1.0.1');

                // uncomment for testing jwt
                // global.userOneJwt = response.body.token;
                done();
            });
    });

    it('Find User One', function(done){
        request(app.listen())
            .get('/api/users/' + config.get('userOne'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response){
                response.body.email.should.equal('red@email.com');
                response.body.password.should.not.equal('test');
                response.body.version.should.equal('1.0.1');
            done();
        });
    });

    it('Find User Two', function(done){
        request(app.listen())
            .get('/api/users/' + config.get('userTwo'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response){
                response.body.email.should.equal('blue@email.com');
                response.body.password.should.not.equal('test');
                response.body.version.should.equal('1.0.1');
                done();
            });
    });

    it('Find User Three', function(done){
        request(app.listen())
            .get('/api/users/' + config.get('userThree'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response){
                response.body.email.should.equal('yellow@email.com');
                response.body.password.should.not.equal('test');
                response.body.version.should.equal('1.0.1');
                done();
            });
    });

    it('List All Users', function(done){
        request(app.listen())
            .get('/api/users')
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




});
