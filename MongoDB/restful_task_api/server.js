//server file for restful task api assignment

//require express
const express = require('express');
const app = express();

//require bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//require db
require('./server/config/database.js');

//require routes
require('./server/config/routes.js')(app);

//server port
app.listen(8000, ()=>console.log('Server running on port 8000.'));

