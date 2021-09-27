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
	nav.innerHTML = '<a class="tab-1 home-page">Home</a><a class="tab menu-page">Menu</a><a class="tab contact-page">Contact</a>';

	div.appendChild(nav);

	containerDiv.appendChild(div);
  nav.addEventListener('click', helloClick);

	function helloClick() {
		console.log('hello this click works');
	}
}

navBar();
homePage();


/*
document.addEventListener('tabContent', function(){
	const tabs = document.getElementsByClassName('tab');
	for(let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', changeTab);
	}


	function changeTab() {
		console.log('this is working');

		if (this.classList.contains('home-page')) {
			clear();
			homePage();
		} else if(this.classList.contains('menu-page')) {
			clear();
			menuPage();
		}

		document.getElementsByClassName('active')[0].classList.remove('active');
		this.classList.add('active');

		document.getElementsByClassName('live-page')[0].classList.remove('live-page');

		const arrayTabs = Array.prototype.slice.call(tabs);
		const index = arrayTabs.indexOf(this);
		document.getElementsByClassName('panel')
		[index].classList.add('live-page');

	}
})
*/