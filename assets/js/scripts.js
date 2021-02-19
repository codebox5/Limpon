$(document).ready(function () {
	$('.team__soc-link--plus').click(function () {
		$(this).parents('.team__socs').find('.team__soc--hidden').fadeIn();
		$(this).parent().hide();
	});
});
