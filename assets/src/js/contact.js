import * as e from './elements';

const form = () => {
  const formTag = document.createElement('form');
  e.content.appendChild(formTag)
  formTag.appendChild(e.formDiv);
}

e.liThree.addEventListener('click', () => {
  e.content.removeChild(e.mainDesc);
})

export {form};
