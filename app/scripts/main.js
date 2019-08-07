$(document).ready(function () {
	// const socialsOpenBtn = document.querySelector('.socials__button--plus');
	// const socialsList = document.querySelector('.socials__list');
	// const personSocials = document.querySelector('.person__socials');

	$('.person__socials').on('click', '.socials__button--plus', function () {
		$(this).hide();
		$('.socials__list').removeClass('socials__list--hidden').addClass('socials__list--showed');
	});
});
