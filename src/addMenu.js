//import checkCoord from './index';
import {
  checkCoord,
  picListener,
} from "./index";

import waldo from './images/waldoCropped.jpg'
import wenda from './images/wendaCropped.jpg'
import wizard from './images/wizardCropped.jpg'

const addMenu = (coord, menuArray) => {
  let [x, y] = coord


  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menuContainer');
  menuContainer.style.position = 'absolute';
  if (x < 1500) {
    menuContainer.style.left = x + 50 + "px";
    menuContainer.style.top = y + 20 + "px";
  }
  else {
    menuContainer.style.left = x - 240 + "px";
    menuContainer.style.top = y + 20 + "px";
  }


  const addMenuItems = () => {
    for (let i = 0; i < menuArray.length; i++) {

      const name = document.createElement('div');
      name.classList.add('button');
     
      //capitalize first letter
      let firstLetterCap = menuArray[i][0].toUpperCase()
      const remainingLetters = menuArray[i].slice(1)
      const capitalizedWord = firstLetterCap + remainingLetters
     
      name.textContent = capitalizedWord
      name.id = menuArray[i];
      const image = new Image();
      if (menuArray[i] == 'waldo') {
        image.src = waldo
      }
      if (menuArray[i] == 'wenda') {
        image.src = wenda
      }
      if (menuArray[i] == 'wizard') {
        image.src = wizard
      }
      image.classList.add('menuImg');
      name.appendChild(image)
      menuContainer.appendChild(name)
    }
  }

  addMenuItems()

  document.body.appendChild(menuContainer)

  // event listener for drop down

  const select = document.querySelectorAll('.button');

  select.forEach((button) => {

    button.addEventListener('click', check)
  })

  function check(e) {

    checkCoord(e.target.id, coord)
    menuContainer.remove()
    const circle = document.getElementById("circle")
    circle.remove()
    picListener()

  }

}




export default addMenu;
