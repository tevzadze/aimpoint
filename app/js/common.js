$(function() {

	$('.our-team-cart').children('.our-team-cart-info').click(function () {
		if ($(this).children('.our-team-cart-info-p-hidden').is(":hidden")) {
			$('.our-team-cart-active').removeClass('our-team-cart-active');
			$(this).parent('.our-team-cart').addClass('our-team-cart-active');
			$(this).parent('.our-team-cart').parent('.our-team-container').children('.our-team-cart').addClass('our-team-cart-small');
			
		} else {
			$(this).parent('.our-team-cart').removeClass('our-team-cart-active');
			$('.our-team-cart-small').removeClass('our-team-cart-small');
		}
	});

});
