var express = require('express');
var path = require('path');
var app = express();

var democrats = ["Bill's Wife","B. Sanders","That third guy"];
var republicans = ["The Zodiac Killer","Basket Kasich","Dolan Trumbo","Marc ur Rubies"];

app.use(express.static('server/public'));


app.get('/', function(request, response){
  response.sendFile(__dirname + '/public/index.html');
});

app.get('/democrats', function(request, response){
  response.send(democrats);
});
app.get('/republicans', function(request, response){
  response.send(republicans);
})
app.get('/winner', function(request, response){
  var winner = '';
  var allCandidates = democrats.concat(republicans);
    var randoWinner = allCandidates[Math.floor(Math.random() * allCandidates.length)];
    //return allCandidates[randoWinner];
  response.send(randoWinner);
});

var server = app.listen(3000, function(){
  var port = server.address().port
  console.log('listening on port', port);
});
