var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var flash = require('express-flash');
var session = require('express-session');

var app = express();

mongoose.connect('mongodb://localhost/quoting_dojo');

const quoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:3},
    quote: {type: String, required: true, minlength:5},
},{timestamps: true});

mongoose.model('Quotes', quoteSchema);
var Quote = mongoose.model('Quotes');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());
app.use(express.static(path.join(__dirname, './static')));
app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge:60000},
}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


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
    
    ///////alternative way to add to the db///////////////////////
    // let new_quote = new Quote({
    //     name: req.body.name, 
    //     quote: req.body.quote,
    // });

    // new_quote.save(function(err){
    //     if(err){
    //         console.log('Something went wrong:', err);
    //         for(var key in err.errors){
    //             req.flash('registration', err.errors[key].message);
    //         }
    //     }else{
    //         console.log('Successfully added quote.');
    //         res.redirect('/quotes');
    //     }
    // })
    ///////////////////////////////////////////////////////////////
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

app.listen(8000, function(){
    console.log('listening on port 8000...');
});