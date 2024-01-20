import waldo0 from './images/waldo0.jpg'
import waldo1 from './images/waldo1.jpg'
import waldo2 from './images/waldo2.jpg'
import waldo3 from './images/waldo3.jpg'

const addPic = (picture) => {

    let picArray = [waldo0, waldo1, waldo2, waldo3]

    const picContainer = document.createElement('div');
    picContainer.id = 'picContainer'
    picContainer.classList.add('svgContainer');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.id = 'container';
    svg.style.backgroundImage = `url(${picArray[picture]})`


    picContainer.appendChild(svg)

    document.body.appendChild(picContainer);
}



export default addPic;