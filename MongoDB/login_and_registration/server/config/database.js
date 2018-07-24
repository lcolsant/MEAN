/**********db connect for login and registration***********/

//require mongoose for db connection
const mongoose = require('mongoose');

//require filesystem file
const fs = require('fs');

const path = require('path');

//Regular expression that checks for .js extension
const reg = new RegExp("\\.js$", "i");

//connect to db
mongoose.connect('mongodb://localhost/login_reg_db');

//successful connection message
mongoose.connection.on('connected', ()=>console.log('Connected to MongoDB.'));

//on disconnect from db
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });

//create a variable that points to the models folder
const modelsPath = (path.join(__dirname,'./../models'));

//read all files in models dir and require if it is javascript file
fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)) {
      require(path.join(modelsPath, file));
    }
});