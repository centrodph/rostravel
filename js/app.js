// Home page slider
$('.owl-carousel-home-banner').owlCarousel({
	loop: true,
	items: 1,
	thumbs: false,
	dots: false,
	margin: 10,
	responsiveClass: true
});

// box slider
$('.owl-carousel-box-slider').owlCarousel({
	loop: true,
	items: 1,
	thumbs: false,
	dots: true,
	nav: true,
	margin: 10,
	responsiveClass: true,
	navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
});
$('.owl-carousel-viajes-unicos').owlCarousel({
	stagePadding: 150,
	loop: true,
	items: 2,
	thumbs: false,
	dots: false,
	nav: false,
	margin: 10,
	responsiveClass: true
});

$('.owl-carousel-gallery').owlCarousel({
	loop: true,
	items: 1,
	dots: false,
	thumbs: true,
	thumbImage: true,
	thumbContainerClass: 'owl-thumbs',
	thumbItemClass: 'owl-thumb-item'
});

$('.galery-close').click(() => {
	$('.overlay-galery').hide();
});
$('.gp-item a').click(() => {
	$('.overlay-galery').show();
});

//Sticky elements
const header = $('.header');
const promosSearch = $('.promos-search');
const promoItem = $('.promo-item-top-sticky');
const sticked = false;

$(document).ready(function() {});

$(window).scroll(function(event) {
	var scroll = $(window).scrollTop();
	if (scroll > 400 && !sticked) {
		header.sticky({ topSpacing: 0 });
		promosSearch.sticky({ topSpacing: header.height() });
		promoItem.sticky({ topSpacing: header.height() });
	}
	if (scroll < 400 && sticked) {
		header.unstick();
		promosSearch.unstick();
		promosSearch.on('sticky-end', function() {
			console.log('SSDDSDSSDSDSDDS');
			console.log(promoItem.parent().height(0));
		});
	}
});
