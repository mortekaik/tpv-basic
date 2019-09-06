$(document).ready(function () {

	$('.person__socials').on('click', '.person__socials-button--plus', function(e) {
		
		const socialsList = $(this).siblings('.socials__list');
		$(this).hide();
		// socialsList.removeClass('socials__list--hidden').fadeIn(1000);
		socialsList.fadeIn(1000).css('display', 'flex');

	});

	$('.main-nav').on('click', '.main-nav__toggle', function() {
		// $(this).hide();
		$('.modal, .modal__list').fadeIn();
	}).on('click', '.main-nav__toggle--close', function() {
		// $('.main-nav__toggle').show();
		$('.modal, .modal__list').fadeOut();
	})

});
