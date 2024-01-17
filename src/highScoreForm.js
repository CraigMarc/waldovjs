const highScoreForm = (coord) => {
    // get click coordinates
    let [x, y] = coord
   
  
    const form = document.createElement('form');
    form.action = ''
    const formContainer = document.createElement('div');
    const title = document.createElement('p');
    title.textContent = "You have the new best time enter your name."
    formContainer.classList.add('formContainer');
    const label1 = document.createElement('label');
    label1.textContent = "Name"
    const input1 = document.createElement('input');
    input1.name = "name"
    input1.type = "text"
    input1.id = "name"
    input1.required = true
    const submitContainer = document.createElement('div');
    submitContainer.classList.add('submitContainer');
    const button = document.createElement('button');
    button.type = 'submit'
  }
  
  export default highScoreForm; 