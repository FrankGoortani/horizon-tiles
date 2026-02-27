// Nav scroll effect
const nav = document.getElementById('nav');

function updateNav() {
  if (!nav) {
    return;
  }

  nav.classList.toggle('scrolled', window.scrollY > 32);
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// Mobile menu toggle
const toggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Copy link
const copyBtn = document.getElementById('copy-link');
const copyToast = document.getElementById('copy-toast');

if (copyBtn && copyToast) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('https://horizon-tiles.com');
      copyToast.classList.add('show');
      setTimeout(() => copyToast.classList.remove('show'), 1500);
    } catch {
      // Clipboard can fail on insecure contexts; no-op to avoid noisy errors.
    }
  });
}

// Scroll reveal
const revealElements = document.querySelectorAll('.card, .timeline-step, .roadmap-phase, .faq-item');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Stagger siblings
          const siblings = entry.target.parentElement?.querySelectorAll(
            '.card, .timeline-step, .roadmap-phase, .faq-item'
          );
          const index = siblings ? Array.from(siblings).indexOf(entry.target) : 0;

          setTimeout(() => {
            entry.target.classList.add('visible');
          }, Math.max(index, 0) * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}
