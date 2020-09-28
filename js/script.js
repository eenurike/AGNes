'use strict';

window.addEventListener("DOMContentLoaded", () => {

let burger = document.querySelector('.burger'),
    nav = document.querySelector('nav'),
    wrapper = document.querySelectorAll('.wrapper'),
    burgerArrow = burger.querySelector('span'),
    closeBurger = document.querySelectorAll('#closeBurger');

burger.addEventListener('click', function(event){
    event.preventDefault();

    nav.classList.toggle('nav-active');

    wrapper.forEach(function(elem, i) {
       elem.classList.toggle('wrapper-active');

      
    });

    burgerArrow.classList.toggle('span-active');
    burger.classList.toggle('burgerActive');

    
// });

function removeEvents() {
    nav.classList.remove('nav-active');

    wrapper.forEach(function(elem) {
       elem.classList.remove('wrapper-active');

      
    });

    burgerArrow.classList.remove('span-active');
    burger.classList.remove('burgerActive');
}



closeBurger.forEach(function(elem){
    elem.addEventListener('click', function(){
        if (nav.classList == 'nav-active') {
            removeEvents();
        } 
    });
});





// let multyLanguageRu = document.querySelector('.ru'),
//     multyLanguageKz = document.querySelector('.kz');
    

//     multyLanguageRu.addEventListener('click', function(){
//         if (this.classList.contains('active') == false) {
//             this.classList.add('active');
//             multyLanguageKz.classList.remove('active');
//         } 
//     });

//     multyLanguageKz.addEventListener('click', function(){
//         if (this.classList.contains('active') == false) {
//             this.classList.add('active');
//             multyLanguageRu.classList.remove('active');
//         } 
//     });

  
});



$(function(){
    $('nav a').on('click', function(e){
        e.preventDefault();

        let selector = $(this).attr('href');

        let h = $(selector);

        $('html, body').animate({
            scrollTop:h.offset().top
        }, 1000);
    });
});

let btnUp = $('.up');
$(document).on('scroll', function() {
    let top = $(this).scrollTop();

    if(top > 200) {
        btnUp.fadeIn(500);
    } else {
        btnUp.fadeOut(500);
    }
});

let headerNav = $('.wrapper_nav');

$(document).on('scroll', function() {
    let top = $(this).scrollTop();

    if(top > 100) {
        headerNav.addClass('scroll');
       

    } else {
        
        headerNav.removeClass('scroll');
        
    }

    
});


btnUp.on('click', function(){
    $('html, body').animate({
        scrollTop:0
    }, 1500);
});



let areaCarousel = document.querySelector('#area-carousel'),
    item = document.querySelector('.work');

if (window.matchMedia("(max-width: 950px)").matches) {
    areaCarousel.classList.add('owl-carousel');
    
  } else {
    
   
    areaCarousel.classList.remove('owl-carousel');
    areaCarousel.removeAttribute('id');
    
  }

  
const staffCarousel = $('#staff-carousel');

staffCarousel.owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    
    items: 1,
    responsive:{
        600:{
            items:2
    
        },
        800:{
            items:3
        
        },
        1000:{
            items:4
        }
    }
});

 areaCarousel = $('#area-carousel');

areaCarousel.owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 2,
    responsive:{
        400: {
            items: 2
        },
        700:{
            items:4
        }
    }
});

$('.card-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    draggable: true,
    infinite: false,
    nextArrow: '.slider-next-button',
    prevArrow: '.slider-prev-button',
    responsive: [
      {
        breakpoint: 1186,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 855,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
          breakpoint: 458,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
          }
        }
    ]
  });
  
  let elementArray = document.querySelectorAll(".feedback-card");
  $('.card-carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
      
      if(elementArray[0].classList.contains('slick-active')){
          $(".left-active").css({opacity: "0", pointerEvents: "none", zIndex: "1"});
          $(".left-inactive").css({zIndex: "2"});
      } else {
          $(".left-active").css({opacity: "1", pointerEvents: "auto", zIndex: "2"});
          $(".left-inactive").css({zIndex: "1"});
      }
      if (elementArray[elementArray.length -1].classList.contains('slick-active')){
          $(".right-active").css({opacity: "0", pointerEvents: "none", zIndex: "1"});
          $(".right-inactive").css({zIndex: "2"});
      } else {
          $(".right-active").css({opacity: "1", pointerEvents: "auto", zIndex: "2"});
          $(".right-inactive").css({zIndex: "1"});
      }
      
  });



});   
