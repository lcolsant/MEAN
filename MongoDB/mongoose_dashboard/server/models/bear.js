//use mongoose to work with db
var mongoose = require('mongoose');

//create schema
const bearSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength:3
    },

    type: {
        type: String,
        required: true,
        minlength:5
    },

    weight: {
        type: Number,
        required: true
    },
    
},{timestamps:true});

//export schema
module.exports = mongoose.model('Bears', bearSchema);