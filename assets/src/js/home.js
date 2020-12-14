import * as e from './elements';

const title = () => e.h1.innerHTML = 'This is the TITLE!';

const desc = () => e.h4.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero doloremque laborum cum quibusdam velit veniam totam iure';

e.content.className += 'h-100 text-center text-white d-flex flex-column justify-content-center align-items-center';

export { title, desc };
