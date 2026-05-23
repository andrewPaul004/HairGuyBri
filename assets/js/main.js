// Nav scroll state
const nav = document.querySelector('.nav');
if (nav) {
  const setScrolled = () => nav.classList.toggle('scrolled', window.scrollY > 12);
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });
}

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
    const open = nav.classList.contains('menu-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('menu-open'));
  });
}

// Reveal-on-scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
