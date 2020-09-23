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

let block = document.querySelector('.works_area'),
    item = document.querySelector('.work');




if (window.matchMedia("(max-width: 950px)").matches) {
    block.classList.add('owl-carousel');
    item.classList.add('item');
  } else {
    
   
    block.classList.remove('block');
    item.classList.remove('item');
    
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


$(function() {
    var $item = $('.block .item');

    $('.block').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        item: 3

    });
});




    
