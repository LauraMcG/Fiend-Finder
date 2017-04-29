$('.submit').on('click', function(event){
	event.preventDefault();

	// console.log('survey submitted!');

//validate the form?

	var newFiend = {
		name: $('#name').val().trim(),
		image: $('#image').val().trim(),
		answers: [
		$('#q1').val(),
		$('#q2').val(),
		$('#q3').val(),
		]
	};

	for (var i = 0; i < fiends.length; i++) {
		console.log(fiends[i]);
	}

	// for (var i = 0; i < newFiend.answers.length; i++) {
	// 	newFiend.answers[i] = parseInt(newFiend.answers[i]);
	// }

	 var currentURL = window.location.origin;

	$.post(currentURL + '/api/fiends', newFiend, function(error, data) {
		if(error) {
			console.log(error);
		} else {
			
		}
	});

	//clearing the form after submission
	$('#name').val('');
	$('#image').val('');
	$('#q1').val();
	$('#q2').val();
	$('#q3 ').val();

//this will initiate the modal dialogue
$('#myModal').modal();
});