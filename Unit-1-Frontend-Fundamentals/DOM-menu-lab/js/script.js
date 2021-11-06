const mainEl = document.querySelector('main');

const userColorChoice = document.querySelector('.dropdown-menu').innerHTML()

mainEl.style = userColorChoice;

mainEl.textContent = 'SEI Rocks!';

mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.background = 'var(--top-menu-bg)';

// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

menuLinks.forEach((item) => {
    const link = document.createElement('a');
    link.classList.add('href',  item.href);
    link.textContent = item.text;
    topMenuEl.appendChild(link);
})