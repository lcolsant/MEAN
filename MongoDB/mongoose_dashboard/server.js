//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

//set static path and bodyparser
app.use(express.static(path.join(__dirname,'./static')));
app.use(bodyParser.urlencoded({extended:true}));

//set views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//server port on 8000
app.listen(8000,function(){
    console.log('listening on port 8000...');
});

//import db
require('./server/config/mongoose.js');
//import routes
require('./server/config/routes.js')(app);