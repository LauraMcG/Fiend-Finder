//DEPENDENCIES
var express = require('express');
var path = require('path');
var fs = require('fs');

//pulling array for JSON data
var fiends = require('../data/fiends.js');

//setting up router to be exported
module.exports = function(app) {

	//GET route to /api/fiends displays JSON of all possible fiends.
	app.get("/api/fiends", function(request, response) {
		return response.json(fiends); 
	});

	//POST route to /api/fiends handles incoming survey results

	app.post("/api/fiends", function(request, response){
		var newFiend = request.body;
		
		
		





		fiends.push(newFiend);
		// console.log(newFiend);

		var fiendsArrayJSON = JSON.stringify(fiends);
		fs.writeFile('fiends.json', fiendsArrayJSON, 'utf8', 'callback');

		console.log('fiend added!');

	});
	//save user responses to the survey as an array of objects.





	//also handle "compatibility" logic:
	//convert user survey response into number array

	// var newFiendArray = newFiend.survey;

	//compare the user match to others
	// absolute difference between each question

	//since fiend finder is all about enemies,
	//matches will be made by determining the largest difference in scores.

	//display a modal of the user's new fiend

	//should I be doing this as a MySQL table?


		// var newFiend = request.body;
		// // console.log(newReservation);
		// fiends.push(newFiend);

	 //    var fiendArrayJSON = JSON.stringify(fiends);
	 //    fs.writeFile('fiends.json', fiendArrayJSON, 'utf8', 'callback');

		// console.log(fiends);


}


