const mongoose = require('mongoose')
const Quote = mongoose.model('Quotes');
const control = require('../controllers/quotes.js');

module.exports = function(app){

    app.get('/', function(req, res){
    
        control.index(req, res);
    });
    
    app.post('/process', function(req, res){
     
        control.process(req, res);

    });
    
    app.get('/quotes', function(req,res){
       
        control.quotes(req, res);
    })
}