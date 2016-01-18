var express = require('express');
var app = express();
var serveStatic = require('serve-static');
var path = require('path');
var request = require('request')

app.get('/', function(req,res,next){
	res.sendFile(path.join(__dirname+'/index.html'))
	
})

app.get('/albums/:artist', function(req,res,next){
    get(req.params.artist, function(data){
        res.json(data)
    })
})


app.use(express.static('node_modules'))
app.use(express.static('browser'))
app.use(express.static('public'))

var port = 7777;

var server = app.listen(port, function(){
	var host = server.address().adress;
	var port = server.address().port;
	console.log('Example is listenting at', port, host)
})



function get(artist, callback) {

  request('http://itunes.apple.com/search?term='+ artist + '&attribute=artistTerm&entity=album&limit=300', function(err, response, body) {
   
    callback( JSON.parse(body) )
  })

}


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