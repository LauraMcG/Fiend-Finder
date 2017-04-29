$('.submit').on('click', function(event){
	event.preventDefault();
	
	//putting the user info into the newFiend variable.
	var newFiend = {
		name: $('#name').val().trim(),
		image: $('#image').val().trim(),
		survey: [
		$('#q1').val(),
		$('#q2').val(),
		$('#q3').val(),
		]
	};

	//currentURL gives flexibility to the location of the post.
	 var currentURL = window.location.origin;

	$.post(currentURL + '/api/fiends', newFiend, function(data) {
		//the post call stores the user input and calculates the match in apiRoutes.

		//collecting the response match in the yourFiend variable
		var yourFiend = {
			name: data.name,
			image: data.image,
			survey: data.survey,
			score: data.score
		};
		//putting information about yourFiend into the modal and displaying it.
		$('#myModal').modal();
		$('.modal-title').html(yourFiend.name);
		$('.modal-body').html('<img src="' + yourFiend.image + '">');
	});

	//clearing the form after submission
	$('#name').val('');
	$('#image').val('');
	$('#q1').val();
	$('#q2').val();
	$('#q3 ').val();

});