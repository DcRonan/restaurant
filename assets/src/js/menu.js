import * as e from './elements';
import imgOne from './images/menu-1.jpg';
import imgTwo from './images/menu-2.jpg';
import imgThree from './images/menu-3.jpg';

const menu = () => {
  card();
  cardTwo();
  cardThree();
}

const card = () => {
  e.menuDiv.appendChild(e.cardDiv).className = 'card m-3';
  e.cardDiv.style.width = '18rem';
  e.cardDiv.appendChild(e.cardImg).className = 'card-img-top';
  e.cardImg.src = imgOne;
  e.cardDiv.appendChild(e.cardBody).className = 'card-body';
  e.cardBody.appendChild(e.cardH5).className = 'card-title text-dark';
  e.cardH5.textContent = 'Menu #1';
  e.cardBody.appendChild(e.cardText).className = 'card-text text-dark';
  e.cardText.textContent = 'This is some text of the menu item!!!';
  e.cardBody.appendChild(e.cardBtn).className = 'btn btn-info';
  e.cardBtn.textContent = 'Full Details';
}

const cardTwo = () => {
  e.menuDiv.appendChild(e.cardTwoDiv).className = 'card m-3';
  e.cardTwoDiv.style.width = '18rem';
  e.cardTwoDiv.appendChild(e.cardTwoImg).className = 'card-img-top';
  e.cardTwoImg.src = imgTwo;
  e.cardTwoDiv.appendChild(e.cardTwoBody).className = 'card-body';
  e.cardTwoBody.appendChild(e.cardTwoH5).className = 'card-title text-dark';
  e.cardTwoH5.textContent = 'Menu #2';
  e.cardTwoBody.appendChild(e.cardTwoText).className = 'card-text text-dark';
  e.cardTwoText.textContent = 'This is some text of the menu item!!!';
  e.cardTwoBody.appendChild(e.cardTwoBtn).className = 'btn btn-info';
  e.cardTwoBtn.textContent = 'Full Details';
}

const cardThree = () => {
  e.menuDiv.appendChild(e.cardThreeDiv).className = 'card m-3';
  e.cardThreeDiv.style.width = '18rem';
  e.cardThreeDiv.appendChild(e.cardThreeImg).className = 'card-img-top';
  e.cardThreeImg.src = imgThree;
  e.cardThreeDiv.appendChild(e.cardThreeBody).className = 'card-body';
  e.cardThreeBody.appendChild(e.cardThreeH5).className = 'card-title text-dark';
  e.cardThreeH5.textContent = 'Menu #3';
  e.cardThreeBody.appendChild(e.cardThreeText).className = 'card-text text-dark';
  e.cardThreeText.textContent = 'This is some text of the menu item!!!';
  e.cardThreeBody.appendChild(e.cardThreeBtn).className = 'btn btn-info';
  e.cardThreeBtn.textContent = 'Full Details';
}

export {menu};
