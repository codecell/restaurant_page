import navbar from './components/navbar';
import './css/style.css';
import about from './components/about';
import footer from './components/footer';
import home from './components/home';
import { content, wrapper } from './components/shared';


navbar();
wrapper.innerHTML = home;
content.appendChild(wrapper);
content.appendChild(footer);

const navLinks = document.querySelectorAll('.nav-item');

navLinks.forEach((nav) => {
  nav.addEventListener('click', () => {
    if (nav.textContent === 'home') {
      wrapper.innerHTML = home;
      content.appendChild(wrapper);
    }
    if (nav.textContent === 'about') {
      wrapper.innerHTML = about;
      content.appendChild(wrapper);
    }
  });
});
