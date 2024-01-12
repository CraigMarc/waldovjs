const addMenu = (coord) => { 
    let [x, y] = coord
    
  
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menuContainer');
  menuContainer.style.position = 'absolute';
  menuContainer.style.left = x + 50 + "px";
  menuContainer.style.top = y + 20 + "px";
  const waldo = document.createElement('div');
  waldo.classList.add('waldo');
  waldo.textContent = "Waldo"
  const wizard = document.createElement('div');
  wizard.classList.add('wizard');
  wizard.textContent = "Wizard"
  const wilma = document.createElement('div');
  wilma.classList.add('wilma');
  wilma.textContent = "Wilma"
  menuContainer.appendChild(waldo)
  menuContainer.appendChild(wizard)
  menuContainer.appendChild(wilma)
  
  document.body.appendChild(menuContainer)
  }

  export default addMenu;