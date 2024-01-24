import waldo from './images/waldoHead.jpg'
import wenda from './images/wendaHead.jpg'
import wizard from './images/wizardHead.jpg'

let charArray = [waldo, wenda, wizard]

const getHighScore = async (board) => {


  try {

    const response = await fetch(`http://localhost:3000/game/highscore?pic_name=${board}`)

    const gameData = await response.json();

    return gameData
  }

  catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    //add error message to dom
    //errorDisplay()
  }


}

// add timer to header

function convertSec(cnt) {
  let sec = cnt % 60;
  let min = Math.floor(cnt / 60);
  if (sec < 10) {
    if (min < 10) {
      return "0" + min + ":0" + sec;
    } else {
      return min + ":0" + sec;
    }
  } else if ((min < 10) && (sec >= 10)) {
    return "0" + min + ":" + sec;
  } else {
    return min + ":" + sec;
  }
}

let interval;

function startTimeCounter(stop) {
  
  let counter = 0
  if (stop == true) {
    clearInterval(interval);
    return "stop"
  }
  
  interval = setInterval(function() {
    
    document.getElementById("timer").textContent = convertSec(counter++);
  }, 1000);
}






const addHeader = async (board) => {

  let highScoreData = await getHighScore(board)

  // add event listener for high score button

  function HighScoreEvent() {
    const button = document.querySelector('.highScoreButton');
  
      button.addEventListener('click', displayScore)
  
    
  }
  
  function displayScore () {
  
    const scoreContainer = document.createElement('div');
    scoreContainer.style.position = 'fixed';
    scoreContainer.style.top = '30%';
    scoreContainer.style.right = '35%';
    scoreContainer.classList.add('scoreContainer');
    if (highScoreData.message != 'no high score') {
      const span = document.createElement('span');
      span.classList.add('highScoreName');
      span.textContent = highScoreData[0].userName
      scoreContainer.appendChild(span)
      const span2 = document.createElement('span');
      span2.textContent = " has the current best time of " + minutes + " minutes " + seconds + " seconds"
      
      scoreContainer.appendChild(span)
      scoreContainer.appendChild(span2)
    }
    else {
      scoreContainer.textContent = "No current high score"
    }
    document.body.appendChild(scoreContainer)

    setTimeout(removeScoreCard, 2000);
    
    function removeScoreCard () {
      scoreContainer.remove()
    }
  
  }
  

  // convert to minutes and seconds


  let seconds = ''
  let minutes = ""

  if (highScoreData.message != 'no high score') {
    seconds = highScoreData[0].score / 1000;

    seconds = seconds % 3600;
    minutes = parseInt(seconds / 60);
    seconds = Math.round(seconds % 60);
  }

  const header = document.createElement('header');
  header.id = 'header'
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('headerContainer');
  //const titleDiv = document.createElement('div');
  // titleDiv.textContent = "Where's Waldo, Wenda and Wizard"
  const highScoreDiv = document.createElement('div');
  highScoreDiv.classList.add('highScoreDiv');
  const highScoreButton = document.createElement('button');
  highScoreButton.textContent = "See Best Time"
  highScoreButton.classList.add('highScoreButton');
  
  const picContainer = document.createElement('div');
  picContainer.classList.add('picContainer');
  for (let i = 0; i < charArray.length; i++) {

    const picDiv = document.createElement('div');
    picDiv.classList.add('picDiv');
    const image = new Image();
    image.classList.add('headerImg');
    image.src = charArray[i]
    picDiv.appendChild(image)
    picContainer.appendChild(picDiv)
  }
  const timerContainer = document.createElement('div');
  timerContainer.id = "timer"
  // headerContainer.appendChild(titleDiv)
  highScoreDiv.appendChild(highScoreButton)
  headerContainer.appendChild(picContainer)
  headerContainer.appendChild(timerContainer)
  headerContainer.appendChild(highScoreDiv)
  header.appendChild(headerContainer)

  document.body.appendChild(header)

  
  startTimeCounter()
  
  
  HighScoreEvent()


}

//export default addHeader; 
export {
 addHeader,
 startTimeCounter
};