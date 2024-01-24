// add message

const addMessage = (message, name) => {
  
 
    const element = document.createElement('div');
    element.id = 'message';
    if (message == false) {
      element.textContent = "Try Again"
      element.style.backgroundColor = 'red'
    }
    if (message == true) {
      element.textContent = `You Found ${name}`
      element.style.backgroundColor = 'green'
    }
    element.classList.add('message');
   
    document.body.appendChild(element)
    
    setTimeout(removeMessage, 1000);
    
    function removeMessage() {
      element.remove()
    }


  }

  export default addMessage;