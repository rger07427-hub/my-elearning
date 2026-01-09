const track = document.querySelector('.testimonial-track');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const cards = document.querySelectorAll('.testi-card');

let index = 0;

function updateSlide() {
    const cardWidth = cards[0].offsetWidth + 20; // Lebar card + gap
    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    // Batas maksimal index agar tidak geser ke ruang kosong (5 kartu - 3 yang nampak)
    if (index < cards.length - 3) {
        index++;
    } else {
        index = 0; // Balik ke awal
    }
    updateSlide();
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = cards.length - 3; // Ke slide terakhir
    }
    updateSlide();
});

// Auto slide setiap 5 detik
setInterval(() => {
    nextBtn.click();
}, 5000);