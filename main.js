const swiper = new Swiper(".js-swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 20,
});

document.querySelectorAll('.js-open__slider-modal').forEach((btn) => {
  btn.addEventListener('click', function() {
    const modal = this.nextElementSibling;
    modal.classList.toggle('show');
  })
})

document.querySelectorAll('.close-modal-slider').forEach((btn) => {
  btn.addEventListener('click', function() {
    const modal = this;
    modal.classList.remove('show');
  })
})


document.querySelectorAll('.js-modal-open').forEach(function(button) {
  button.addEventListener('click', function() {
    const modal = document.querySelector('#modal');
    const title = this.getAttribute('data-title');
    document.querySelector('#modal-title').textContent = title;
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
  });
});

document.querySelector('#close-modal').addEventListener('click', function() {
  const modal = document.querySelector('#modal');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  modal.classList.add('opacity-0', 'pointer-events-none');
});
