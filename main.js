/* Positive Inner Self — Shared JS */

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Provider filter
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.provider-card[data-type]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const type = tab.dataset.type;
      cards.forEach(card => {
        card.parentElement.style.display =
          (type === 'all' || card.dataset.type.includes(type)) ? '' : 'none';
      });
    });
  });
});
