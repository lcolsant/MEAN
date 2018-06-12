//require fields
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var flash = require('express-flash');
var session = require('express-session');

var app = express();
//app.use
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());
app.use(express.static(path.join(__dirname, './client/static')));
app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge:60000},
}));

//app.set
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

//server running on port 8000
app.listen(8000, function(){
    console.log('listening on port 8000...');
});

//require db
require('./server/config/mongoose.js')

//require routes set up in routes.js
require('./server/config/routes.js')(app)
