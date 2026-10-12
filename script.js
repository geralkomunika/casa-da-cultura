const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    menuButton.textContent = isOpen ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    menuButton.textContent = '☰';
  }));
}
const filters = document.querySelectorAll('[data-filter]');
const events = document.querySelectorAll('.event[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.toggle('active', item === button));
  const category = button.dataset.filter;
  events.forEach(event => event.classList.toggle('hidden', category !== 'todos' && event.dataset.category !== category));
}));
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();