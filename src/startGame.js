import waldo0 from './images/waldo0resize.jpg'
import waldo1 from './images/waldo1resize.jpg'
import waldo2 from './images/waldo2resize.jpg'
import waldo3 from './images/waldo3resize.jpg'
import waldo from './images/waldoHead.jpg'
import wenda from './images/wendaHead.jpg'
import wizard from './images/wizardHead.jpg'

const startGame = () => {

    let imageArray = [waldo0, waldo1, waldo2, waldo3]
    let titleArray = ["The Beach", "Troy", "Maze", "Robin Hood"]


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


    headingImages.appendChild(headImage1)
    headingImages.appendChild(headImage2)
    headingImages.appendChild(headImage3)
    startContainer.appendChild(heading)
    startContainer.appendChild(headingImages)

    // game boards

    for (let i = 0; i < imageArray.length; i++) {

        const picHeaderContainer = document.createElement('div');
        picHeaderContainer.textContent = titleArray[i]
        const imageContainer = document.createElement('div');
        imageContainer.id = "imageContainer"
        const image0 = new Image();
        image0.src = imageArray[i];
        image0.classList.add('waldo1Pic');
        const button = document.createElement('button');
        button.textContent = 'Start Game';
        button.id = 'startButton'

        imageContainer.appendChild(image0)
        startContainer.appendChild(picHeaderContainer)
        startContainer.appendChild(imageContainer)
        startContainer.appendChild(button)

    }


    document.body.appendChild(startContainer);
}

export default startGame;