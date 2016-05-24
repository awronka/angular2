var router = require('express').Router();
var mongoose = require('mongoose');
var Promise = require('bluebird');
var siteUser = mongoose.model('siteUser')
	siteUser = Promise.promisifyAll(siteUser)
	Promise.promisifyAll(siteUser.prototype)


router.get('/', function(req,res,next){
	siteUser.find().then(function(user){
		console.log(user[0])
		res.json(user)

	})
})

router.post('/', function(req,res,next){
	var newUser = new siteUser();
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
	siteUser.findOneAndRemoveAsync({email:req.params.email}).then(function(user){
		res.json(user)
	})
	.catch(function(err){
		res.status(500).send({
			message: 'user does not exist'
		})
	})
})


module.exports = router;
