const router = require('express').Router();
const reactRouter = require('./react');
const actionRouter = require('./api/action/action.route');
const userRouter = require('./api/user/user.route');

// Action resource
router.use('/api/actions', actionRouter);
// User resource
router.use('/api/users', userRouter);

// React client
router.use('/', reactRouter);

module.exports = router;
