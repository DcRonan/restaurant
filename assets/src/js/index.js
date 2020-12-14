import _ from 'lodash';
import '../scss/style.scss';
import { bgImg } from './background';
import { nav } from './navbar';
import { title, desc } from './home';
import { form } from './contact';
import { menu } from './menu';
import * as e from './elements';

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
