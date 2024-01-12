import './styles.css';
import myName from './myName';
import Image1 from './images/waldo.jpg'


//get rid of ***********
/*
function component() {
  const element = document.createElement('div');

  // use your function!
  element.textContent = myName('Craig');
  return element;
}



document.body.appendChild(component());*/

/*add event listener*/
const pic = document.getElementById('container');
pic.addEventListener('click', imageCoor)

//get coordinate of click

function imageCoor(e) {
  
  let coord = [e.offsetX, e.offsetY]
  addCircle(coord)
  addMenu()
}

const addCircle = (coord) => {
  // get click coordinates
  let [x, y] = coord
 

const element = document.getElementById('container');

const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

circle.setAttribute('cx', x)
circle.setAttribute('cy', y)
circle.setAttribute('r', "30")
circle.setAttribute('stroke', "black")
circle.setAttribute('stroke-width', "3")
circle.setAttribute('fill', "none")

element.appendChild(circle)

  
}

const addMenu = () => { 

const menuContainer = document.createElement('div');
menuContainer.classList.add('menuContainer');
const waldo = document.createElement('div');
waldo.classList.add('waldo');
waldo.textContent = "Waldo"
const wizard = document.createElement('div');
wizard.classList.add('wizard');
wizard.textContent = "Wizard"
const wilma = document.createElement('div');
wilma.classList.add('wilma');
wilma.textContent = "Wilma"
menuContainer.appendChild(waldo)
menuContainer.appendChild(wizard)
menuContainer.appendChild(wilma)

document.body.appendChild(menuContainer)
}
