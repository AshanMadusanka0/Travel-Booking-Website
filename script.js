// Animate sections on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenSections = document.querySelectorAll('.section__container, .trip__card, .destination__card');
hiddenSections.forEach(el => observer.observe(el));

// Hover effect for Book Now buttons
const bookButtons = document.querySelectorAll('.book__now');

bookButtons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = "scale(1.1)";
    btn.style.transition = "transform 0.3s ease";
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = "scale(1)";
  });
});
