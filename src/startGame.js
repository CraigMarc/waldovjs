import waldo2 from './images/waldo2resize.jpg'
import waldo from './images/waldoHead.jpg'
import wenda from './images/wendaHead.jpg'
import wizard from './images/wizardHead.jpg'

const startGame = () => {


    const startContainer = document.createElement('div');
    startContainer.id = "buttonContainer"
    const heading = document.createElement('h1');
    heading.textContent = "Where's Waldo, Wenda and Wizard";
    const headingImages = document.createElement('div');
    const headImage1 = new Image();
    headImage1.src = waldo;
    headImage1.classList.add('headImage');
    const headImage2 = new Image();
    headImage2.src = wenda;
    headImage2.classList.add('headImage');
    const headImage3 = new Image();
    headImage3.src = wizard;
    headImage3.classList.add('headImage');
    const picHeaderContainer = document.createElement('div');
    picHeaderContainer.textContent = "The Beach"
    const imageContainer = document.createElement('div');
    imageContainer.id = "imageContainer"
    const image1 = new Image();
    image1.src = waldo2;
    image1.classList.add('waldo1Pic');
    const button = document.createElement('button');
    button.textContent = 'Start Game';
    button.id = 'button'
    imageContainer.appendChild(image1)
    headingImages.appendChild(headImage1)
    headingImages.appendChild(headImage2)
    headingImages.appendChild(headImage3)
    startContainer.appendChild(heading)
    startContainer.appendChild(headingImages)
    startContainer.appendChild(picHeaderContainer)
    startContainer.appendChild(imageContainer)
    startContainer.appendChild(button)
    document.body.appendChild(startContainer);
}

export default startGame;