var express = require('express');
var path = require('path');

module.exports = function(app) {

//GET to home.html -- displays homepage
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, "../public/home.html"));
});

app.use('/app/public/survey.js', function(request, response) {
	response.sendFile(path.join(__dirname, "../public/survey.js"))
});

//GET to /survey -- displays survey page
app.get("/survey", function(request, response) {
  response.sendFile(path.join(__dirname, "../public/survey.html"));
});

}