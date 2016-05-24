// var crypto = require('crypto');
// var ObjectId = mongoose.Schema.Types.ObjectId;
var mongoose = require('mongoose');
var Promise = require('bluebird');

var siteUser = new mongoose.Schema({
    email: {
    	type: String,
    	unique: true,
    	required: true
    },
    firstName: String,
    lastName: String,
    photo: String});

siteUser.pre('save', function(next){
	console.log(this)

	console.log(next, "this hit")
	next()
})

module.exports = mongoose.model('siteUser', siteUser);
