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



//live feed...
//smth wrong here?!?!
window.onload = function () {
    document.addEventListener("DOMContentLoaded", function () {
        let users = 238;
        let signups = 5200;
        let listening = 108;

        function animateCount(id, target) {
            const el = document.getElementById(id);
            if (!el) return;
            let current = parseInt(el.innerText);
            let step = Math.ceil((target - current) / 10);
            if (step === 0) step = 1;

            let interval = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(interval);
                }
                el.innerText = current;
            }, 50);
        }

        function updateStats() {
            users += Math.floor(Math.random() * 5);
            signups += Math.floor(Math.random() * 3);
            listening += Math.floor(Math.random() * 4);

            animateCount("users-online", users);
            animateCount("signups", signups);
            animateCount("listening", listening);
        }

        updateStats(); // Trigger once on load
        setInterval(updateStats, 3000);
    });
}