const youWon = (coord) => {
  
    let [x, y] = coord
 
    const element = document.createElement('div');
    element.id = 'youWon';
    element.style.position = 'absolute';
    element.style.left = x + "px";
    element.style.top = y + "px";
    const text = document.createElement('h2');
    text.textContent = "You Won!"

    element.appendChild(text)
  
    document.body.appendChild(element)
    
   
  }

  export default youWon;