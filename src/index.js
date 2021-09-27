import _ from 'lodash';
import './style.css';
//import Background from './rise_brew_bg.png';
import { homePage } from './home'
//import { navBar } from './nav';
import { clear } from './clear'
import { menuPage } from './menu'


const navBar = () => {
	const containerDiv = document.getElementById('content')
	const div = document.createElement('div');
	const nav = document.createElement('nav');

  // Lodash, now imported by this script
	const navItems = ['Home', 'Menu', 'Contact'];
	nav.innerHTML = '<a class="tab home-page">Home</a><a class="tab menu-page">Menu</a><a class="tab contact-page">Contact</a>';

	div.appendChild(nav);

	containerDiv.appendChild(div);

	//CREATE FOR EACH FUNC TO GENERATE NAV ITEMS
	navItems.forEach(item => {
		let navBtn = String(item);
		const anchor = document.createElement('a');
		anchor.innerHTML = `${navBtn}`;
		anchor.classList.add(`${navBtn.toLowerCase()}-page`);
		nav.appendChild(anchor);
	});

	//CREATE 2nd FOR EACH FUNC TO ADD EVENT LISTENER TO NAV ITEMS
	/*
  nav.addEventListener('click', helloClick);

	function helloClick() {
		console.log('hello this click works');
	}
	*/
}

navBar();
homePage();


