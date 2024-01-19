//import checkCoord from './index';
import {
  checkCoord,
  picListener,
} from "./index";

import waldo from './images/waldoHead.jpg'
import wenda from './images/wendaHead.jpg'
import wizard from './images/wizardHead.jpg'

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
      name.id = menuArray[i];
      //capitalize first letter
      let firstLetterCap = menuArray[i][0].toUpperCase()
      const remainingLetters = menuArray[i].slice(1)
      const capitalizedWord = firstLetterCap + remainingLetters
      name.textContent = capitalizedWord
      
      const imgContainer = document.createElement('div');
      
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
      image.id = menuArray[i];
      imgContainer.appendChild(image)
      name.appendChild(imgContainer)

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
    
    if (e.target.id) {
      checkCoord(e.target.id, coord)
    }
    if (e.target.parentElement.id) {
      checkCoord(e.target.parentElement.id, coord)
    }
    
    menuContainer.remove()
    const circle = document.getElementById("circle")
    circle.remove()
    picListener()

  }

}




export default addMenu;
