import navbar from './components/navbar';
import './css/style.css';
import about from './components/about';
import footer from './components/footer';
import home from './components/home';
import menu from './components/menu';
import contact from './components/contact';
import { content, wrapper } from './components/shared';


navbar();
wrapper.innerHTML = home;
content.appendChild(wrapper);
content.appendChild(footer);

const navLinks = document.querySelectorAll('.nav-item');

const renderPage = page => {
  switch (page.textContent) {
    case 'home':
      wrapper.innerHTML = home;
      content.appendChild(wrapper);
      break;
    case 'menu':
      wrapper.innerHTML = menu;
      content.appendChild(wrapper);
      break;
    case 'contact':
      wrapper.innerHTML = contact;
      content.appendChild(wrapper);
      break;
    case 'about':
      wrapper.innerHTML = about;
      content.appendChild(wrapper);
      break;
    default:
      wrapper.innerHTML = home;
      content.appendChild(wrapper);
  }
};

navLinks.forEach((nav) => {
  nav.addEventListener('click', () => {
    renderPage(nav);
  });
});
