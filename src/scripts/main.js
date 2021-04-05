import { setEventListener } from './functions.js';

const navList = document.getElementById('nav__list');

navList.addEventListener('click', (event) => {
  let id;

  if (event.target.tagName === 'SPAN') {
    id = event.target.parentNode.getAttribute('data-link');
  } else {
    id = event.target.getAttribute('data-link');
  }

  if (id === 'home') {
    window.scrollTo({
      top: 0, behavior: 'smooth',
    });

    return;
  }

  const target = document.querySelector(`#${id}`);

  target.scrollIntoView({
    block: 'center', behavior: 'smooth',
  });
});

const consultationForm = document.querySelector('.consultation__form');
const contactForm = document.querySelector('.contact__form');

setEventListener(consultationForm);
setEventListener(contactForm);
