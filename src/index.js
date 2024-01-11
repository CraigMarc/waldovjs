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
  //console.log(e.pageX)
  //console.log(e.pageY)
  let coord = [e.pageX, e.pageY]
  addCircle(coord)
}

const addCircle = (coord) => {
  // get click coordinates
  let [x, y] = coord
  //console.log(x)
  // console.log(y)
/*
  const element = document.createElement('div');
  const circle = document.createElement('circle');
  circle.setAttribute('cx', x)
  circle.setAttribute('cy', y)
  circle.setAttribute('r', "10")
  circle.setAttribute('stroke', "black")
  circle.setAttribute('strokeWidth', "1")
  circle.setAttribute('fill', "red")
  element.appendChild(circle);
  const menuDescr = document.createElement('p');
  menuDescr.textContent = "pizzaText"
  element.appendChild(menuDescr);
  return document.body.appendChild(element);
*/

const element = document.getElementById('container');

const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

circle.setAttribute('cx', x)
circle.setAttribute('cy', y)
circle.setAttribute('r', "30")
circle.setAttribute('stroke', "black")
circle.setAttribute('stroke-width', "3")
circle.setAttribute('fill', "none")

svg.appendChild(circle)
element.appendChild(svg);

//document.body.appendChild(element)

  
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
