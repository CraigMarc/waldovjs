import './styles.css';
import myName from './myName';
import Image1 from './images/waldo.jpg'
import addMenu from './addMenu';
import addCircle from './addCircle';
import addMessage from './addMessage'
import GameStorage from './gameStorage'
import addPic from './addPic'
import startGame from './startGame';

let currentGame = new GameStorage


//start game and add event listener
startGame()
const start = document.getElementById('button');
start.addEventListener('click', startNewGame)

function startNewGame (e)  {

  const startRemove = document.getElementById('buttonContainer');
  startRemove.remove()
  addPic()
  picListener()
}


/*add event listener*/
function picListener() {
const pic = document.getElementById('container');
pic.addEventListener('click', imageCoor)
}
//get coordinate of click

function imageCoor(e) {

  let coord = [e.offsetX, e.offsetY]

  let charArray = ['waldo', 'wenda', 'wizard']
  const charFoundArray = currentGame.allData.map((x) => x.character);
      
// get array with remaining characters to add to the menu

const menuArray = charArray.filter(function (x) {
  return charFoundArray.indexOf(x) < 0;
});
 

  addCircle(coord)
  addMenu(coord, menuArray)

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
      
      if (currentGame.allData.length == 3) {
        gameWon()

      }
    }
 
    addMessage(coord, message, name)

  }

  catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    //add error message to dom
    //errorDisplay()
  }
}

const gameWon = () => {
  console.log('you win')
}




export {
  checkCoord,
  currentGame,
};

