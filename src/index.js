import _ from 'lodash';
import './style.css';
import Background from './rise_brew_bg.png';
import homePage from './home'
import navBar from './nav'
import menuPage from './menu'

navBar()
homePage()

document.addEventListener('tabContent', function(){
	const tabs = document.getElementsByClassName('tab');
	for(let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', changeTab);
	}

	function changeTab() {
		document.getElementsByClassName('active')[0].classList.remove('active');
		this.classList.add('active');

		document.getElementsByClassName('live-page')[0].classList.remove('live-page');

		const arrayTabs = Array.prototype.slice.call(tabs);
		const index = arrayTabs.indexOf(this);
		document.getElementsByClassName('panel')
		[index].classList.add('live-page');
	}
})

//document.body.appendChild(component());