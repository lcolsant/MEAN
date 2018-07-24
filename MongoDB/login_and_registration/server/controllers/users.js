/*******controller file for login and registration**********/

//require model User from models.js
const User = require('mongoose').model('User');
//require bcrypt for hashing password
const bcrypt = require('bcrypt');
const saltRounds = 10;


// const express = require('express')
// const app = express();

// const session = require('express-session');
// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 }
//   }));

// const flash = require('express-flash');
// app.use(flash());

module.exports = {

    index:function(req,res){
        if (req.session.user_id!=null){
            res.redirect('/success');
        }else{
            // res.render('index',{expressFlash:req.flash('Please register or login')});
            res.render('index',{expressFlash});
        }
    },
    
    register:function(req, res){
        
        //validate and encrypt password
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
                res.redirect('/success');

            }
        });
    },

    login:function(req, res){
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
    },

    success:function(req, res){
        if (req.session.user_id==null){
            res.redirect('/');
        }

        //get user data from db and pass to success template
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

    },

    logout:function(req, res){
        //clear all session variables
        req.session.destroy();
        res.redirect('/');
    }
}