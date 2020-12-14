const content = document.querySelector('#content');
const navBar = document.createElement('nav');
const mainDesc = document.createElement('div');
const ul = document.createElement('ul');
const liOne = document.createElement('li');
const liTwo = document.createElement('li');
const liThree = document.createElement('li');
const h1 = document.createElement('h1');
const h4 = document.createElement('h4');

content.appendChild(navBar);
content.appendChild(mainDesc);
navBar.appendChild(ul);
ul.append(liOne, liTwo, liThree);
mainDesc.append(h1, h4);

export {content, navBar, ul, liOne, liTwo, liThree, h1, h4, mainDesc}
