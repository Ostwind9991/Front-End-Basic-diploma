let slides = document.querySelectorAll('.slidExper__sliders'),
    dots = document.querySelectorAll('.slidExper__dot');


slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

var counter = 0;

function clearCounter() {
    for (var i = 0; i < dots.length ; i++) {
        dots[i].className = 'slidExper__dot';
    }
}

function carousel() {
    if (counter == slides.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slides.length - 1;
    }

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    clearCounter();
    dots[counter].classList.add('active')

}

dots.forEach(function (Element, index) {
    Element.addEventListener('click', function(){
        counter = index;
        clearCounter();
        Element.classList.add('active')
        carousel();
    });
});

