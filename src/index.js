import _ from 'lodash';
import './style.css';
//import Background from './rise_brew_bg.png';
import { homePage } from './home'
import { clear } from './clear'
import { menuPage } from './menu'
import { contactPage } from './contact'


const navBar = () => {
	const containerDiv = document.getElementById('content')
	const div = document.createElement('div');
	const nav = document.createElement('nav');

  // Lodash, now imported by this script
	const navItems = ['Home', 'Menu', 'Contact'];
	div.appendChild(nav);

	containerDiv.appendChild(div);

	//CREATE FOR EACH FUNC TO GENERATE NAV ITEMS
	navItems.forEach(item => {
		let navBtn = String(item);
		const anchor = document.createElement('a');
		anchor.innerHTML = `${navBtn}`;
		anchor.classList.add(`${navBtn.toLowerCase()}-page`, 'tab');
		nav.appendChild(anchor);
	});


	//CREATE 2nd FOR EACH FUNC TO ADD EVENT LISTENER TO NAV ITEMS
	/*
	function changeTab() {
		if (document.classList.contains('home-page')){
			console.log('HOMEPAGE BUTTON');
		} else if (document.classList.contains('menu-page')) {
			console.log('')
		}
	}
	*/
}

addGlobalEventListener('click', '.tab', e => {
	changeTab(e);
})

function addGlobalEventListener(type, selector, callback) {
	document.addEventListener(type, e => {
		if (e.target.matches(selector)) callback(e)
	})
}

function changeTab(e){
	let event = e.target;
	console.log(e.target);

	if(event.classList.contains('home-page')) {
		console.log('HOMEPAGE');
		clear();
		homePage();
	} else if (event.classList.contains('menu-page')) {
		console.log('MENUPAGE');
		clear();
		menuPage();
	} else if (event.classList.contains('contact-page')) {
		console.log('CONTACTPAGE');
		clear();
		contactPage();
	}
}

navBar();
homePage();


