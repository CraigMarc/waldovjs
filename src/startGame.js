const startGame = () => {

    
    const startContainer = document.createElement('div');
    startContainer.id = "buttonContainer"
    const button = document.createElement('button');
    button.textContent = 'Start Game';
    button.id = 'button'
    startContainer.appendChild(button)
    document.body.appendChild(startContainer);
}

export default startGame;