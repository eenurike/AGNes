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


let multyLanguageRu = document.querySelector('.ru'),
    multyLanguageKz = document.querySelector('.kz');
    

    multyLanguageRu.addEventListener('click', function(){
        if (this.classList.contains('active') == false) {
            this.classList.add('active');
            multyLanguageKz.classList.remove('active');
        } 
    });

    multyLanguageKz.addEventListener('click', function(){
        if (this.classList.contains('active') == false) {
            this.classList.add('active');
            multyLanguageRu.classList.remove('active');
        } 
    });

  
});


let areaCarousel = document.querySelector('#area-carousel'),
    item = document.querySelector('.work');




if (window.matchMedia("(max-width: 950px)").matches) {
    areaCarousel.classList.add('owl-carousel');
    
  } else {
    
   
    areaCarousel.classList.remove('owl-carousel');
    areaCarousel.removeAttribute('id');
    
  }





// if(matchMedia) {
//     let screenOpa = window.matchMedia('(max-width: 950px)');
//     screenOpa.addListener(changes);
//     changes(screenOpa);
    
// }

// function changes(screenOpa) {
//     if (screenOpa.matches) {
//         block.classList.add('block');
//         item.classList.add('item');
//         console.log('< 950px');
//     } else {
//         block.classList.remove('block');
//         item.classList.remove('item');

        
        
//         console.log('> 950px');   
        
//     }
// }


// $(function() {
//     var $item = $('.block .item');

//     $('.block').owlCarousel({
//         loop: true,
//         margin: 10,
//         responsiveClass: true,
//         item: 3

//     });
// });

const staffCarousel = $('#staff-carousel');

staffCarousel.owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    nav: true,
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
    nav: true,
    items: 3,
    responsive:{
        400: {
            items: 2
        },
        600:{
            items:4
        }
    }
});





    
