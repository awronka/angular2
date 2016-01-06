var express = require('express');
var app = express();
var serveStatic = require('serve-static');
var path = require('path');
var request = require('request')

app.get('/', function(req,res,next){
	console.log("This is the dirname"+__dirname)
	res.sendFile(path.join(__dirname+'/main.html'))
	
})


app.use(express.static('public'))

var port = 7777;

var server = app.listen(port, function(){
	var host = server.address().adress;
	var port = server.address().port;
	console.log('Example is listenting at', port, host)
})

app.get('/albums/:artist', function(req,res,next){
    get(req.params.artist, function(data){
        res.json(data)
    })
})

function get(artist, callback) {

  request('http://itunes.apple.com/search?term='+ artist + '&attribute=artistTerm&entity=album&limit=300', function(err, response, body) {
   
    callback( JSON.parse(body) )
  })

}
