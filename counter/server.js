var express = require("express");
var app = express();
var session = require('express-session');

app.use(session({
  secret: 'thisissecret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));


app.get("/", function (request, response){
    if (session['counter'] == null){
        session['counter']=1;
    }else{
        session['counter']+=1;
    }

    response.render('index',{counter:session['counter']});
})

app.post("/increment", function (request, response){
    session['counter']+=1
    response.redirect('/');
})

app.post("/reset", function (request, response){
    session['counter']=0;
    //session['counter'].destroy();
    response.redirect('/');
})

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(8000, function() {
    console.log("listening on port 8000");
});