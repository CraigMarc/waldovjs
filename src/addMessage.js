// add message

const addMessage = (coord, message, name) => {
  
    let [x, y] = coord
  console.log(x)
    const element = document.createElement('div');
    if (message == false) {
      element.textContent = "Try Again"
    }
    if (message == true) {
      element.textContent = `You Found ${name}`
    }
    element.classList.add('message');
    element.style.position = 'absolute';
    element.style.left = x - 50 + "px";
    element.style.top = y + 150 + "px";
  
    document.body.appendChild(element)
  
  }

  export default addMessage;