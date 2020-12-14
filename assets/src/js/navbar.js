import * as e from './elements';

const nav = () => {
  e.navBar.className += 'fixed-top w-100';
  e.ul.style.listStyle = 'none';
  e.ul.className += 'd-flex justify-content-center p-0';
  menuItems();
};

const menuItems = () => {
  e.liOne.innerHTML = 'Home';
  e.liOne.setAttribute('id', 'home');
  e.liOne.className += 'btn text-white p-3';
  e.liTwo.innerHTML = 'Menu';
  e.liTwo.setAttribute('id', 'menu');
  e.liTwo.className += 'btn text-white p-3';
  e.liThree.innerHTML = 'Contact';
  e.liThree.setAttribute('id', 'contact');
  e.liThree.className += 'btn text-white p-3';
};

e.liOne.addEventListener('click', () => {
  e.content.removeChild(e.formTag);
  e.content.append(e.mainDesc);
});

e.liTwo.addEventListener('click', () => {
  e.content.appendChild(e.menuDiv).className = 'bg-danger';
});

e.liThree.addEventListener('click', () => {
  e.content.removeChild(e.mainDesc);
  e.content.appendChild(e.formTag).classList =
    'bg-light rounded p-3 d-flex flex-column justify-content-center align-items-center';
});

export { nav };
