export default function createCarousel() {
    const carouselSlide = document.querySelector('.carouselSlide');
    const carouselItems = document.querySelectorAll('.carouselSlide .item');

    //Buttons
    const prevBtn = document.querySelector('.prevBtn');
    const nextBtn = document.querySelector('.nextBtn');

    //Counter
    let counter = 0;
    const size = carouselItems[0].clientWidth;

    //Transforming by CSS and dynamic vars
    function transform(size, counter) {
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }

    //Transitioning by css
    function transition() {
        carouselSlide.style.transition = 'transform 0.4 ease-in-out';
    }

    //Button listeners
    nextBtn.addEventListener('click', () => {
        if(counter === Math.floor(carouselItems.length)) {
            counter = -1;
        }
        transition();
        counter++;
        transform(size, counter);
    });

    prevBtn.addEventListener('click', () => {
        if(counter <= 0) {
            counter = Math.floor(carouselItems.length);
        }
        transition();
        counter--;
        transform(size, counter);
    });
}