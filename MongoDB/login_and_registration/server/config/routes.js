//require contoller
const control = require('../controllers/users.js');


module.exports = function(app){

    app.get('/', control.index);
    app.post('/register', control.register);
    app.post('/login', control.login);
    app.get('/success', control.success);
    app.get('/logout', control.logout);

}