import './styles.css';
import myName from './myName';
import Image1 from './images/waldo.jpg'
import addMenu from './addMenu';
import addCircle from './addCircle';

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
  addMenu(coord)

}

//make api call to check coord

const checkCoord = async (name, coord) => {

  let [x, y] = coord
  console.log(x)
  console.log(y)

  try {

    const response = await fetch(`http://localhost:3000/game?char_name=${name}&x=${x}&y=${y}`)

    const gameData = await response.json();
    console.log(gameData.message)

    let message = gameData.message

    addMessage(coord, message, name)

  }

  catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    //add error message to dom
    //errorDisplay()
  }
}

// add message

const addMessage = (coord, message, name) => {
  
  let [x, y] = coord
console.log(x)
  const element = document.createElement('div');
  if (message == false) {
    element.textContent = "Try Again"
  }
  if (message == true) {
    element.textContent = `You Found ${name}`
  }
  element.classList.add('message');
  element.style.position = 'absolute';
  element.style.left = x + 150 + "px";
  element.style.top = y + 100 + "px";

  document.body.appendChild(element)

}

export {
  checkCoord,

};

