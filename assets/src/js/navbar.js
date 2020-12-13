const navBar = document.createElement('nav');
const ul = document.createElement('ul');
const liOne = document.createElement('li');
const liTwo = document.createElement('li');
const liThree = document.createElement('li');

  const nav = () => {
    navBar.className += 'fixed-top w-100 p-3';
    navBar.appendChild(ul);
    ul.style.listStyle = 'none';
    ul.className += 'd-flex justify-content-center';
    ul.append(liOne, liTwo, liThree);
    menuItems();
  };
  
  const menuItems = () => {
    liOne.innerHTML = 'Home';
    liOne.setAttribute('id', 'home');
    liTwo.innerHTML = 'Menu';
    liTwo.setAttribute('id', 'menu');
    liTwo.className += 'mr-3 ml-3';
    liThree.innerHTML = 'Contact';
    liThree.setAttribute('id', 'contact');
  };

content.appendChild(navBar);

export {nav};
