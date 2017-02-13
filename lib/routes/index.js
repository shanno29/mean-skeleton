const router = require('express').Router();
const reactRouter = require('./react');
const actionRouter = require('./action/action.route');
const userRouter = require('./user/user.route');

// Action resource
router.use('/routes/actions', actionRouter);
// User resource
router.use('/routes/users', userRouter);

// React client
router.use('/', reactRouter);

module.exports = router;
