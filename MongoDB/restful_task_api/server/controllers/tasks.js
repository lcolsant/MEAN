//controller for restful task api

//require db Task
const Task = require('mongoose').model('Task');

//define and export controller logic to routes.js

module.exports = {
    index: function(req, res){
        Task.find({}, function(err, result){
            if(err){
                res.json(`Something went wrong ${err}`);
            }else{
                res.json(result);
            }
        });
    },

    show: function(req, res){
        Task.findById(req.params.id, function(err, result){
            if(err){
                res.json(`Something went wrong ${err}`);
            }else{
                console.log('Successfully retrieved task item');
                res.json(result);
            }
        })
    },

    create: function(req, res){
        Task.create(req.body, function(err, result){
            if(err){
                res.json(`Something went wrong ${err}`);
            }else{
                console.log('Successfully added task to db');
                res.json(result);
            }
        })
    },

    update: function(req, res){
        Task.findByIdAndUpdate(req.params.id, request.body, function(err,result){
            if(err){
                res.json(`Something went wrong ${err}`);
            }else{
                console.log('Successfully updated task.');
                res.json(result);
            }
        });
    },


    destroy: function(req, res){
        Task.findByIdAndRemove(req.params.id,function(err,result){
            if(err){
                res.json(`Something went wrong ${err}`);
            }else{
                console.log('Successfully removed task from db.');
                res.json(result);
            }
        });
    }

}