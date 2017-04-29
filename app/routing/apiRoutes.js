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
		//yourEnemy will store the least compatible ("best") match for the user.
		//the score tracks the difference to be compared throughout all results.
		var yourEnemy = {
			name: null,
			image: null,
			survey: [],
			score: 0
		};
		// this pulls the entered data into  a variable for use throughout the post call.
		var newFiend = request.body;
		var totalDifference = 0;


		//CALCULATING THE 'MATCH'
		//first, a loop is called to go through each object in Fiends.
		//then another loop compares the user's survey response to those already stored.
		//in other words, for each fiend, compare the results for each question.
		for (var i = 0; i < fiends.length; i++) {

			for (var j = 0; j < newFiend.survey.length; j++) {
				//finding the difference between each answer
				var difference = Number(newFiend.survey[j]) - Number(fiends[i].survey[j]);
				//getting the absolute value (Math.abs was giving me problems)
				differencePosi = -difference>0 ? -difference : difference;
				totalDifference = totalDifference + differencePosi;
			}
			// console.log(fiends[i].name + " difference is " + totalDifference);

			//once the totalDifference has been calculated for a fiend, compare to the current top enemy (yourEnemy)
			//yourEnemy is the fiend with the most difference from the user.
			//if this is the new top enemy, update yourEnemy with their info.
			if (totalDifference > yourEnemy.score) {
				yourEnemy.name = fiends[i].name;
				yourEnemy.image = fiends[i].image;
				yourEnemy.survey = fiends[i].survey;
				yourEnemy.score = totalDifference;

				console.log('Your enemy is now ' + yourEnemy.name);
			}
		}

		fiends.push(newFiend);
		// console.log(newFiend);

		// add the updated fiend array to the json file
		var fiendsArrayJSON = JSON.stringify(fiends);
		fs.writeFile('fiends.json', fiendsArrayJSON, 'utf8', 'callback');
		console.log('fiend added!');

		//sending yourEnemy as a response to the API query
		response.setHeader('Content-Type', 'application/json');
		response.send(JSON.stringify(yourEnemy));


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


