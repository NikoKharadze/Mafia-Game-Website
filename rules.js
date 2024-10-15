document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slides');

    // Function to show the current slide
    function showSlides(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    // Function to change slides
    function changeSlide(n) {
        slideIndex += n;

        // Loop back to the first slide or last slide
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        
        showSlides(slideIndex);
    }

    // Initially show the first slide
    showSlides(slideIndex);

    // Attach changeSlide to window so it can be called from HTML
    window.changeSlide = changeSlide;
});
