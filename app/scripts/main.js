$(document).ready(function () {

	$('.person__socials').on('click', '.person__socials-button--plus', function(e) {
		
		const socialsList = $(this).siblings('.socials__list');
		$(this).hide();
		// socialsList.removeClass('socials__list--hidden').fadeIn(1000);
		socialsList.fadeIn(1000).css('display', 'flex');

	});

});
