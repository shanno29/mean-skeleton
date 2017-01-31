const config = require('config');
const request = require('supertest');
const app = require('../../app');

describe('Purge Database Util', function() {

    it('Delete Action One', function(done) {
        request(app.listen())
            .delete('/api/actions/' + config.get('actionOne'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response) {
                response.body.should.have.property('name');
                response.body.should.have.property('params');
                done();
            });
    });

    it('Delete Action Two', function(done) {
        request(app.listen())
            .delete('/api/actions/' + config.get('actionTwo'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response) {
                response.body.should.have.property('name');
                response.body.should.have.property('params');
                done();
            });
    });

    it('Delete Action Three', function(done) {
        request(app.listen())
            .delete('/api/actions/' + config.get('actionThree'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response) {
                response.body.should.have.property('name');
                response.body.should.have.property('params');
                done();
            });
    });

    it('Delete User One', function(done) {
        request(app.listen())
            .delete('/api/users/' + config.get('userOne'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response) {
                response.body.should.have.property('email');
                response.body.should.have.property('password');
                response.body.should.have.property('version');
                done();
            });
    });

    it('Delete User Two', function(done) {
        request(app.listen())
            .delete('/api/users/' + config.get('userTwo'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response) {
                response.body.should.have.property('email');
                response.body.should.have.property('password');
                response.body.should.have.property('version');
                done();
            });
    });

    it('Delete User Three', function(done) {
        request(app.listen())
            .delete('/api/users/' + config.get('userThree'))
            .set('Accept', 'application/json')
            // uncomment for jwt authentication
            //.set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(function(response) {
                response.body.should.have.property('email');
                response.body.should.have.property('password');
                response.body.should.have.property('version');
                done();
            });
    });

});
