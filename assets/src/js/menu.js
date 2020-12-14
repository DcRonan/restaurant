import * as e from './elements';
import image from './images/bg-img.jpg';

const menu = () => {
  card();
  cardTwo();
}

const card = () => {
  e.menuDiv.appendChild(e.cardDiv).className = 'card';
  e.cardDiv.style.width = '18rem';
  e.cardDiv.appendChild(e.cardImg).className = 'card-img-top';
  e.cardImg.src = image;
  e.cardDiv.appendChild(e.cardBody).className = 'card-body';
  e.cardBody.appendChild(e.cardH5).className = 'card-title text-dark';
  e.cardH5.innerHTML = 'Menu #1';
  e.cardBody.appendChild(e.cardText).className = 'card-text text-dark';
  e.cardText.innerHTML = 'This is some text of the menu item!!!';
  e.cardBody.appendChild(e.cardBtn).className = 'btn btn-info';
  e.cardBtn.innerHTML = 'Full Details';
}

export {menu};
