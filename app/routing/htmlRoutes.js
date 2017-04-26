var express = require('express');
var path = require('path');

var router = express.Router();

//middle ware
router.use(function timeLog(req, res, next) {
	// console.log('Time: ', Date.now());
  	next();
});

//GET to home.html -- displays homepage
router.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, "../public/home.html"));
});

//GET to /survey -- displays survey page
router.get("/survey", function(request, response) {
  response.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;
