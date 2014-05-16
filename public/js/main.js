function toggleSignInModal (button, text) {
	button.closest('.modal-content').find('.modal-title').text(text);
	button.closest('.modal-content').find('#sign-in-btn').text(text);
	button.closest('.modal-content').find('#sign-up-btn').toggle();
}


$(document).ready(function(){
	// Confirms permanent deletion and cancels defualt navigation to 
	// the delete route if the user hits cancel instead of ok
	$(document).on('click', '.delete-btn', function() {
		var confirmDelete = confirm("Are you sure you want to permanently delete this applicant?");
		if (!confirmDelete) {
			return false;
		}
	})

	$(document).on('click', '#sign-up-btn', function() {
		var thisButton = $(this);
		toggleSignInModal(thisButton, 'Sign Up');
	})

	$(document).on('click', '#close-sign-in', function () {
		var thisButton = $(this);
		toggleSignInModal(thisButton, 'Sign In');
	})
	
});