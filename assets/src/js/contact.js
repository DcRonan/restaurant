import * as e from './elements';

const form = () => {
  e.liThree.addEventListener('click', () => {
    e.content.removeChild(e.mainDesc);
  })
}

export {form};
