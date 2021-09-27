import _ from 'lodash';
import './style.css';
import Background from './rise_brew_bg.png';

const homePage = () => {
	const containerDiv = document.getElementById('content')
  const element = document.createElement('div');
	const bgDiv = document.createElement('div');
	const bodyContent = document.createElement('div');
	bgDiv.classList.add('header-img');
	element.classList.add('container', 'live-page');
  // Lodash, now imported by this script
	bodyContent.innerHTML = "<h1>Best Coffee and Dinnner in Orlando, FL</h1><p>Rise and Brew is a locally owned diner serving up the freshest eggs and coffee in town. Everything in our restaurant is farm to kitchen so you don't need to worry about overly processed foods. Try our award winning steak and eggs. Located on 5th avenue.</p>"
	//element.classAdd('header-img');
	//const myBackground = new Image();
  //myBackground.src = Background;

	console.log('this is working pt 2');

	element.appendChild(bgDiv);
	element.appendChild(bodyContent);

	containerDiv.appendChild(element);
}

export { homePage }