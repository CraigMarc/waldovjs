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
import youWon from './youWon';
//import addHeader from './header';
import BoardStorage from './boardStorage';
import {
  addHeader,
  startTimeCounter,
} from "./header";

let currentPlayer = new PlayerStorage
let currentGame = new GameStorage
let currentBoard = new BoardStorage


//start game and add event listener
startGame()


function startEvent() {
  const select = document.querySelectorAll('#startButton');

  select.forEach((button) => {

    button.addEventListener('click', startNewGame)

  })
}
setTimeout(startEvent, 1000)
//startEvent()

function startNewGame(e) {

  let boardArray = ['board1', 'board2', 'board3', 'board4']


  const startRemove = document.getElementById('buttonContainer');
  startRemove.remove()
  addHeader(boardArray[e.target.value])
  addPic(e.target.value)
  currentBoard.newData(e.target.value)
  picListener()
  startTimer()
}

function startTimer() {
  let uuid = self.crypto.randomUUID();
  currentPlayer.newData(uuid)

  startApi(uuid)
}

async function startApi(uuid) {

  try {

    //const response = await fetch(`http://localhost:3000/game/start?id=${uuid}`)
    const response = await fetch(`https://blogapi1200.fly.dev/game/start?id=${uuid}`)

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

// remove pic listener

function removePicListener() {

  const pic = document.getElementById('container');
  pic.removeEventListener('click', imageCoor)
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
  removePicListener()
}

//make api call to check coord

const checkCoord = async (name, coord) => {
  let boardArray = ['board1', 'board2', 'board3', 'board4']
  let [x, y] = coord
  
  let boardCheck = boardArray[currentBoard.allData.board]

  try {

    //const response = await fetch(`http://localhost:3000/game?pic_name=${boardCheck}&char_name=${name}&x=${x}&y=${y}`)
    const response = await fetch(`https://blogapi1200.fly.dev/game?pic_name=${boardCheck}&char_name=${name}&x=${x}&y=${y}`)

    const gameData = await response.json();

    let message = gameData.message
    if (message == true) {
      currentGame.newData(name, x, y)

      if (currentGame.allData.length == 3) {
        gameWon(coord)

      }
    }

    addMessage(message, name)

  }

  catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    //add error message to dom
    //errorDisplay()
  }
}

const gameWon = async (coord) => {

  let boardArray = ['board1', 'board2', 'board3', 'board4']
  let boardCheck = boardArray[currentBoard.allData.board]

  try {

    //const response = await fetch(`http://localhost:3000/game/end?pic_name=${boardCheck}&id=${currentPlayer.allData.uuid}`)
    const response = await fetch(`https://blogapi1200.fly.dev/game/end?pic_name=${boardCheck}&id=${currentPlayer.allData.uuid}`)

    const stopData = await response.json();

    if (stopData.message == false) {
      console.log("you win")
      startTimeCounter(true)
      youWon()
      setTimeout(removeMessage, 4000);



    }
    else {
      startTimeCounter(true)
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

function removeMessage() {
  const win = document.getElementById('youWon')
  const pic = document.getElementById('picContainer')
  const header = document.getElementById('header')
  win.remove()
  pic.remove()
  header.remove()
  currentGame.deleteData
  startGame()
  startEvent()
}

// form event listener
function formEvent() {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());

    sendData(data.name, currentPlayer.allData.uuid)

    const form = document.getElementById('form')
    const pic = document.getElementById('picContainer')
    const header = document.getElementById('header')
    form.remove()
    pic.remove()
    header.remove()
    currentGame.deleteData
    startGame()
    startEvent()



  })
}


async function sendData(name, uuid) {

  let boardArray = ['board1', 'board2', 'board3', 'board4']
  let boardCheck = boardArray[currentBoard.allData.board]

  //await fetch('http://localhost:3000/game/score', {
  await fetch('https://blogapi1200.fly.dev/game/score', {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      id: uuid,
      pic_name: boardCheck,

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
  picListener,
};

