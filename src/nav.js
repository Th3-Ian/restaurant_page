import _ from 'lodash';
import './style.css';

const navBar = () => {
	const containerDiv = document.getElementById('content')
	const div = document.createElement('div');
	const nav = document.createElement('nav');
  // Lodash, now imported by this script
	nav.innerHTML = '<a class="tab home-page active">Home</a><a class="tab menu-page">Menu</a><a class="tab contact-page">Contact</a>';

	console.log('this is working pt 2');
	div.appendChild(nav);

	containerDiv.appendChild(div);
}


export {navBar}