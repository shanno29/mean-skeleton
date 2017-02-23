const router = require('express').Router();
const middleware = require('./middleware');
const reactRouter = require('./react').Router;
const actionRouter = require('./action').Router;
const userRouter = require('./user').Router;

// Middleware
router.use(middleware);

// Action resource
router.use('/api/actions', actionRouter);
// User resource
router.use('/api/users', userRouter);

// React client
router.use('/', reactRouter);

module.exports = router;
