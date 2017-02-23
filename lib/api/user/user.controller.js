const User = require('./user.model');

// uncomment this line for jwt
// const jwt = require('jsonwebtoken');

// user.model controller for CRUD operations
module.exports = {

    // make a user.model
    make: function(data) {
        return User
            .find({email: data.email})
            .then(function(users) {
                if (users.length > 0) throw new Error('That Email Is Already In Use');
                data.password = User.generateHash(data.password);
                return User.create(data);
            });
    },

    // login a user.model
    login: function(id, data) {
        return User
            .findById(id)
            .then(function(user) {
                // checks user.model password combination against password hash in database
                if (!User.validPassword(data.password, user.password))throw new Error('Incorrect Password');

                // check user.model client information
                if (!User.checkClient(data.version))throw new Error('Outdated Client');


                // uncomment this line to enable jwt token generation
                // user.model.token = jwt.sign(user.model, config.get('jwtSecret'), {expiresIn: 10080});

                return user;
            });
    },

    // edit a user.model
    edit: function(id, data) {
        return User
            .findById(id)
            .then(function(user) {
                user.version = data.version ? data.version : user.version;
                return user.save();
            });
    },

    // lookup a user.model
    lookup: function(id) {
        return User
            .findById(id);
    },

    // list all users
    listAll: function() {
        return User
            .find({});
    },

    // remove a user.model
    remove: function(id) {
        return User
            .findByIdAndRemove(id);
    },

};
