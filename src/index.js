import './styles.css';
import myName from './myName';
import Image1 from './images/waldo.jpg'
import addMenu from './addMenu';
import addCircle from './addCircle';
import addMessage from './addMessage'


class GameData {
  constructor(character, x, y) {
    this.character = character
    this.x = x
    this.y = y
  }
  
}

class GameStorage {
  constructor(){
    this.charArray = []
  }
  // create a new player and save it in the collection
  newData(character, x, y){
    let gd = new GameData(character, x, y)
    this.charArray.push(gd)
    return this.charArray
  }
  
  get allData(){
    return this.charArray
  }

}

let currentGame = new GameStorage


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

  try {

    const response = await fetch(`http://localhost:3000/game?char_name=${name}&x=${x}&y=${y}`)

    const gameData = await response.json();

    let message = gameData.message
    if (message == true) {
      currentGame.newData(name, x, y)
      console.log(currentGame.allData)
    }
 
    addMessage(coord, message, name)

  }

  catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    //add error message to dom
    //errorDisplay()
  }
}




export {
  checkCoord,

};

