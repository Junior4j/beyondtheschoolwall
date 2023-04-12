const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');
const navOverlay = document.querySelector('.overlay');

hamburger.addEventListener("click", () =>{
    navLinks.classList.toggle('open');
    navOverlay.classList.toggle('show');


});

hamburger.addEventListener("click", function(){
    this.classList.toggle('is-active');

});