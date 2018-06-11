const mongoose = require('mongoose')
const Quote = mongoose.model('Quotes');

module.exports = function(app){

    app.get('/', function(req, res){
    
        res.render('index');
    });
    
    app.post('/process', function(req, res){
        console.log('Post Data:', req.body);
        
        Quote.create(req.body, function(err){
            if(err){
                console.log(err);
                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
            }else{
                console.log('Successfully added quote.');
                res.redirect('/quotes');
            }
        });

    });
    
    app.get('/quotes', function(req,res){
       
        Quote.find({},function(err,quotes){
            if(err){
                console.log('Something went wrong...');
                res.status(500).send('Something went wrong...'); 
            }else{
                console.log('successfully retrieved quotes from the DB!');
                console.log('quotes object:',quotes);
                res.render('quotes',{quotes:quotes});
            }
        })
    })
}