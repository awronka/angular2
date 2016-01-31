var Router = require('express').Router();


// Router.use('/user', require('./user'))

//send error if route not found
Router.use(function(req,res){
	res.status(404).end()
})


module.exports = Router;