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
    modal.classList.add('show');
  })
})

document.querySelectorAll('.js-open__slider-modal').forEach((btn) => {
  btn.addEventListener('click', function() {
    const modal = this.nextElementSibling;
    modal.classList.add('show');
  })
})