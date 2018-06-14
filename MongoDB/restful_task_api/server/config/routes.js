//routes for task api

//require logic controllers
const control = require('../controllers/tasks.js');


//export routes to server.js
module.exports = function(app){

    app.get('/', control.index),
    app.get('/:id', control.show),
    app.post('/', control.create),
    app.put('/:id', control.update),
    app.delete('/:id', control.destroy)

}