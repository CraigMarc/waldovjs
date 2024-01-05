import './styles.css';
import myName from './myName';

function component() {
    const element = document.createElement('div');
  
    // use your function!
    element.textContent = myName('Craig');
    return element;
  }
  
  document.body.appendChild(component());

