import './styles.css';
import myName from './myName';
import Image1 from './images/waldo.jpg'
import addMenu from './addMenu';
import addCircle from './addCircle';
import addMessage from './addMessage'
import GameStorage from './gameStorage'
import addPic from './addPic'
import startGame from './startGame';
import PlayerStorage from './playerData';
import highScoreForm from './highScoreForm';

let currentPlayer = new PlayerStorage
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
  startTimer()
}

function startTimer () {
  let uuid = self.crypto.randomUUID();
  currentPlayer.newData(uuid)
  startApi(uuid)
}

async function startApi (uuid) {

  try {

    const response = await fetch(`http://localhost:3000/game/start?id=${uuid}`)

    const startData = await response.json();

      
    }

  catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    //add error message to dom
    //errorDisplay()
  }
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
     
      if (currentGame.allData.length == 3) {
        gameWon(coord)

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

const gameWon = async (coord) => {
 
 //console.log(currentPlayer.allData.uuid)

  
  try {

    const response = await fetch(`http://localhost:3000/game/end?id=${currentPlayer.allData.uuid}`)

    const stopData = await response.json();
    
      if (stopData.message == false) {
        console.log("you win")
      }
      else {
        highScoreForm(coord)
        formEvent()
       
      }


    }

  catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    //add error message to dom
    //errorDisplay()
  }


}

// form event listener
function formEvent () {
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target).entries());

  sendData(data.name, currentPlayer.allData.uuid)

  //const remove = document.getElementById("remove");
  //remove.remove()
  
 
})
}


async function sendData (name, uuid) {

  await fetch('http://localhost:3000/game/score', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        id: uuid,
        
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {

       console.log(data)
        //maybe set state for a rerender
      })
      .catch((err) => {
        console.log(err.message);
      });

}



export {
  checkCoord,
  currentGame,
};

