//routes file for mongoose dashboard

//require controller file for logic
const control = require('../controllers/bears.js');

//export routes to server.js
module.exports = function(app){
        //index page displays all bears 
        app.get('/', control.index);
        
        //renders the create a new bear page
        app.get('/bears/new', control.new);
        
        //gets form data and creates a new bear in db
        app.post('/bears', control.add_bear);
        
        //shows a particular Bear object info on page
        app.get('/bears/:id', control.show_bear);
        
        //find request Bear info and passes to update page
        app.get('/bears/edit/:id', control.edit_bear);
        
        //retrieves updated info from form and passes updates to db
        app.post('/bears/:id', control.update_bear);
        
        //destroy function
        app.get('/bears/destroy/:id', control.destroy_bear);

}
