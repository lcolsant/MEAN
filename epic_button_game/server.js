const express = require('express');
const path = require('path');
//const bodyParser = require('body-parser');
const port = 8000;

const app = express();

app.use(express.static(path.join(__dirname + '/static')));
//app.use(bodyParser.urlencoded({extended:true}));
app.set('views',path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

const server = app.listen(port, ()=>console.log(`listening on port ${port}`));
const io = require('socket.io')(server);

let counter = 0;
io.sockets.on('connection', function(socket){
    
    socket.emit('greeting', {msg:'new socket connection made.'});
    socket.on('connected', function(data){
        console.log(data.msg);
    });
    
    socket.on('increment', function(){
        io.emit('updated', ++counter);
    });
    
    socket.on('reset', function(){
        counter =0;
        io.emit('updated',counter);
    });

    socket.emit('updated',counter);

});

// app.get("/", function (request, response){

//     response.render('index');
// })