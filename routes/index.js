const actionRoute = require('./api/action/action.route');
const userRoute = require('./api/user/user.route');
const router = require('express').Router();

// pass to action route branch
router.use('/actions', actionRoute);

// pass to user route branch
router.use('/users', userRoute);

module.exports = router;
