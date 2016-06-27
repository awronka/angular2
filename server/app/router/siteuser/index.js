var router = require('express').Router();
var mongoose = require('mongoose');
var Promise = require('bluebird');
var SiteUser = require('../../../db/models').siteUser;
	SiteUser = Promise.promisifyAll(SiteUser)
	// Promise.promisifyAll(SiteUser.prototype)


router.get('/', function(req,res,next){
	SiteUser.find().then(function(user){
		console.log(user[0])
		res.json(user)

	})
})

router.get('/:email', function(req,res,next){
	console.log('hit this')
	SiteUser.findOne({email: req.params.email}).then(function(user){
		console.log(user[0])
		res.json(user)
	})
})

router.post('/addStock', function(req,res,next){
	SiteUser.findOne({email: req.body.email}).then(function(user){
		user = Promise.promisifyAll(user);
		user.stock_count ? user.stock_count++ : user.stock_count = 1;
		if(!user.portfolio) user.portfolio = [];
		user.portfolio.push(req.body.stock);
		console.log(user)
		res.send('this sucks')
		// user.save().then(function(newuser){
		// res.status(200).json(newuser)
		// })
		// .catch(function(err){
		// 	res.status(500).send({
		// 		message: 'Problem'
		// 	})
		// })
	})
})

router.post('/save/:id', function(req,res,next){
	SiteUser.findByIdAndUpdate(req.params.id, {$set: req.body},function(err, update){
		if(err)console.log(err)
		res.send(update)
	})
})

router.post('/', function(req,res,next){
	var newUser = new SiteUser();
	newUser.email = req.body.email;
	newUser.firstName = req.body.firstName;
	console.log(newUser.prototype)
	newUser = Promise.promisifyAll(newUser)
    // newUser.save(function(err,user, number) {
    // 	console.log("this was how many affected", number)
    //         if (err) {
    //             // you could avoid http status if you want. I put error 500 
    //             return res.status(500).send({
    //                 success: false,
    //                 message: 'User already exist!'
    //             });
    //         }

    //         res.json(user);

    //     });
	console.log(newUser.prototype)
	newUser.saveAsync().then(function(user){
		res.status(200).json(user)
	})
	.catch(function(err){
		res.status(500).send({
			message: 'Email Already In Use'
		})
	})
})

router.delete('/:email', function(req,res,next){
	console.log(req.params)
	SiteUser.findOneAndRemoveAsync({email:req.params.email}).then(function(user){
		res.json(user)
	})
	.catch(function(err){
		res.status(500).send({
			message: 'user does not exist'
		})
	})
})


module.exports = router;
