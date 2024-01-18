import waldo from './images/waldoCropped.jpg'
import wenda from './images/wendaCropped.jpg'
import wizard from './images/wizardCropped.jpg'

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
  //******************************** if message: no high score 
  let highScoreData = await getHighScore()
 

  const header = document.createElement('header');
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('headerContainer');
  const titleDiv = document.createElement('div');
  titleDiv.textContent = "Where's Waldo"
  const highScoreDiv = document.createElement('div');
  highScoreDiv.classList.add('highScoreContainer');
  highScoreDiv.textContent = highScoreData[0].userName + " has the current best time of " + highScoreData[0].score
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

  headerContainer.appendChild(titleDiv)
  headerContainer.appendChild(picContainer)
  headerContainer.appendChild(highScoreDiv)
  header.appendChild(headerContainer)

  document.body.appendChild(header)
}

export default addHeader; 