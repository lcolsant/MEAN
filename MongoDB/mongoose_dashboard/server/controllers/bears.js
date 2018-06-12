//controller for mongoose dashboard

//require mongoose for db access
const mongoose = require('mongoose');
//define schema and create Bear object
let Bear = mongoose.model('Bears');

module.exports = {

    index: function(req, res){
        Bear.find({}, function(err, results){
            if(err){
                console.log('Something went wrong:',err);
            }else{
                console.log(results);
                res.render('index',{bears:results});
            }
        })
    },

    new: function(req, res){
        res.render('create');
    },

    add_bear: function(req, res){
        Bear.create(req.body, function(err){
            if(err){
                console.log(err);
    
            }else{
                console.log('Successfully added bear.');
                res.redirect('/');
            }
        });
    },

    show_bear: function(req, res){
        Bear.find({_id:req.params.id}, function(err, results){
            if(err){
                console.log('Something went wrong:',err);
            }else{
                console.log(results);
                res.render('show',{bears:results});
            }
        });
    },

    edit_bear: function(req, res){

        Bear.find({_id:req.params.id}, function(err, results){
            if(err){
                console.log('Something went wrong:',err);
            }else{
                console.log(results);
                res.render('edit',{bears:results});
            }
        });
    },

    update_bear: function(req, res){
        Bear.update({_id:req.params.id}, req.body, function(err, results){
            if(err){
                console.log('Something went wrong:',err);
            }else{
                console.log('Updated Successfully.');
                res.redirect('/');
            }
        })
    },

    destroy_bear: function(req, res){
        Bear.remove({_id:req.params.id}, function(err, results){
            if(err){
                console.log('Something went wrong:',err);
            }else{
                console.log('Successfully deleted bear.');
                res.redirect('/');
            }
        });
    },

}

