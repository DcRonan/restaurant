import _ from 'lodash';
import '../scss/style.scss';
import { bgImg } from './components/background';
import { nav } from './components/navbar';
import { title, desc } from './pages/home';
import { form } from './pages/contact';
import { menu } from './pages/menu';
import * as e from './components/elements';

e.liOne.addEventListener('click', () => {
  e.content.innerHTML = '';
  e.content.appendChild(e.mainDesc);
});

e.liTwo.addEventListener('click', () => {
  e.content.innerHTML = '';
  e.content.appendChild(e.menuDiv).classList = 'd-flex flex-wrap justify-content-center';
});

e.liThree.addEventListener('click', () => {
  e.content.innerHTML = '';
  e.content.appendChild(e.formTag).classList =
    'bg-light rounded p-3 d-flex flex-column justify-content-center align-items-center';
});

bgImg();
nav();
title();
desc();
form();
menu();
