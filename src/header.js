import waldo from './images/waldoCropped.jpg'
import wenda from './images/wendaCropped.jpg'
import wizard from './images/wizardCropped.jpg'

let charArray = [waldo, wenda, wizard]

const addHeader = () => {
   
    const header = document.createElement('header');
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer');
    const titleDiv = document.createElement('div');
    titleDiv.textContent = "Where's Waldo"
    const picContainer = document.createElement('div');
    picContainer.classList.add('picContainer');
    for (let i=0; i < charArray.length; i++) {
        
        const picDiv = document.createElement('div');
        picDiv.classList.add('picDiv');
        const image = new Image();
        image.classList.add('headerImg');
        image.src = charArray[i]
        picDiv.appendChild(image)
        picContainer.appendChild(picDiv)
    }

    headerContainer.appendChild(titleDiv)
    headerContainer.appendChild(picContainer)
    header.appendChild(headerContainer)
    
    document.body.appendChild(header)
}

export default addHeader; 