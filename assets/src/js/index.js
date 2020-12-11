// import _ from 'lodash';
import '../css/style.css';
import { myName, myCountry } from './myDetails';

function component() {
  const element = document.createElement('div');

  element.innerHTML = `${myName('Dan')} and ${myCountry('U.K.')}`;

  return element;
}

document.body.appendChild(component());
