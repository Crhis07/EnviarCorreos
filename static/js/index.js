let currentIndex = 0;

    function moveSlide(direction) {
        const slides = document.querySelectorAll('.carousel-image');
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        } else if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        const offset = -currentIndex * 100;
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    }