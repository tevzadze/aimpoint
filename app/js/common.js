// import './modules/mobile-menu';

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

	// home mobile industries slider and stuff start
	let sliderInited = false;
	function setupIndustriesSlider(matches) {
		if (matches && !sliderInited) {
			$('.i-categories').slick({
				accessibility: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplaySpeed: 4000,
				dots: true,
				speed: 750,
				arrows: false,
				autoplay: true,
			});
			sliderInited = true;
		} else if(!matches && sliderInited) {
			$('.i-categories').slick('unslick');
			sliderInited = false;
		}
	}
	
	function matchQueryEnable() {
		if (!window.matchMedia) {
			return;
		}
		const query = '(any-pointer: coarse) and (max-width: 1024px) and (any-hover: none)'

		const doSwitch = ({ matches }) => setupIndustriesSlider(matches);
	
		const mQuery = window.matchMedia(query);
		mQuery.addListener(doSwitch);
		doSwitch(mQuery);
	}
	matchQueryEnable();
	// home mobile industries slider and stuff end

	$('.customer-success-slider').slick({
		accessibility: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed: 4000,
		dots: true,
		speed: 750,
		arrows: false,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		],
	});

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
