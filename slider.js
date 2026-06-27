const track = document.querySelector('.slider__track');
const slides = Array.from(track.children);
const buttons = document.querySelectorAll('.slider__btn');

let index = 0;
let autoPlay = setInterval(nextSlide, 5000);

function update() {
  track.style.transform = `translateX(-${index * 100}%)`;
  slides.forEach((s, i) =>
    s.setAttribute('aria-hidden', i !== index)
  );
}

function nextSlide() {
  index = (index + 1) % slides.length;
  update();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  update();
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    clearInterval(autoPlay);
    btn.dataset.dir === 'next' ? nextSlide() : prevSlide();
  });
});

/* Pause on hover */
track.addEventListener('mouseenter', () => clearInterval(autoPlay));
track.addEventListener('mouseleave', () => {
  autoPlay = setInterval(nextSlide, 5000);
});
