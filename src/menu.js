import _ from 'lodash';
import './style.css';
import Background from './rise_brew_bg.png';

function component() {
  const element = document.createElement('div');
	const nav = document.createElement('nav');
	const bodyContent = document.createElement('div');
	const menu = document.createElement('div')

  // Lodash, now imported by this script
	nav.innerHTML = '<a href="#">Home</a><a href="#">About</a><a href="#">Menu</a><a href="#">Contact</a>';
	bodyContent.innerHTML = "<h1>Menu</h1>";
	menu.innerHTML = "<h2>Specials</h2><ul><li>Steak and Eggs</li><li>Hungry Mans Plate</li><li>French Toast Rise</li><li>Belgium Waffles</li><li></li></ul>"

	element.classList.add('header-img');
	menu.classList.add('menu-container')


	element.appendChild(nav);
	//element.appendChild(bgDiv);
	element.appendChild(bodyContent);

  return element;
}

document.body.appendChild(component());