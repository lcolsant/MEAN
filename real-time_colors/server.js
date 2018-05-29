const express = require('express');
const path = require('path');

const port = 8000;
const app = express();

app.use(express.static(path.join(__dirname + '/static')));
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

const server = app.listen(port, function(){
    console.log(`listening on port ${port}`);
});


const io = require('socket.io')(server);

io.sockets.on('connection', function(socket){
    socket.emit('greeting', {msg:'new socket connection made.'});
    socket.on('connected', function(data){
        console.log(data.msg);
    });
    
    socket.on('green', function(){
        socket.emit('changeColor',{msg:'green'})
    });
    socket.on('blue', function(){
        socket.emit('changeColor',{msg:'blue'})
    });
    socket.on('yellow', function(){
        socket.emit('changeColor',{msg:'yellow'})
    });
});

app.get("/", function (request, response){

    response.render('index');
});