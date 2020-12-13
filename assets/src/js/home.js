const h1 = document.createElement('h1');
const h4 = document.createElement('h4');
const mainDesc = document.createElement('div');
const content = document.getElementById('content');

const title = () => {
  h1.innerHTML = 'This is the TITLE!';
  mainDesc.appendChild(h1);
};

const desc = () => {
  h4.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero doloremque laborum cum quibusdam velit veniam totam iure voluptas sapiente sunt. Maiores nemo aperiam dolorem eum officia dolorum quae perferendis possimus?';
  mainDesc.appendChild(h4);
};

content.appendChild(mainDesc);
content.className += 'h-100 text-center text-white d-flex justify-content-center align-items-center';

export { title, desc };
