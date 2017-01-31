const controller = require('./action.controller');
const router = require('express').Router();
const status = require('../util/status');

// uncomment for jwt token authentication for route
// const auth = require('express-jwt-token');
// then call auth.jwtAuthProtected  in route middleware
// EX. router.get('/', auth.jwtAuthProtected, function(req, res) {

router.post('/', function(req, res) {
    controller
    .make(req.body)
    .then(status.pass(res))
    .then(null, status.fail(res));
});

// get single action
router.get('/:id', function(req, res) {
    controller
    .lookup(req.params.id)
    .then(status.pass(res))
    .then(null, status.fail(res));
});

// update an action
router.put('/:id', function(req, res) {
    controller
    .edit(req.params.id, req.body)
    .then(status.pass(res))
    .then(null, status.fail(res));
});

// get all actions
router.get('/', function(req, res) {
    controller
    .listAll()
    .then(status.pass(res))
    .then(null, status.fail(res));
});

// delete an action
router.delete('/:id', function(req, res) {
    controller
    .remove(req.params.id)
    .then(status.pass(res))
    .then(null, status.fail(res));
});

module.exports = router;