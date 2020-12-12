// import _ from 'lodash';
import '../scss/style.scss';
import { myName, myCountry } from './myDetails';
import icon from './images/linkedin.png';

function component() {
  const element = document.createElement('div');

  element.innerHTML = `${myName('Dan')} and ${myCountry('U.K.')}`;
  element.classList.add('bg-success')

  const myIcon = new Image();
  myIcon.src = icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
