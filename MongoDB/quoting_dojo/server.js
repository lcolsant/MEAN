var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var flash = require('express-flash');
var session = require('express-session');

var app = express();

mongoose.connect('mongodb://localhost/quoting_dojo');

const quoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:3},
    quote: {type: String, required: true, minlength:5},
},{timestamps: true});

mongoose.model('Quotes', quoteSchema);
var Quote = mongoose.model('Quotes');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());
app.use(express.static(path.join(__dirname, './client/static')));
app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge:60000},
}));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

app.listen(8000, function(){
    console.log('listening on port 8000...');
});

require('./server/config/routes.js')(app)