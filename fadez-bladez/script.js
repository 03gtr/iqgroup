const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Tiny parallax effect for the hero emblem — intentionally subtle.
const card = document.querySelector('.hero-card');
window.addEventListener('pointermove', (e) => {
  if (!card || window.innerWidth < 850) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 8;
  const y = (e.clientY / window.innerHeight - 0.5) * 8;
  card.style.transform = `translate(${x}px, ${y}px)`;
});
window.addEventListener('pointerleave', () => {
  if (card) card.style.transform = '';
});
