var mongoose = require('mongoose');

var Comment = new mongoose.Schema({
	user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	comment: String
})

mongoose.model('Comment', Comment)