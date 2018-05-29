const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();

app.use(express.static(path.join(__dirname + "/static")));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const server = app.listen(port, ()=> console.log(`listening on port ${port}`));
const io = require('socket.io')(server);


io.sockets.on('connection', function (socket){
    //server listens to "posting_form" event
    socket.on("posting_form", function (data){
        //generate a random number
        var random_number = Math.floor((Math.random() * 1000) + 1);
        //will emit the data to the client
        socket.emit('updated_message', {response: data}); 
        socket.emit('random_number', {response: random_number}); 
    });
});
      

  //var session = require('express-session');

// app.use(session({
//   secret: 'thisissecret',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 }
// }));


app.get("/", function (request, response){

    response.render('index');
})

// app.post("/users", function (request, response){

//     var data = {
//         fname:request.body.name,
//         location:request.body.location,
//         language:request.body.language,
//         comment:request.body.desc,

//     }

//     response.render('index',{data:data});
// })

app.post("/return", function (request, response){
    response.redirect('/');
})




