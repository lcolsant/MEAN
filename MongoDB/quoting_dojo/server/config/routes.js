//require mongoose for db and load schema into Quote
const mongoose = require('mongoose')
const Quote = mongoose.model('Quotes');

//require logic controllers
const control = require('../controllers/quotes.js');

//define and export routes to server.js
module.exports = function(app){

    app.get('/', control.index);
    app.post('/process',  control.process);
    app.get('/quotes',  control.quotes);
}