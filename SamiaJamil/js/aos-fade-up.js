// Simple AOS fade-up animation trigger (no library needed)
// Adds .aos-animate to elements with [data-aos] when they enter viewport

document.addEventListener('DOMContentLoaded', function () {
  function animateOnScroll() {
    var elements = document.querySelectorAll('[data-aos]');
    var windowHeight = window.innerHeight;
    elements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 50) {
        el.classList.add('aos-animate');
      } else {
        el.classList.remove('aos-animate');
      }
    });
  }
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
});
