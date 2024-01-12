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
  //checkCoord(coord)
}

//async function checkCoord(name, coord) {
  const checkCoord = async (name, coord) => {
   
  let [x, y] = coord
   
  try{
  const response = await fetch('http://localhost:3000/game?char_name=waldo&x=1200&y=900')

  const gameData = await response.json();
console.log(gameData)
//processData(forecastData)
    //return  processData(gameData, unit)
  }
  
  catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
    //add error message to dom
    //errorDisplay()
      }
}

export default checkCoord;



