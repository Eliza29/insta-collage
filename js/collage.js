window.onload = () => {
  let imgForCollage = document.getElementsByTagName('img');
  imgForCollage = [...imgForCollage];
  console.log(imgForCollage);

  let deleteParentContainer = divParent => divParent.parentElement.removeChild(divParent);
  let createIconPhoto = parent => {
    let spanIcon = document.createElement('span');
    spanIcon.setAttribute('class', 'icon-instagram aling-center c-white');
    parent.appendChild(spanIcon); 
  };

  let createParentContainer = child => {
    let containerImgs = document.getElementById('container-imgs');
    let divContainerParent = document.createElement('div');
    divContainerParent.setAttribute('class', 'col-4 p-0 border height-2');
    divContainerParent.appendChild(child);
    containerImgs.appendChild(divContainerParent);
  };

  let handleDragStart = event => { 
    event.dataTransfer.setData('text', event.target.id);
  };

  let handleDragOver = event => {
    event.preventDefault(); 
    event.dataTransfer.dropEffect = 'move'; 
  };

  let handleDrop = event => {
 debugger;
    event.preventDefault();
    let parentFirtsContainer;
    if (event.target.classList.contains('border-img')) {
      let idImg = event.dataTransfer.getData('text');
      parentFirtsContainer = document.getElementById(idImg).parentElement;
      event.target.removeChild(event.target.children[0]); 
      event.target.appendChild(document.getElementById(idImg));
      if (parentFirtsContainer.classList.contains('border-img'))
        createIconPhoto(parentFirtsContainer);
      else 
        deleteParentContainer(parentFirtsContainer);
    } else if (event.target.id) {
      let idImg = event.dataTransfer.getData('text');
      let newParentContainer = event.target.parentElement; 
      parentFirtsContainer = document.getElementById(idImg).parentElement;                 
      newParentContainer.removeChild(event.target);
      newParentContainer.appendChild(document.getElementById(idImg));
      if (newParentContainer.classList.contains('border-img') && parentFirtsContainer.classList.contains('border-img')) 
        createIconPhoto(parentFirtsContainer); 
      else 
        deleteParentContainer(parentFirtsContainer);  
      
      createParentContainer(event.target);      
    }
  };

  // asociando funciones a eventos
  document.addEventListener('dragstart', handleDragStart);
  document.addEventListener('dragover', handleDragOver);
  document.addEventListener('drop', handleDrop);
} ;