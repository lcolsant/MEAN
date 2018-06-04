const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
mongoose.connect('mongodb://localhost/mongoose_dashboard');

const bearSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:3},
    type: {type: String, required: true, minlength:5},
    weight: {type: Number, required: true},
},{timestamps:true});

mongoose.model('Bears', bearSchema);
let Bear = mongoose.model('Bears');
mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname,'./static')));
app.use(bodyParser.urlencoded({extended:true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//index page: displays all bear objects in the db
app.get('/', function(req, res){

    Bear.find({}, function(err, results){
        if(err){
            console.log('Something went wrong:',err);
        }else{
            console.log(results);
            res.render('index',{bears:results});
        }
    })
});


//renders the create a new bear page
app.get('/bears/new', function(req, res){
    res.render('create');
});


//gets form data and creates a new bear in db
app.post('/bears', function(req, res){
    Bear.create(req.body, function(err){
        if(err){
            console.log(err);

        }else{
            console.log('Successfully added bear.');
            res.redirect('/');
        }
    })
});

//shows a particular Bear object info on page
app.get('/bears/:id', function(req, res){

    Bear.find({_id:req.params.id}, function(err, results){
        if(err){
            console.log('Something went wrong:',err);
        }else{
            console.log(results);
            res.render('show',{bears:results});
        }
    })

});

//find request Bear info and passes to update page
app.get('/bears/edit/:id', function(req, res){

    Bear.find({_id:req.params.id}, function(err, results){
        if(err){
            console.log('Something went wrong:',err);
        }else{
            console.log(results);
            res.render('edit',{bears:results});
        }
    })

});


//retrieves updated info from form and passes updates to db
app.post('/bears/:id', function(req, res){

    Bear.update({_id:req.params.id}, req.body, function(err, results){
        if(err){
            console.log('Something went wrong:',err);
        }else{
            console.log('Updated Successfully.');
            res.redirect('/');
        }
    })
});

//destroy function
app.get('/bears/destroy/:id', function(req, res){
    Bear.remove({_id:req.params.id}, function(err, results){
        if(err){
            console.log('Something went wrong:',err);
        }else{
            console.log('Successfully deleted bear.');
            res.redirect('/');
        }
    })
});


app.listen(8000,function(){
    console.log('listening on port 8000...');
});