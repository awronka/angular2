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
    portfolio: mongoose.Schema.Types.Mixed,
    lastAccessed: Date,
    stock_count: Number,
    lastName: String,
    photo: String});

siteUser.pre('save', function(next){
	console.log(this)

	console.log(next, "this hit")
	next()
})

module.exports = mongoose.model('siteUser', siteUser);
