//import checkCoord from './index';
import {
  checkCoord,
  
} from "./index";


const addMenu = (coord) => { 
    let [x, y] = coord
    
  
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menuContainer');
  menuContainer.style.position = 'absolute';
  menuContainer.style.left = x + 50 + "px";
  menuContainer.style.top = y + 20 + "px";
  const waldo = document.createElement('div');
  waldo.classList.add('button');
  waldo.textContent = "Waldo"
  waldo.id = 'waldo';
  const wizard = document.createElement('div');
  wizard.classList.add('button');
  wizard.textContent = "Wizard"
  wizard.id = 'wizard';
  const wenda = document.createElement('div');
  wenda.classList.add('button');
  wenda.textContent = "Wenda"
  wenda.id = 'wenda';
  menuContainer.appendChild(waldo)
  menuContainer.appendChild(wizard)
  menuContainer.appendChild(wenda)
  
  document.body.appendChild(menuContainer)

  // event listener for drop down

const select = document.querySelectorAll('.button');

select.forEach((button) => {

    button.addEventListener('click', check)
})

function check (e) {
  
  checkCoord(e.target.id, coord)
}

  }

  export default addMenu;
 