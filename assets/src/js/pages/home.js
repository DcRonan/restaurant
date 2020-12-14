import * as e from '../components/elements';

const title = () => { e.h1.textContent = 'Poseidon'; };

const desc = () => { e.h4.textContent = 'Our food is made with fresh ingredients from Italy.'; };

e.mainDesc.className = 'w-75';
document.body.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
document.body.classList = 'container-fluid';
e.content.className += 'h-100 text-center text-white d-flex flex-column justify-content-center align-items-center';

export { title, desc };
