import _ from 'lodash';
import '../scss/style.scss';
import icon from './images/bg-img.jpg';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'I\'m inside a new div';
  element.classList.add('bg-success')

  const myIcon = new Image();
  myIcon.src = icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
