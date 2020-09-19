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






    
