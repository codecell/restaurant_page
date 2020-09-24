import '../css/style.css';

function navbar() {
  const content = document.getElementById('content');

  const navBar = document.createElement('header');
  navBar.className = 'navbar';

  content.appendChild(navBar);

  const homeNav = document.createElement('span');
  homeNav.textContent = 'home';
  homeNav.className = 'nav-item';

  const aboutNav = document.createElement('span');
  aboutNav.textContent = 'about';
  aboutNav.className = 'nav-item';

  navBar.appendChild(homeNav);
  navBar.appendChild(aboutNav);
}

export default navbar;
