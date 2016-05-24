var router = require('express').Router(),
    mongoose = require('mongoose'),
    Promise = require('bluebird'),
    UserComment = require('../../../db/models').comment
    UserComment = Promise.promisifyAll(UserComment);

router.get('/', function(req, res, next) {
    UserComment.find().then(function(comments) {
        console.log(comments);
        res.json(comments);
    }).catch(function(err){
        console.log(err);
    });
});

router.post('/', function(req, res, next) {
    UserComment.create(req.body).then(function(comment){
        res.json(comment);
    });
});

router.testFunc = function(num){
    return num+2;
}

module.exports = router;

