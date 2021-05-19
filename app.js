// get the http module:
var http = require('http');

// fs module allows us to read and write content for responses!!
var fs = require('fs');

// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");

// invoke express and store the result in the variable app
var app = express();

app.use(express.static(__dirname));
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

var cats_details = [
    {name:"cat1", fav_food:"Spagehetti", age:"1", sleeping_spots:["Under the Bed", "in a Sunbeam"]},
    {name:"cat2", fav_food:"Cucumber", age:"2", sleeping_spots:["Top of Oven", "Toilet Bowl"]},
    {name:"cat3", fav_food:"Sleepers", age:"3", sleeping_spots:["Under the Table", "Beside the Litter Box"]},
    {name:"cat4", fav_food:"Rat", age:"4", sleeping_spots:["Garage", "Pipeline"]},
    {name:"cat5", fav_food:"String Ball", age:"5", sleeping_spots:["Roof", "in the Attique"]},
];

/***************************
* ROUTES
****************************/ 
app.get('/', function(request, response){
    // Just wanted to try creating an array to put image names
    response.render('index');
});
app.get('/cats', function(request, response){
    response.render('cats', {cats: cats_details});
});
app.get('/details/0', function(request, response){
    response.render('details', {cat: cats_details[0]});
});
app.get('/details/1', function(request, response){
    response.render('details', {cat: cats_details[1]});
});
app.get('/details/2', function(request, response){
    response.render('details', {cat: cats_details[2]});
});
app.get('/details/3', function(request, response){
    response.render('details', {cat: cats_details[3]});
});
app.get('/details/4', function(request, response){
    response.render('details', {cat: cats_details[4]});
});

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
    console.log("listening on port 8000");
})