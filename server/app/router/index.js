var Router = require('express').Router();
var mongoose = require('mongoose');
var request = require('request');
var yahooFinance = require('yahoo-finance');
var Promise = require('bluebird');
var siteUser = mongoose.model('siteUser');
siteUser = Promise.promisifyAll(siteUser)

// console.log(Router.use())
Router.use('/comment', require('./comment'))
Router.use('/siteuser', require('./siteuser'))

Router.use('/getQuote/:symbol', function(req,res,next){
	yahooFinance.snapshot({
  		  symbol: (req.params.symbol).toUpperCase(),
		  fields: ['s', 'n', 'd1', 'l1', 'y', 'r'],
		}, function (err, snapshot) {
		  console.log(snapshot)
		  res.send(snapshot)
		});
})

Router.use('/getNewQuotes', function(req,res,next){
	console.log(req.body)
	yahooFinance.snapshot({
  		  symbols: req.body,
		  fields: ['s', 'n', 'd1', 'l1', 'y', 'r'],
		}, function (err, snapshot) {
		  console.log(snapshot)
		  res.send(snapshot)
		});
})

//send error if route not found
Router.use(function(req,res){
	res.status(404).end()
})


module.exports = Router;