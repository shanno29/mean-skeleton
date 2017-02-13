const path = require('path');

module.exports = {
    server: {
        distFolder: path.resolve(__dirname, '../public'),
    },
    local_url: ('http://localhost:' + process.env.PORT),
    actionOne: '58797cdd4d1e021ce8648462',
    actionTwo: '58797cdd4d1e021ce8648463',
    actionThree: '58797cdd4d1e021ce8648464',
    userOne: '58797cdd4d1e021ce864845f',
    userTwo: '58797cdd4d1e021ce8648460',
    userThree: '58797cdd4d1e021ce8648461',

    coverage: '/coverage/lcov-report',
    public: '/public',
    doc: '/documentation',

    jwtSecret: 'secret',

    version: '1.0.1',
};
