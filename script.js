function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('hidden');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quote-form');
  const currentYear = document.getElementById('current-year');
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  if (form) {
    form.addEventListener('submit', () => {
      const submitHint = document.getElementById('submit-hint');
      if (submitHint) {
        submitHint.textContent = 'Submitting your request...';
      }
    });
  }
});
