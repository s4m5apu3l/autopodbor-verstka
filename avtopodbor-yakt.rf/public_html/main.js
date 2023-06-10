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

const modal = document.querySelector('#modal');

document.querySelectorAll('.js-open__slider-modal').forEach((btn) => {
  btn.addEventListener('click', function() {
    const modalNext = this.nextElementSibling;
    modalNext.classList.toggle('show');
  })
})

document.querySelectorAll('.close-modal-slider').forEach((btn) => {
  btn.addEventListener('click', function() {
    const modalNext = this;
    modalNext.classList.remove('show');
  })
})


document.querySelectorAll('.js-modal-open').forEach(function(button) {
  button.addEventListener('click', function() {

    const title = this.getAttribute('data-title');
    document.querySelector('#modal-title').textContent = title;
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
  });
});

document.querySelector('#close-modal').addEventListener('click', function() {

  modal.classList.remove('opacity-100', 'pointer-events-auto');
  modal.classList.add('opacity-0', 'pointer-events-none');
});

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var xhr = new XMLHttpRequest();
  var formData = new FormData(e.target);
  
  xhr.open("POST", 'mail.php', true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        modal.classList.remove('opacity-100', 'pointer-events-auto');
        modal.classList.add('opacity-0', 'pointer-events-none');
      }
  }
  xhr.send(formData);
});
