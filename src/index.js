import _ from 'lodash';
import './style.css';
import Background from './rise_brew_bg.png';

function component() {
  const element = document.createElement('div');
	const nav = document.createElement('nav');
	const bgDiv = document.createElement('div');
	const bodyContent = document.createElement('div');
	bgDiv.classList.add('header-img');
  // Lodash, now imported by this script
	nav.innerHTML = '<a href="#">Home</a><a href="#">Menu</a><a href="#">Contact</a>';
	bodyContent.innerHTML = "<h1>Best Coffee and Dinnner in Orlando, FL</h1><p>Rise and Brew is a locally owned diner serving up the freshest eggs and coffee in town. Everything in our restaurant is farm to kitchen so you don't need to worry about overly processed foods. Try our award winning steak and eggs. Located on 5th avenue.</p>"
	//element.classAdd('header-img');
	//const myBackground = new Image();
  //myBackground.src = Background;

	element.appendChild(nav);
	element.appendChild(bgDiv);
	element.appendChild(bodyContent);

  return element;
}

document.addEventListener('tabContent', function(){
	const tabs = document.getElementsByClassName('tab')
})
function changeTab () {

}


document.body.appendChild(component());