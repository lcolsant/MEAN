var express = require("express");

var app = express();

// app.get('/', function(request, response) {
//    response.render('index');
// })

app.get("/cars", function (request, response){
  
    response.render('cars');
})


app.get("/mercedes", function (request, response){
  
    var cars_array = [
        {make: "mercedes", 
        model: "GTS", 
        year: 2016, 
        color: "silver",
        image:"mercedes.jpg"},
    ];
    response.render('car_data',{cars: cars_array});
})

app.get("/lambo", function (request, response){
  
    var cars_array = [
        {make: "lamborghini", 
        model: "aventador", 
        year: 2017, 
        color: "orange",
        image:"lambo.jpg"},
    ];
    response.render('car_data',{cars: cars_array});
})

app.get("/ferrari", function (request, response){
  
    var cars_array = [
        {make: "ferrari", 
        model: "488", 
        year: 2018, 
        color: "blue",
        image:"ferrari.jpg"},
    ];
    response.render('car_data',{cars: cars_array});
})

app.get("/bmw", function (request, response){
  
    var cars_array = [
        {make: "bmw", 
        model: "M3", 
        year: 2016, 
        color: "blue",
        image:"bmw.jpg"},
    ];
    response.render('car_data',{cars: cars_array});
})

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(8000, function() {
    console.log("listening on port 8000");
});