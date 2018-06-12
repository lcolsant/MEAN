//import mongoose to work with db
var mongoose = require('mongoose');

//create schema
const quoteSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength:3
    },
    
    quote: {
        type: String,
        required: true,
        minlength:5
    },
    
},{timestamps: true});

//export schema for mongoose.js
module.exports = mongoose.model('Quotes', quoteSchema);
