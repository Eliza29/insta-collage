window.onload = function () {
  let imgForCollage = document.getElementsByTagName('img');
  imgForCollage = [...imgForCollage];

  let deleteParentContainer = divParent => divParent.parentElement.removeChild(divParent);

  let createParentContainer = (child) => {
    let containerImgs = document.getElementById('container-imgs');
    let divContainerParent = document.createElement('div');
    divContainerParent.setAttribute('class', 'col-4 p-0 border');
    divContainerParent.appendChild(child);
    containerImgs.appendChild(divContainerParent);
  };

  let handleDragStart = (event) => { 
    event.dataTransfer.setData('text', event.target.id);
  }

  let handleDragOver = (event) => {
    event.preventDefault(); 
    event.dataTransfer.dropEffect = 'move'; 
  }

  let handleDrop = (event) => { 
    event.preventDefault(); debugger;
    let parentFirtsContainer;
    if (event.target.classList.contains('border-img')) {
      let idImg = event.dataTransfer.getData('text');
      parentFirtsContainer = document.getElementById(idImg).parentElement; 
      event.target.appendChild(document.getElementById(idImg));
      deleteParentContainer(parentFirtsContainer);
    } else if (event.target.id) {
      let idImg = event.dataTransfer.getData('text');
      let newParentContainer = event.target.parentElement; 
      parentFirtsContainer = document.getElementById(idImg).parentElement;                 
      newParentContainer.removeChild(event.target);
      newParentContainer.appendChild(document.getElementById(idImg));
      deleteParentContainer(parentFirtsContainer);  
      createParentContainer(event.target);
    }
  }

  // asociando funciones a eventos
  document.addEventListener('dragstart', handleDragStart);
  document.addEventListener('dragover', handleDragOver);
  document.addEventListener('drop', handleDrop);
} ;