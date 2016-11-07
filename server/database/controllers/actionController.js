var Action = require('../models/actionModel');

/**
 * actionController.js
 *
 * @description :: Server-side logic for managing actions.
 */
module.exports = {

    /**
     * actionController.list()
     */
    list: function (req, res) {
        Action.find(function (err, actions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting action.',
                    error: err
                });
            }
            return res.json(actions);
        });
    },

    /**
     * actionController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        Action.findOne({_id: id}, function (err, action) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting action.',
                    error: err
                });
            }
            if (!action) {
                return res.status(404).json({
                    message: 'No such action'
                });
            }
            return res.json(action);
        });
    },

    /**
     * actionController.create()
     */
    create: function (req, res) {
        var action = new Action({
			name : req.body.name,
			params : req.body.params,
			user_id : req.body.user_id
        });

        action.save(function (err, action) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating action',
                    error: err
                });
            }
            return res.status(201).json(action);
        });
    },

    /**
     * actionController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        Action.findOne({_id: id}, function (err, action) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting action',
                    error: err
                });
            }
            if (!action) {
                return res.status(404).json({
                    message: 'No such action'
                });
            }

            action.name = req.body.name ? req.body.name : action.name;
			action.params = req.body.params ? req.body.params : action.params;
			action.user_id = req.body.user_id ? req.body.user_id : action.user_id;
			
            action.save(function (err, action) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating action.',
                        error: err
                    });
                }

                return res.json(action);
            });
        });
    },

    /**
     * actionController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        Action.findByIdAndRemove(id, function (err, action) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the action.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
