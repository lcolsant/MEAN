const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.set('trust proxy', 1);
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/userdb', function(err, db){
    if (err){
        console.log('Could not connect to MongoDB.');
    }else{
        console.log('Connected to MongoDB.');
    }
});

//define messageSchema and commentSchema schemas here
const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
    
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

UserSchema.pre('save', function(next){
    var user = this;

    bcrypt.hash(user.password, saltRounds, function(err, hash){
        user.password = hash;
        user.pass_confirm = undefined;
        next();
    });
});

const User = mongoose.model('User', UserSchema);

app.listen(8000, ()=>console.log('Listening on port 8000...'));

//set up routes

app.get('/', function(req, res){

    if (req.session.user_id!=null){
        res.redirect('/success');
    }else{
        res.render('index');
    }
});

app.post('/register', function(req, res){
    //validate data and then insert new user data into mongodb
    
    //validate and encrypt password
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let password = req.body.password;
    let pass_confirm = req.body.pass_confirm;
    
    let user = new User({

        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,    
        password:req.body.password,
        pass_confirm: req.body.password,
    });

    user.save(function(err){
        if(err){
            //if errors, print errors and redirect to index
            console.log(err);
            res.render('index', { errors: user.errors });
        }
        else{
            //if valid, save user to session and redirect to success
            console.log('Successfully added user.');
            req.session.user_id = user._id;
            console.log('user id:', user._id);
            console.log('session id:', req.session.user_id);
            console.log('session data stored...')
            res.redirect('/success');

        }
    });
});

app.post('/login', function(req, res){
    //see if user submitted data has a match in the DB. If so, re-route to success.
    var valid_user = false;
    console.log('email: ',req.body.email);
    //pull record with matching email. If there is a match, then test password.
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log(err);
            res.redirect('/');
        }else{
            console.log('Retrieved user...: ', user);
            console.log('Validating password...');
            bcrypt.compare(req.body.password,user.password,function(err,res){
                if (res==false){
                    console.log('Incorrect Password.');
                    pass_valid(valid_user);
                }else{
                    console.log('Success...password confirmed.');
                    valid_user=true;
                    pass_valid(valid_user);
                }
            });

        }
        //render functions unavailable under bcrypt.compare so called outside after callback executes.
        //need to display message to user if password was incorrect. Currently no message displayed.
        function pass_valid(result){
            if(valid_user==true){
                req.session.user_id = user._id;
                res.render('success', {user:user});
            }else{
                res.render('index');
            }
        }
    });
});

app.get('/success', function(req, res){
    if (req.session.user_id==null){
        res.redirect('/');
    }

    //get user data from db and pass to success template
    console.log('session id in /success', req.session.user_id);
    User.findOne({_id: req.session.user_id}, function(err, user){
        //assign the id of the message that the new comment belongs to
        if(err){
            // console.log(err);
            console.log('something went wrong in /sucess')
            res.redirect('/');
        }else{
            console.log('Retrieved user: ', user);
            res.render('success',{user:user});
        }
    });

});


app.get('/logout', function(req, res){
    //clear all session variables
    req.session.destroy();
    res.redirect('/');
})