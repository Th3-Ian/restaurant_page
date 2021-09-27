import _ from 'lodash';
import './style.css';

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



export {navBar}