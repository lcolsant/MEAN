const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// app.use(express.static(path.join(__dirname,'./static')));
app.use(bodyParser.urlencoded({extended:true}));

app.set('views',path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board', function(err, db){
    if (err){
        console.log('Could not connect to MongoDB.');
    }else{
        console.log('Connected to MongoDB.');
    }
});

//define messageSchema and commentSchema schemas here
const Schema = mongoose.Schema;
const MessageSchema = new mongoose.Schema({
    name: String,
    message:String,
    _comments:[{type: Schema.Types.ObjectId, ref: 'Comment'}]
},{timestamps:true});

const CommentSchema = new mongoose.Schema({
    name: String,
    comment:String,
    _message:{type: Schema.Types.ObjectId, ref: 'Message'}
},{timestamps:true});

//define required fields here
MessageSchema.path('name').required(true, 'Name cannot be blank.');
MessageSchema.path('message').required(true, 'Message cannot be blank.');
CommentSchema.path('name').required(true, 'Name cannot be blank.');
CommentSchema.path('comment').required(true, 'Comment cannot be blank.');

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);

const Message = mongoose.model('Message');
const Comment = mongoose.model('Comment');

app.listen(8000,function(){
    console.log('listening on port 8000...');
});

//define all routes here

app.get('/', function(req, res){
    Message.find({}).populate('_comments').exec(function(err,messages){
        if(err){
            console.log('something went wrong', err);
        }else{
            res.render('index.ejs',{messages:messages});
        }
    });
});

app.post('/message', function(req, res){
    //insert into mongodb
    let newMessage = new Message({
        name: req.body.name,
        message: req.body.message
    });
    
    newMessage.save(function(err){
        if(err){
            console.log(err);
            res.render('index.ejs', { errors: newMessage.errors });
        }else{
            console.log('Successfully added message.');
            res.redirect('/');
        }
    });

});

app.post('/comment/:id', function(req, res){
    
    //create new Comment object
    let newComment = new Comment({
        name: req.body.name,
        comment: req.body.comment
    });


    //Find appropriate Message that the comment belongs to and push to _comment array to update
    const messageID = req.params.id;
    Message.findOne({_id: messageID }, function(err, message){
        //assign the id of the message that the new comment belongs to
        newComment._message = message._id;
        //update the _comment propert of the Message object and push to _comments array
        Message.update({ _id: message._id }, { $push: { _comments: newComment }}, function(err) {
            if(err){
                console.log(err);
            }
        });
    });

    //Save new Comment object to the db
    newComment.save(function(err){
        if(err){
            console.log(err);
            res.render('index.ejs', { errors: newComment.errors });
        }else{
            console.log('Successfully added comment.');
            res.redirect('/');
        }
    });

});