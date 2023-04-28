let navbar = document.querySelector('nav');

document.addEventListener('scroll', function(){
    
    if ( document.scrollingElement.scrollTop >= 400 ){
        navbar.classList.replace('main-navbar', 'navbar-alt');
    }else{
        navbar.classList.replace('navbar-alt', 'main-navbar');
    }
});

