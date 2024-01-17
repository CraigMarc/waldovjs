//import checkCoord from './index';
import {
  checkCoord,

} from "./index";

import GameStorage from "./gameStorage";


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
      name.textContent = menuArray[i]
      name.id = menuArray[i];
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



  }

}


export default addMenu;
