var Router = require('express').Router();
var mongoose = require('mongoose');
var Promise = require('bluebird');
var siteUser = mongoose.model('siteUser');
siteUser = Promise.promisifyAll(siteUser)

// console.log(Router.use())
Router.use('/comment', require('./comment'))
Router.use('/siteuser', require('./siteuser'))

// console.log(siteUser)
// Router.get('/', function(req,res,next){
// 	siteUser.find().then(function(user){
// 		console.log(user[0])
// 		res.json(user)

// 	})
// })

// Router.post('/', function(req,res,next){
// 	siteUser.create(req.body).then(function(user){
// 		console.log(user)
// 		res.json(user)
// 	}).catch(function(err){
// 		console.log('there is an error')
//         return next(err);
//     });
// })


//send error if route not found
Router.use(function(req,res){
	res.status(404).end()
})


module.exports = Router;