
var sync1 = jQuery("#sync1");
sync1
.owlCarousel({
items: 1,
slideSpeed: 7000,
nav: false,
autoplayHoverPause: true,
autoplaySpeed: 2000,
dotsSpeed:1600,
margin: 30,
mouseDrag: true,
dots: true,
loop: true,
responsiveClass: true,
responsive: {
  0: {
    item: 1,
    autoplay: false
  },
  600: {
    items: 1,
    autoplay: true
  },
  425: {
    items: 1,
    autoplay: true,
    margin: 10
  }
},
})


const nextArrow = "<img src='assets/images/Next-Arrow.png'>"

$('#slider-2').owlCarousel({
  items: 1,
  slideSpeed: 5000,
  nav: true,
  dotsSpeed:1600,
  navSpeed:1600,
  autoplayHoverPause: true,
  autoplaySpeed: 1600,
  margin: 30,
  mouseDrag: true,
  dots: true,
  loop: true,
  navText: ['',nextArrow],
  responsiveClass: true,
  responsive: {
    0: {
      item: 1,
      autoplay: false
    },
    600: {
      items: 1,
      autoplay: true
    }
  },
  })
  


// var rellax = new Rellax('.rellax', {
//   center: true,
// });


AOS.init({
  once: false,
  duration: 2000,
  offset: 250,
});