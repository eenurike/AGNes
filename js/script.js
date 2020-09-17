let burger = document.querySelector('.burger'),
    nav = document.querySelector('nav'),
    wrapper = document.querySelectorAll('.wrapper'),
    burgerArrow = burger.querySelector('span');

burger.addEventListener('click', function(event){
    event.preventDefault();

    nav.classList.toggle('nav-active');

    wrapper.forEach(function(elem, i) {
       elem.classList.toggle('wrapper-active');

      
    });

    burgerArrow.classList.toggle('span-active');
    
});

