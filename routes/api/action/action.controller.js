const model = require('./action.model').Action;

// action controller for CRUD operations
module.exports = {

    // make a new action
    make: function(data) {
        return model
            .create(data);
    },

    // edit an action
    edit: function(id, data) {
        return model
            .findById(id)
            .then(function(action) {
                action.params.push(data.params[data.params.length -1]);
                return action.save();
            });
    },

    // lookup single action
    lookup: function(id) {
        return model
            .findById(id);
    },

    // list all actions
    listAll: function() {
        return model
            .find({});
    },

    // remove action
    remove: function(id) {
        return model
            .findByIdAndRemove(id);
    },

};
