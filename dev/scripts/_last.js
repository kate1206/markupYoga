/*
 * Custom scripts
 */
// (function ($) {

// })(jQuery);


jQuery(function(){
	initMobileNav();
	initCarousel();
	initAnchors();
	initSlick();
	initFormValidation();
	// initCustomForms();
});

$(function(){
	$('.anchor-link').click(function(){
		$('.active').removeClass('active');
	})
});

function initSlick() {
	 $('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		dots: true,
		asNavFor: '.slider-nav',
		autoplay: true
	});
	$('.slider-nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		// dots: true,
		centerMode: false,
		focusOnSelect: true
	});
}