const addPic = () => {

    const picContainer = document.createElement('div');
    picContainer.classList.add('svgContainer');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    //const svg = document.createElement('svg');
    svg.id = 'container';
    picContainer.appendChild(svg)

    document.body.appendChild(picContainer);
}

export default addPic;