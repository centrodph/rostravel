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

$(document).ready(function() {
	$('.header').sticky({ topSpacing: 0 });

	$('.promos-search')
		.sticky({ topSpacing: '83px' })
		.on('sticky-start', function() {
			console.log('Started');
		})
		.on('sticky-end', function() {
			console.log('Ended');
		})
		.on('sticky-update', function() {
			console.log('Update');
		})
		.on('sticky-bottom-reached', function() {
			console.log('Bottom reached');
		})
		.on('sticky-bottom-unreached', function() {
			console.log('Bottom unreached');
		})
		.unstick();
});
