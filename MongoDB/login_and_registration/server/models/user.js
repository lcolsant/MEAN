/**********model file for login and registration************/

//import mongoose to work with db
const mongoose = require('mongoose');

//require bcrypt for hashing password
const bcrypt = require('bcrypt');
const saltRounds = 10;

//create schema
const userSchema = new mongoose.Schema({
    
    fname: {
        type: String,
        required: [true, 'You must enter a first name.'],
    },

    lname: {
        type: String,
        required: [true, 'You must enter a last name.'],
    },

    email: {
        type: String,
        required: [true, 'You must enter an email.'],
        unique: [true, 'This email has already been registered.'],
    },
    
    password: {
        type: String,
        required: [true, 'You must enter a password'],
        minlength: [3, 'Password must be between 3-255 characters.'],
        maxlength: [255, 'Password must be between 3-255 characters.']
    },

    pass_confirm: {
        type: String,
        required: [true, 'You must enter a password confirmation'],
    },

},{timestamps:true});

userSchema.pre('save', function(next){
    var user = this;

    bcrypt.hash(user.password, saltRounds, function(err, hash){
        user.password = hash;
        user.pass_confirm = undefined;
        next();
    });
});


//export schema for database.js
module.exports = mongoose.model('User', userSchema);
