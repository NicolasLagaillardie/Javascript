var express = require('express');
var session = require('cookie-session'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser'); // Loads the piece of middleware for managing the settings
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

app.use(session({secret: 'todotopsecret'}))

.use(function(req,res,next){
    if (typeof(req.session.todolist) == 'undefined') {
        req.session.todolist = [];
    }
    next();
})

.get('/todo',function(req, res){
	res.render('todo.ejs', {todolist: req.session.todolist});
	})

.post('/todo/add/', urlencodedParser, function(req, res)){
	if (req.session.newtodo != ''){
		res.session.todolist.push(req.body.newtodo) ;
	}
	res.redirect('/todo') ;
}
	