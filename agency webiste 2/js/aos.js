document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("[data-aos]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let delay = entry.target.getAttribute("data-aos-delay") || 0;
        setTimeout(() => {
          entry.target.classList.add("aos-animate");
        }, delay);
      }
    });
  }, { threshold: 0.2 }); // 20% visible

  elements.forEach((el) => observer.observe(el));
});