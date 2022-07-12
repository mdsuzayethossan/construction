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
$(".blog-item").niceScroll({
    cursorborder: "1px solid #fff",
    cursorwidth: "5px", 
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
  });
});