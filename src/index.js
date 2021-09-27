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
	helloFunc(e);
})

/*
document.querySelectorAll('.tab').forEach(item => {
	item.addEventListener('click',  helloFunc());
})
*/
function addGlobalEventListener(type, selector, callback) {
	document.addEventListener(type, e => {
		if (e.target.matches(selector)) callback(e)
	})
}

function helloFunc(e){
	console.log(e);
	/*
	if(item.classList.contains('home-page')) {
		console.log('HOMEPAGE');
	} else if (item.classList.contains('menu-page')) {
		console.log('MENUPAGE');
	} else {
		console.log('hello Function');
	}
	*/
}

navBar();
homePage();


