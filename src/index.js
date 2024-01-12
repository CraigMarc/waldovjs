import './styles.css';
import myName from './myName';
import Image1 from './images/waldo.jpg'


//get rid of ***********
function component() {
  const element = document.createElement('div');

  // use your function!
  element.textContent = myName('Craig');
  return element;
}



document.body.appendChild(component());

/*add event listener*/
const pic = document.getElementById('container');
pic.addEventListener('click', imageCoor)

//get coordinate of click

function imageCoor(e) {
  
  let coord = [e.offsetX, e.offsetY]
  addCircle(coord)
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

const element = document.createElement('div');

const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

circle.setAttribute('cx', "60")
circle.setAttribute('cy', "60")
circle.setAttribute('r', "30")
circle.setAttribute('stroke', "black")
circle.setAttribute('stroke-width', "3")
circle.setAttribute('fill', "none")

svg.appendChild(circle)
element.appendChild(svg);

document.body.appendChild(element);
