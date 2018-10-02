var express = require('express') ;
var io = require('socket.io').listen(server) ;
var fs = require('fs') ;

var app = express() ;

io.socket.