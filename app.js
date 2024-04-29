


document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const navContainer = document.querySelector('.navigation-manual');

    // Create navigation buttons based on the number of slides
    slides.forEach((slide, index) => {
        const navButton = document.createElement('label');
        navButton.setAttribute('for', 'radio' + (index + 1));
        navButton.classList.add('manual-btn');
        navContainer.appendChild(navButton);
    });

    // Add event listener to each manual navigation button
    const manualBtns = document.querySelectorAll('.manual-btn');
    manualBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            // Remove 'first' class from all slides
            slides.forEach(slide => {
                slide.classList.remove('first');
            });
            // Add 'first' class to the selected slide
            slides[index].classList.add('first');

            // Calculate the translation value for the slides
            const slideWidth = slides[0].offsetWidth;
            const translateValue = -index * slideWidth + 'px';
            document.querySelector('.slides').style.transform = 'translateX(' + translateValue + ')';
        });
    });
});
