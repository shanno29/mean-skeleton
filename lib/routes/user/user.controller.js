const User = require('../../models/user/index.js');
// const User = require('mongoose').model('User');

// uncomment this line for jwt
// const jwt = require('jsonwebtoken');

// user controller for CRUD operations
module.exports = {

    // make a user
    make: function(data) {
        return User
            .find({email: data.email})
            .then(function(users) {
                if (users.length > 0) throw new Error('That Email Is Already In Use');
                data.password = User.generateHash(data.password);
                return User.create(data);
            });
    },

    // login a user
    login: function(id, data) {
        return User
            .findById(id)
            .then(function(user) {
                // checks user password combination against password hash in database
                if (!User.validPassword(data.password, user.password))throw new Error('Incorrect Password');

                // check user client information
                if (!User.checkClient(data.version))throw new Error('Outdated Client');


                // uncomment this line to enable jwt token generation
                // user.token = jwt.sign(user, config.get('jwtSecret'), {expiresIn: 10080});

                return user;
            });
    },

    // edit a user
    edit: function(id, data) {
        return User
            .findById(id)
            .then(function(user) {
                user.version = data.version ? data.version : user.version;
                return user.save();
            });
    },

    // lookup a user
    lookup: function(id) {
        return User
            .findById(id);
    },

    // list all users
    listAll: function() {
        return User
            .find({});
    },

    // remove a user
    remove: function(id) {
        return User
            .findByIdAndRemove(id);
    },

};
