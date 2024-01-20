// add message

const addMessage = (coord, message, name) => {
  
    let [x, y] = coord
 
    const element = document.createElement('div');
    element.id = 'message';
    if (message == false) {
      element.textContent = "Try Again"
    }
    if (message == true) {
      element.textContent = `You Found ${name}`
    }
    element.classList.add('message');
    element.style.position = 'fixed';
    element.style.top = '50%';
    element.style.left = '40%';
  
    document.body.appendChild(element)
    
    setTimeout(removeMessage, 1000);
    
    function removeMessage() {
      element.remove()
    }


  }

  export default addMessage;