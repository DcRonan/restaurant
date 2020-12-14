  import * as e from './elements';
  
  const nav = () => {
    e.navBar.className += 'fixed-top w-100 p-3';
    e.ul.style.listStyle = 'none';
    e.ul.className += 'd-flex justify-content-center';
    menuItems();
  };
  
  const menuItems = () => {
    e.liOne.innerHTML = 'Home';
    e.liOne.setAttribute('id', 'home');
    e.liOne.className += 'btn text-white';
    e.liTwo.innerHTML = 'Menu';
    e.liTwo.setAttribute('id', 'menu');
    e.liTwo.className += 'btn text-white';
    e.liThree.innerHTML = 'Contact';
    e.liThree.setAttribute('id', 'contact');
    e.liThree.className += 'btn text-white';
  };

export {nav};
