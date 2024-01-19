import waldo from './images/waldoHead.jpg'
import wenda from './images/wendaHead.jpg'
import wizard from './images/wizardHead.jpg'

let charArray = [waldo, wenda, wizard]

const getHighScore = async () => {


  try {

    const response = await fetch('http://localhost:3000/game/highscore')

    const gameData = await response.json();

    return gameData
  }

  catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    //add error message to dom
    //errorDisplay()
  }


}




const addHeader = async () => {
 
  let highScoreData = await getHighScore()

  // convert to minutes and seconds

 

  let minutes = ""
  
  if (highScoreData.message != 'no high score') {
    let seconds = highScoreData[0].score / 1000;
    
    seconds = seconds % 3600;
    minutes = parseInt(seconds / 60);
    seconds = Math.round(seconds % 60);
  }

  const header = document.createElement('header');
  header.id = 'header'
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('headerContainer');
  const titleDiv = document.createElement('div');
  titleDiv.textContent = "Where's Waldo, Wenda and Wizard"
  const highScoreDiv = document.createElement('div');
  highScoreDiv.classList.add('highScoreContainer');
  if (highScoreData.message != 'no high score') {
  highScoreDiv.textContent = highScoreData[0].userName + " has the current best time of " + minutes + " minutes " + seconds + " seconds"
  }
  else {
    highScoreDiv.textContent = "No current high score"
  }
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
  headerContainer.appendChild(titleDiv)
  headerContainer.appendChild(picContainer)
  headerContainer.appendChild(timerContainer)
  headerContainer.appendChild(highScoreDiv)
  header.appendChild(headerContainer)

  document.body.appendChild(header)

  // add timer to header

  const startTime = Math.floor(Date.now() / 1000);

  function startTimeCounter() {
    let now = Math.floor(Date.now() / 1000);
    let diff = now - startTime;
    let m = Math.floor(diff / 60);
    let s = Math.floor(diff % 60);
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("timer").textContent = m + ":" + s;
    setTimeout(startTimeCounter, 500);
  }

  function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
  }

  startTimeCounter();


}

export default addHeader; 