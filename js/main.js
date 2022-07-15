/********************************************************
  1. custom counter
  
********************************************************/
$(function(){
    "use strict";
//banner
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//blog
$(".blog-main").niceScroll({
  cursorcolor: "#18A7B9",
  horizrailenabled: false,
  cursorborder: "none",
   
});
//offcanvas
document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
});
//Engineers
$('.engineer-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.slick-prev',
    nextArrow: '.slick-next',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,

        }
    },

    {
        breakpoint: 780,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
]
  });

  //navbar
  var navbar = $('.navbar');

$(window).scroll(function() {
  if ($(window).scrollTop() > 20) {
    navbar.addClass('position-fixed');
  } else {
    navbar.removeClass('position-fixed');
  }
});
  //back to top
  var btn = $('.back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: "0" },  5000);
});


});