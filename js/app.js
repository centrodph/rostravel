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
	stagePadding: 50,
	loop: true,

	thumbs: false,
	dots: false,
	nav: false,
	margin: 5,
	responsiveClass: true,
	responsive: {
		// breakpoint from 0 up
		0: {
			stagePadding: 30,
			items: 1
		},
		400: {
			stagePadding: 50,
			items: 1
		},
		// breakpoint from 768 up
		768: {
			items: 2
		},
		// breakpoint from 1024 up
		1200: {
			items: 3
		}
	}
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
let sticked = false;
let sticked2 = false;

$(document).ready(function() {
	$('.dd-list').mCustomScrollbar();

	$('a.showSearchOnstiky').click(event => {
		event.preventDefault();
		console.log('sd');
		$('#sticky-wrapper-search').slideToggle('slow', function() {
			// Animation complete.
		});
	});
});

$(window).scroll(function(event) {
	var scroll = $(window).scrollTop();
	if (scroll > 0) {
		header.sticky({ topSpacing: 0 });
	}

	if (scroll > 400 && !sticked) {
		sticked = true;

		//promosSearch.sticky({ topSpacing: header.height() });
		promoItem.sticky({ topSpacing: header.height() });
	}
	if (scroll < 400 && sticked) {
		sticked = false;

		//promosSearch.unstick();
		promoItem.unstick();
	}

	// if (scroll > 600 && !sticked2) {
	// 	sticked2=true;
	// 	promoItem.sticky({ topSpacing: header.height() });
	// }
	// if (scroll < 600 && sticked2) {
	// 	sticked2=false
	// 	promoItem.unstick();
	// }
});

document.addEventListener('DOMContentLoaded', function() {
	// Get all "navbar-burger" elements
	var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {
		// Add a click event on each of them
		$navbarBurgers.forEach(function($el) {
			$el.addEventListener('click', function() {
				// Get the target from the "data-target" attribute
				var target = $el.dataset.target;
				var $target = document.getElementById(target);

				// Toggle the class on both the "navbar-burger" and the "navbar-menu"
				$el.classList.toggle('is-active');
				$target.classList.toggle('is-active');
			});
		});
	}
});
