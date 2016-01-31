'use strict';

var chalk = require('chalk');

var startDb = require('./db');
var app = require('./app');

var server = require('http').createServer();

var createApplication = function() {
  server.on('request', app);
};

var startServer = function () {
    // Allow user to specify port number from console
    var PORT = process.argv[2] && !isNaN(Number(process.argv[2]))? Number(process.argv[2]) : process.env.PORT || 1337;
    server.listen(PORT, function () {
        console.log(chalk.green('Server started on port', chalk.blue(PORT)));
    });
};

startDb.then(createApplication)
.then(startServer)
.catch(function(err){
  console.error(chalk.red(err.stack));
  process.kill(1);
});


// function get(artist, callback) {

//   request('http://itunes.apple.com/search?term='+ artist + '&attribute=artistTerm&entity=album&limit=300', function(err, response, body) {
   
//     callback( JSON.parse(body) )
//   })

// }

// app.get('/', function(req,res,next){
//  res.sendFile(path.join(__dirname+'/index.html'))
  
// })

// app.get('/albums/:artist', function(req,res,next){
//     get(req.params.artist, function(data){
//         res.json(data)
//     })
// })



// var express = require('express')
// var app = express();
// var path = require('path')


// app.get('/', function(req,res,next){
//   res.sendFile(path.join(_dirname+'/index.html'))
// })


// app.use(express.static('node_modules'))

// var port  = 8888;

// var server = app.listen(port, function(){
//   console.log('we are listening at port' + port)
// })