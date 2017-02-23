const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionSchema = new Schema({
	user: {type: Schema.Types.ObjectId, ref: 'User'},
	command: {type: String, required: true},
}, {
	timestamps: true,
});

module.exports = mongoose.model('Action', actionSchema);
