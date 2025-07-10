//artist
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.artist-card');
const cardsPerSlide = 3;
const totalSlides = Math.ceil(cards.length / cardsPerSlide);
let currentSlide = 0;

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    const slideWidth = track.offsetWidth / totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}, 4300); // every 4 seconds

//homepage soul
// Initialize the button in navbar
showCard(currentIndex);

function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('show');
}

// Optional: Hide menu when clicking outside
document.addEventListener('click', function(event) {
    const profile = document.querySelector('.profile');
    if (!profile.contains(event.target)) {
        document.getElementById('dropdown-menu').classList.remove('show');
    }
});


//music
//profile
//playlist
//albums
//podcasts
