import './styles.css';
import myName from './myName';
import Image1 from './images/waldo.jpg'

function component() {
    const element = document.createElement('div');
  
    // use your function!
    element.textContent = myName('Craig');
    return element;
  }

 
  
  document.body.appendChild(component());

  /*add event listener*/
const pic = document.querySelector('.waldoPic');
    pic.addEventListener('click', imageCoor)

//get coordinate of click

function imageCoor (e) {
  console.log(e.pageX)
  console.log(e.pageY)
}

