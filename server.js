//==DEPENDENCIES==
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

//--initiating server
var app = express();
var port = 8080;

//--initializing bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(require('./app/routing/htmlRoutes'));

//any necessary variables for collecting data will go here


//app activiation confirmation
app.listen(port, function() {
	console.log('app listening on port ' + port);
});

// console.log(htmlRoutes);


//==PORTS==

