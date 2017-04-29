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

//bringing in the other route files
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

//any necessary variables for collecting data will go here


//app activiation confirmation
app.listen(port, function() {
	console.log('app listening on port ' + port);
});


