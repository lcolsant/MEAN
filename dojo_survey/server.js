var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
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

app.post("/users", function (request, response){

    var data = {
        fname:request.body.fname,
        location:request.body.location,
        language:request.body.language,
        comment:request.body.desc,

    }

    response.render('showData',{data:data});
})

app.post("/return", function (request, response){
    response.redirect('/');
})

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(8000, function() {
    console.log("listening on port 8000");
});