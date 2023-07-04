let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); 

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}


var loaderWrapper  = document.querySelector('.loader-wrapper');
window.addEventListener("load",vanish);
function vanish(){
    loaderWrapper.classList.add("disappear");
}

var loadWrapper = document.getElementById('.loader-wrapper');
    loaderWrapper.style.display='none';


const fadeOut= () => {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    loaderWrapper.classList.add('fade');
}


    

 

