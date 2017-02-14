const Action = require('./action.model');

// Dispatches requests to model actions
module.exports = {
    validate: function(data) {
        return new Action(data).validate();
    },

    create: function(data) {
        return Action.create(data);
    },

    query: function(query) {
        return Action.find(query);
    },

    get: function(id) {
        return Action.findById(id);
    },

    update: function(id, data) {
        return Action.findById(id)
        .then(function(action) {
            //TODO replace given fields in action with fields in data
            return action.save();
        });
    },

    delete: function(id) {
        return Action.findByIdAndRemove(id);
    },
};
