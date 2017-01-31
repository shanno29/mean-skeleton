const config = require('config');
const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, unique: true},
    email: String,
    password: String,
    version: String,
    created: Date,
    updated: Date
});

// hook that's automatically called before user.save() is called
userSchema.pre('save', function(next) {

    // useful for testing purposes
    // need to find better way to check whether this._id has been set
    // due to lint warning 'Comparison this._id == null may cause unexpected type coercion'
    if (this._id == null) this._id = mongoose.Types.ObjectId();

    // timestamp stuff
    this.updated = Date.now();
    next();
});

// hook that's automatically called before user.find, user.findById, user.findOne, ...
userSchema.post('init', function(){
    //TODO
});

// check that incoming client version is up to date
userSchema.statics.checkClient = function (version) { return version === config.get('version'); };

// generate password hash for saving in database
userSchema.statics.generateHash = function(password) { return bcrypt.hashSync(password, bcrypt.genSaltSync(4), null); };

// checks that incoming password matches user password in database
userSchema.statics.validPassword = function(one, two) { return bcrypt.compareSync(one, two); };

// exports.User used fix webstorm mongoose linting issue
module.exports.User = mongoose.model('User', userSchema);
