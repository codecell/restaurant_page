import '../css/style.css';
import chowImg from '../images/chow.png';
import burgerImg from '../images/burger.png';
import pearImg from '../images/pear.png';
import cutleryImg from '../images/cutlery.png';

const dayMenu = [
  { image: chowImg, title: 'Continental', price: '£100' },
  { image: pearImg, title: 'Health Booze', price: '£40' },
  { image: burgerImg, title: 'Best Bite', price: '£80' },
  { image: cutleryImg, title: 'Custom Mix', price: '£180' },
];

const menu = `
  <div>
    <h2 class='about-header'>MENU</h2>
    <div class="canvas">
      ${dayMenu.map((item) => `
          <div class="card">
            <img src=${item.image} class="menu-img" />
            <p class="food-label">
              ${item.title}
              <span class="price">${item.price}</span>
            </p>
          </div>
        `)}
    </div>
  </div>
`;

export default menu;
