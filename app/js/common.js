$(function() {

	// home partners tabs
	function initPartnersTabs(activate) {
		const partners = document.querySelectorAll('.partners-item');
		
		if (activate) {
			partners.forEach((partner, index) => {
				if (index === 0) {
					partner.classList.add('active');
				}
				function addClassToActive() {
					partners.forEach(el => { el.classList.remove('active'); })
					partner.classList.add('active');
				}
				partner.addEventListener('click', addClassToActive);
			});
		} else {
			partners.forEach(partner => {
				partner.removeEventListener('click', addClassToActive);
			});
		}
	}
	initPartnersTabs(true);

	$('.our-team-cart').children('.our-team-cart-info').click(function () {
		if ($(this).children('.our-team-cart-info-p-hidden').is(":hidden")) {
			$('.our-team-cart-active').removeClass('our-team-cart-active');
			$(this).parent('.our-team-cart').addClass('our-team-cart-active');
			$('.our-team-cart-small').removeClass('our-team-cart-small');
			$(this).parent('.our-team-cart').parent('.our-team-container').children('.our-team-cart').addClass('our-team-cart-small');
			
		} else {
			$(this).parent('.our-team-cart').removeClass('our-team-cart-active');
			$('.our-team-cart-small').removeClass('our-team-cart-small');
		}
	});

});
