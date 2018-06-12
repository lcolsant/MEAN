//require mongoose for db
var mongoose = require('mongoose');
//require filesystem module to work with filesystem
var fs = require('fs');

var path = require('path');

//connect to db
mongoose.connect('mongodb://localhost/quoting_dojo');

// create a variable that points to the models folder
var models_path = (path.join(__dirname, './../models'));

//below is a hardcoded version for 1 file only
// require(models_path + '/' + 'quote.js');

//read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0){
	    // require the file (this runs the model file which registers the schema)
		require(models_path + '/' + file);
	}
})