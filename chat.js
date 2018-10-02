var express = require('express');
var session = require('cookie-session'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser'); // Loads the piece of middleware for managing the settings
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

var fs = require('fs');

// Loading the index file . html displayed to the client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Loading socket.io
var io = require('socket.io').listen(server);

// When a client connects, we note it in the console
io.sockets.on('connection', function (socket) {
    console.log('A client is connected!');
});

io.sockets.on('connection', function (socket) {
    socket.emit('message', 'You are connected!');

    // When the server receives a “message” type signal from the client   
    socket.on('message', function (message) {
        console.log('A client is speaking to me! They’re saying: ' + message);
    }); 
});

/* Using sessions */
app.use(session({secret: 'todotopsecret'}))


/* If there is no to do list in the session, 
we create an empty one in the form of an array before continuing */
.use(function(req, res, next){
    if (typeof(req.session.todolist) == 'undefined') {
        req.session.todolist = [];
    }
    next();
})

/* The to do list and the form are displayed */
.get('/todo', function(req, res) { 
    res.render('todo.ejs', {todolist: req.session.todolist});
})

/* Adding an item to the to do list */
.post('/todo/add/', urlencodedParser, function(req, res) {
    if (req.body.newtodo != '') {
        req.session.todolist.push(req.body.newtodo);
    }
    res.redirect('/todo');
})

/* Modifying an item to the to do list */
.get('/todo/modify/:tomodify', function(req, res) {
    if (req.params.tomodify != '') {
		res.render('tomodify.ejs', {tomodify: [req.session.todolist[req.params.tomodify],req.params.tomodify] });
    }
})

/* Modifying an item to the to do list aux*/
.post('/todo/modified/:id',  urlencodedParser, function(req, res) {
    if (req.body.modified != '') {
		req.session.todolist[req.params.id] = req.body.modified ;
    }
    res.redirect('/todo');
})

/* Deletes an item from the to do list */
.get('/todo/delete/:id', function(req, res) {
    if (req.params.id != '') {
        req.session.todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
})

/* switch two items*/
.post('/todo/switch',  urlencodedParser, function(req, res) {
    if (req.body.modified != '') {
		req.session.todolist[req.params.id] = req.body.modified ;
    }
    res.redirect('/todo');
})

/* Redirects to the to do list if the page requested is not found */
.use(function(req, res, next){
    res.redirect('/todo');
})

.listen(8080);