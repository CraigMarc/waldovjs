import waldo2 from './images/waldo2resize.jpg'

const startGame = () => {


    const startContainer = document.createElement('div');
    startContainer.id = "buttonContainer"
    const heading = document.createElement('h1');
    heading.textContent = "Where's Waldo";
    const image1 = new Image();
    image1.src = waldo2;
    image1.classList.add('waldo1Pic');
    const button = document.createElement('button');
    button.textContent = 'Start Game';
    button.id = 'button'
    startContainer.appendChild(heading)
    startContainer.appendChild(image1)
    startContainer.appendChild(button)
    document.body.appendChild(startContainer);
}

export default startGame;