import * as e from './elements';

const form = () => {
  e.formTag.style.minWidth = '300px';
  e.formTag.style.height = '350px';
  e.formTag.appendChild(e.formGroup).className = 'form-group w-100';
  e.formTag.appendChild(e.formGroupTwo).className = 'form-group w-100';
  e.formTag.appendChild(e.formGroupThree).className = 'form-group w-100';
  formInputs();
  e.formTag.appendChild(e.formBtn).className = 'btn btn-info text-white';
  e.formBtn.innerHTML = 'Submit';
};

const formInputs = () => {
  e.formGroup.appendChild(
    Object.assign(document.createElement('input'), {
      type: 'text',
      placeholder: 'Full Name',
    })
  ).classList = 'form-control';

  e.formGroupTwo.appendChild(
    Object.assign(document.createElement('input'), {
      type: 'email',
      placeholder: 'Email',
    })
  ).classList = 'form-control';

  e.formGroupThree.appendChild(
    Object.assign(document.createElement('textarea'), {
      rows: '3',
      placeholder: 'How can I help?..',
    })
  ).classList = 'form-control';
}

e.liThree.addEventListener('click', () => {
  e.content.removeChild(e.mainDesc);
  e.content.appendChild(e.formTag).classList = 'bg-light rounded p-3 d-flex flex-column justify-content-center align-items-center';
});

export { form };
