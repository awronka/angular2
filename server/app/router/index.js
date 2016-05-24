var Router = require('express').Router();
var mongoose = require('mongoose');
var Promise = require('bluebird');
var siteUser = mongoose.model('siteUser');
siteUser = Promise.promisifyAll(siteUser)

// console.log(Router.use())
Router.use('/comment', require('./comment'))
Router.use('/siteuser', require('./siteuser'))


//send error if route not found
Router.use(function(req,res){
	res.status(404).end()
})


module.exports = Router;