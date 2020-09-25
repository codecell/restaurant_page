
const footerWrapper = document.createElement('footer');
footerWrapper.setAttribute('class', 'footer');
const url = 'https://alfredezaka.netlify.app/';

const footerLink = document.createElement('a');
footerLink.setAttribute('href', url);
footerLink.textContent = '© 2020 Alfred Ezaka';

footerWrapper.appendChild(footerLink);
footerWrapper.classList.add('footer');

export default footerWrapper;