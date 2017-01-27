var path = require('path');

module.exports = {
    mongo: {
        prod_url: 'mongodb://localhost/mean-prod',
        test_url: 'mongodb://localhost/mean-test'
    },
    server: {
        port: 3000,
        distFolder: path.resolve(__dirname, '../client/dist'),
        dbPath: path.resolve(__dirname, 'database')
    },
    actionOne:'58797cdd4d1e021ce8648462',
    actionTwo: '58797cdd4d1e021ce8648463',
    actionThree: '58797cdd4d1e021ce8648464',
    userOne: '58797cdd4d1e021ce864845f',
    userTwo:'58797cdd4d1e021ce8648460',
    userThree: '58797cdd4d1e021ce8648461',

    coverage: '/coverage/lcov-report',
    public: '/public',
    doc: '/documentation',

    jwtSecret: 'secret',

    version: '1.0.1'


};