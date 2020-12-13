const h1 = document.createElement('h1');
const h4 = document.createElement('h4');
const mainDesc = document.createElement('div');
const content = document.getElementById('content');

const title = () => h1.innerHTML = 'This is the TITLE!';

const desc = () => h4.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero doloremque laborum cum quibusdam velit veniam totam iure';

mainDesc.append(h1, h4);
content.appendChild(mainDesc);
content.className += 'h-100 text-center text-white d-flex flex-column justify-content-center align-items-center';

export { title, desc };
