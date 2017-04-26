//DEPENDENCIES
var express = require('express');
var path = require('path');
//setting up router to be exported
var router = express.Router();

router.use(function timeLog(req, res, next) {
	// console.log('Time: ', Date.now());
  	next();
});

// var success = 'apiRoutes successfully connected!';
// module.exports = success;

//GET route to /api/fiends displays JSON of all possible fiends.
router.get("/api/fiends", function(request, response) {
	// return response.json(fiends); //need fiend variable
});



//POST route to /api/fiends
//handle incoming survey results

router.post("/api/tables", function(request, response){

//save user responses to the survey as an array of objects.

var newFiend = {
	name: ,
	image: ,
	survey: []
}

//also handle "compatibility" logic:
//convert user survey response into number array
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
});



module.exports = router;
