const youWon = () => {


  const element = document.createElement('div');
  element.id = 'youWon';
  const text = document.createElement('h2');
  text.textContent = "You Won!"

  element.appendChild(text)

  document.body.appendChild(element)


}

export default youWon;