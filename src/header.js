import waldo from './images/waldoCropped.jpg'
import wenda from './images/wendaCropped.jpg'
import wizard from './images/wizardCropped.jpg'

let charArray = [waldo, wenda, wizard]

const getHighScore = async () => {

    //console.log(currentPlayer.allData.uuid)
  
  
    try {
  
      const response = await fetch('http://localhost:3000/game/highscore')
  
      const gameData = await response.json();
  
    }
  
    catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
      //add error message to dom
      //errorDisplay()
    }
  
  
  }

    
  

const addHeader = () => {
    //******************************** if message: no high score 
    getHighScore()
   
    const header = document.createElement('header');
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer');
    const titleDiv = document.createElement('div');
    titleDiv.textContent = "Where's Waldo"
    const picContainer = document.createElement('div');
    picContainer.classList.add('picContainer');
    for (let i=0; i < charArray.length; i++) {
        
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
    header.appendChild(headerContainer)
    
    document.body.appendChild(header)
}

export default addHeader; 