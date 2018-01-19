// Home page slider
$(".owl-carousel-home-banner").owlCarousel({
  loop: true,
  items: 1,
  dots: false,
  margin: 10,
  responsiveClass: true
});

// box slider
$(".owl-carousel-box-slider").owlCarousel({
  loop: true,
  items: 1,
  dots: true,
  nav: true,
  margin: 10,
  responsiveClass: true,
  navText: [
    '<i class="fas fa-angle-left"></i>',
    '<i class="fas fa-angle-right"></i>'
  ]
});
$(".owl-carousel-viajes-unicos").owlCarousel({
  stagePadding: 150,
  loop: true,
  items: 2,
  dots: false,
  nav: false,
  margin: 10,
  responsiveClass: true
});
