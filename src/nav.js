import _ from 'lodash';
import './style.css';

const navBar = () => {
	const div = document.createElement('div');
	const nav = document.createElement('nav');
  // Lodash, now imported by this script
	nav.innerHTML = '<a class="tab home-page active">Home</a><a class="tab menu-page">Menu</a><a class="tab contact-page">Contact</a>';
	//element.classAdd('header-img');
	//const myBackground = new Image();
  //myBackground.src = Background;

	div.appendChild(nav);


  return div;
}
//document.body.appendChild(navBar());

export {navBar}