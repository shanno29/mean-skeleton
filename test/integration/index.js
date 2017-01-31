// Global Variables
global.userOneJwt = '';
global.userTwoJwt = '';
global.userThreeJwt = '';

// Integration Tests
require('./../integration/user.route.test');
require('./../integration/action.route.test');

// Purge Database
require('./../util/purge.database.test');