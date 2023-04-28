let navbar = document.querySelector('nav');

document.addEventListener('scroll', function(){
    
    if ( document.scrollingElement.scrollTop >= 400 ){
        navbar.classList.replace('main-navbar', 'navbar-alt');
    }else{
        navbar.classList.replace('navbar-alt', 'main-navbar');
    }
});

let paths = document.querySelectorAll("g[opacity='1'] path");

setInterval(() => {
    let randInt = Math.floor(Math.random() * (paths.length - 1));
    let randBool = Math.floor(Math.random() * 2);
    paths[randInt].parentElement.style.opacity = randBool;
}, 200)