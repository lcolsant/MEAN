//models file for restful task api

//import mongoose to work with db
const mongoose = require('mongoose');

//create schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Title is required'],
        minlength: [3, 'Title length must be more than 3'],
        unique: true
    },

    description: {
        type: String,
        trim: true,
        default: ''
    },

    completed: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true
});

//export schema for database.js
module.exports = mongoose.model('Task', taskSchema);