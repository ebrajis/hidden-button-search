const btn = document.querySelector('.btn');
const search = document.querySelector('.search-engine');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});
