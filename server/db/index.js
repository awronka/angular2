var chalk = require('chalk');
var Promise = require('bluebird');
var mongoose = require('mongoose');
var path = require('path');


var db = mongoose.connect("mongodb://localhost:27017/nodesimp-app").connection;

require('./models');

var startDb = new Promise(function(resolve,reject){
	db.on('connected', resolve);
	db.on('error', reject);
})

console.log(chalk.yellow('opening mongo connection'));

startDb.then(function(){
	console.log(chalk.green('this is working'))
})

module.exports = startDb;