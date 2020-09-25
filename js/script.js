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

    
});

function removeEvents() {
    nav.classList.remove('nav-active');

    wrapper.forEach(function(elem) {
       elem.classList.remove('wrapper-active');

      
    });

    burgerArrow.classList.remove('span-active');
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
    items: 3,
    responsive:{
        400: {
            items: 2
        },
        700:{
            items:4
        }
    }
});





    
