import _ from 'lodash';
import './style.css';
import Background from './rise_brew_bg.png';

const contactPage = () => {
	const containerDiv = document.getElementById('content')
  const element = document.createElement('div');
	const bodyContent = document.createElement('div');
	element.classList.add('container', 'live-page');
  // Lodash, now imported by this script
	bodyContent.innerHTML = "<h1>Contact Us</h1><p>11925 5th Ave<br>Orlando, FL 32795</p><p>Phone Number:<br>407-180-2790</p><p>Hours:<br>7:00 AM - 3:30 PM Daily</p>"


	element.setAttribute('id', 'container')
	element.appendChild(bodyContent);

	containerDiv.appendChild(element);
}

export { contactPage }