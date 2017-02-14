const Action = require('../../models/action/index.js');
// const Action = require('mongoose').model('Action');

// action controller for CRUD operations
module.exports = {

		validate: function(data) {
			let action = new Action(data);
			console.log(action);
			action.validate(function(err) {
				if (err) return console.log(err);
				console.log('Validated');
			});
			return action;
		},

		// make a new action
		make: function(data) {
				return Action.create(data);
		},

		// edit an action
		edit: function(id, data) {
				return Action
						.findById(id)
						.then(function(action) {
								action.params.push(data.params[data.params.length -1]);
								return action.save();
						});
		},

		// lookup single action
		lookup: function(id) {
				return Action
						.findById(id);
		},

		// list all actions
		listAll: function() {
				return Action
						.find({});
		},

		// remove action
		remove: function(id) {
				return Action
						.findByIdAndRemove(id);
		},

};
