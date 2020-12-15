import * as e from '../components/elements';
import imgOne from '../images/menu-1.jpg';
import imgTwo from '../images/menu-2.jpg';
import imgThree from '../images/menu-3.jpg';

const card = () => {
  e.menuDiv.appendChild(e.cardDiv).className = 'card m-3';
  e.cardDiv.style.width = '18rem';
  e.cardDiv.appendChild(e.cardImg).className = 'card-img-top';
  e.cardImg.src = imgOne;
  e.cardDiv.appendChild(e.cardBody).className = 'card-body d-flex flex-column justify-content-between';
  e.cardBody.appendChild(e.cardH5).className = 'card-title text-dark';
  e.cardH5.textContent = 'Pesto Pasta';
  e.cardBody.appendChild(e.cardText).className = 'card-text text-dark';
  e.cardText.textContent = 'Farfalle pasta made with pesto from fresh basil, garlic, olive oil, pine nuts, and cheese pounded together into a thick, green paste, along with cherry tomatoes';
  e.cardBody.appendChild(e.cardBtn).className = 'btn btn-info';
  e.cardBtn.textContent = 'Full Details';
};

const cardTwo = () => {
  e.menuDiv.appendChild(e.cardTwoDiv).className = 'card m-3';
  e.cardTwoDiv.style.width = '18rem';
  e.cardTwoDiv.appendChild(e.cardTwoImg).className = 'card-img-top';
  e.cardTwoImg.src = imgTwo;
  e.cardTwoDiv.appendChild(e.cardTwoBody).className = 'card-body d-flex flex-column justify-content-between';
  e.cardTwoBody.appendChild(e.cardTwoH5).className = 'card-title text-dark';
  e.cardTwoH5.textContent = 'Pepperoni Pizza';
  e.cardTwoBody.appendChild(e.cardTwoText).className = 'card-text text-dark';
  e.cardTwoText.textContent = 'Pepperoni pizza made from a cured mixture of pork and beef seasoned with paprika or other chili pepper';
  e.cardTwoBody.appendChild(e.cardTwoBtn).className = 'btn btn-info';
  e.cardTwoBtn.textContent = 'Full Details';
};

const cardThree = () => {
  e.menuDiv.appendChild(e.cardThreeDiv).className = 'card m-3';
  e.cardThreeDiv.style.width = '18rem';
  e.cardThreeDiv.appendChild(e.cardThreeImg).className = 'card-img-top';
  e.cardThreeImg.src = imgThree;
  e.cardThreeDiv.appendChild(e.cardThreeBody).className = 'card-body d-flex flex-column justify-content-between';
  e.cardThreeBody.appendChild(e.cardThreeH5).className = 'card-title text-dark';
  e.cardThreeH5.textContent = 'Bruschetta';
  e.cardThreeBody.appendChild(e.cardThreeText).className = 'card-text text-dark';
  e.cardThreeText.textContent = 'Bruschetta, grilled slices of bread rubbed with raw garlic and topped with chopped tomatoes, fresh basil, and salt';
  e.cardThreeBody.appendChild(e.cardThreeBtn).className = 'btn btn-info';
  e.cardThreeBtn.textContent = 'Full Details';
};

const menu = () => {
  card();
  cardTwo();
  cardThree();
};

export default menu;
