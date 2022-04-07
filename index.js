// Scroll Reveal
const sr = ScrollReveal();
sr.reveal('.pop', {
    origin: "top",
    duration: 2500,
    reset: true
});
sr.reveal('.faq_img', {
    origin: "top",
    duration: 1500,
    reset: true
});


// back to top
var topBtn = document.getElementById('Top');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        topBtn.classList.add('showTop');
    } else {
        topBtn.classList.remove('showTop');
    }
});
// back to top
var topBtn = document.querySelector('#Top');
topBtn.addEventListener('click', function() {
    window.scrollTo(0, 0);
});

// preloader

var loader = document.getElementById('preloader');
window.addEventListener('load', function() {
    loader.style.display = 'none';
});

//Accordion
const accordion = document.getElementsByClassName('contentBx');
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('tog')
    })
}


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});