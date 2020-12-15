import * as e from './elements';

const menuItems = () => {
  e.liOne.textContent = 'Home';
  e.liOne.setAttribute('id', 'home');
  e.liOne.className += 'btn text-white p-3';
  e.liTwo.textContent = 'Menu';
  e.liTwo.setAttribute('id', 'menu');
  e.liTwo.className += 'btn text-white p-3';
  e.liThree.textContent = 'Contact';
  e.liThree.setAttribute('id', 'contact');
  e.liThree.className += 'btn text-white p-3';
};

const nav = () => {
  e.navBar.className += 'fixed-top w-100';
  e.ul.style.listStyle = 'none';
  e.ul.className += 'd-flex justify-content-center p-0';
  menuItems();
};

export default nav;
