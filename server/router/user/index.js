var Router = require('express').Router;


Router.get('/', function(req,res,next){
	User.find().then(function(user){
		console.log(user[0])
		res.json(user)

	})
})

Router.post('/', function(req,res,next){
	User.create(req.body).then(function(user){
		console.log(user)
		res.json(user)
	})
})

