/******************************************
server file for login and registration app
********************************************/

//required dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();

//app set/use
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

//assign port
app.listen(8000, ()=>console.log('Listening on port 8000...'));

//require db
require('./server/config/database.js');

//require routes
require('./server/config/routes.js')(app);
