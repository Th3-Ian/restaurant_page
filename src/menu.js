import _ from 'lodash';
import './style.css';
import Background from './rise_brew_bg.png';

function menuPage() {
  const element = document.createElement('div');
	const bodyContent = document.createElement('div');
	const menu = document.createElement('div')

  // Lodash, now imported by this script
	bodyContent.innerHTML = "<h1>Menu</h1>";
	menu.innerHTML = "<h2>Specials</h2><ul><li>Steak and Eggs</li><li>Hungry Mans Plate</li><li>French Toast Rise</li><li>Belgium Waffles</li><li></li></ul>"

	element.classList.add('container header-img');
	menu.classList.add('menu-container')

	//element.appendChild(bgDiv);
	element.appendChild(bodyContent);

  return element;
}

document.body.appendChild(addMenuPage());