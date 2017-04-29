//DEPENDENCIES
var express = require('express');
var path = require('path');
var fs = require('fs');
//pulling array for JSON data
var fiends = require('../data/fiends.js');

//setting up router to be exported
module.exports = function(app) {


	//==========GET 
	//route to /api/fiends displays JSON of all possible fiends.
	app.get("/api/fiends", function(request, response) {
		return response.json(fiends); 
	});


	//===========POST
	//route to /api/fiends handles incoming survey results
	app.post("/api/fiends", function(request, response){

		// newFiend pulls the entered data into a variable for use throughout the call.
		var newFiend = request.body;

		//yourEnemy will store the least compatible ("best") match for the user.
		//the score tracks the difference to be compared throughout all results.
		//we start it with nothing and a score of 0.
		var yourEnemy = {
			name: null,
			image: null,
			survey: [],
			score: 0
		};

		//setting a counter to track the scores for each match test.
		var totalDifference = 0;


		//===========CALCULATING THE 'MATCH'

		//since fiend finder is all about enemies,
		//matches will be made by determining the largest absolute difference in scores.

		//a loop is called to go through each object in Fiends.
		//another loop within the first compares the user's survey response to those already stored.
		//in other words, for each fiend, compare the results for each question.
		for (var i = 0; i < fiends.length; i++) {

			for (var j = 0; j < newFiend.survey.length; j++) {
				//finding the difference between each answer
				var difference = Number(newFiend.survey[j]) - Number(fiends[i].survey[j]);
				//getting the absolute value (Math.abs was giving me problems)
				differencePosi = -difference>0 ? -difference : difference;
				totalDifference = totalDifference + differencePosi;
			}
			//once the totalDifference has been calculated for a fiend, compare to yourEnemy
			//yourEnemy is the fiend with the most difference from the user.
			//if this is the new top enemy, update yourEnemy with their info.
			if (totalDifference > yourEnemy.score) {
				yourEnemy = {
					name: fiends[i].name,
					image: fiends[i].image,
					survey: fiends[i].survey,
					score: totalDifference
				};
			}
		}

		//then we add the new fiend to our array.
		fiends.push(newFiend);

		// add the updated fiend array to the json file
		var fiendsArrayJSON = JSON.stringify(fiends);
		fs.writeFile('fiends.json', fiendsArrayJSON, 'utf8', 'callback');
		console.log('fiend added!');

		//sending yourEnemy as a response to the API query
		response.setHeader('Content-Type', 'application/json');
		response.send(JSON.stringify(yourEnemy));

	});
}


