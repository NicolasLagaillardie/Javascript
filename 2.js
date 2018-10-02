console.log ('Welcome to Node.js!');

var http = require('http');


var server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.end('Hi everybody!');
});
server.listen(8080);


var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end('<p>Here is a paragraph of <strong>HTML</strong>!</p>');
});
server.listen(80);


var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write('<!DOCTYPE html>'+
	'<html>'+
	' <head>'+
	' <meta charset="utf-8" />'+
	' <title>My Node.js page!</title>'+
	' </head>'+ 
	' <body>'+
	' <p>Here is a paragraph of <strong>HTML</strong>!</p>'+
	' </body>'+
	'</html>');
	res.end();
});
server.listen(800);


var EventEmitter = require('events').EventEmitter;

var game = new EventEmitter();
	game.on('gameover', function(message){
		console.log(message);
});

game.emit('gameover', 'You lose!');


var url = require('url') ;
var test = require('test') ;
var testInside = require('./test-inside') ;

test.sayHello() ;
test.sayGoodbye() ;

var markdown = require('markdown').markdown ;

console.log(markdown.toHTML('A paragraph in **markdown** !')) ;


var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\’re in reception. How can I help you?');
});

app.get('/basement', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\’re in the wine cellar. Those bottles are mine!');
});

app.get('/floor/:floornum/kitchen', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\’re in the kitchen on floor n°' + req.params.floornum);
});

app.get('/floor/:floornum/bedroom', function(req, res) {
    res.render('bedroom.ejs', {floor: req.params.floornum});
});

app.get('/count/:number', function(req, res) {
    var names = ['Robert', 'Jack', 'David'];
    res.render('page.ejs', {counter: req.params.number, names: names});
});

// ...All the route management code (app. get) is above

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    //res.send(404, 'Page cannot be found!');
	res.status(404).send('Page cannot be found!') ;
});

app.listen(900);


var morgan = require('morgan'); // loads the piece of middleware for logging
var favicon = require('serve-favicon'); // loads the piece of middleware for the favicon

var app = express();

app.use(morgan('combined')) // loads the piece of middleware for logging
.use(express.static(__dirname + '/public')) // Specifies that the /public folder includes static files (basic piece of middleware loaded)
.use(favicon(__dirname + '/public/favicon.ico')) // Activates the favicon specified
.use(function(req, res){ // finally answers
    res.send('Hello');
});

app.listen(1000);


