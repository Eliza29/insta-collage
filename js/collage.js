window.onload = function () {
  let imgForCollage = document.getElementsByTagName('img');
  imgForCollage = [...imgForCollage];

  document.addEventListener('dragstart', handleDragStart);
  document.addEventListener('dragover', handleDragOver);
  document.addEventListener('drop', handleDrop);

  function handleDragStart(event) { 
    event.dataTransfer.setData('text', event.target.id);
  }

  function handleDragOver(e) {
    e.preventDefault(); 
    e.dataTransfer.dropEffect = 'move'; 
  }

  function handleDrop(event) { debugger
    event.preventDefault();

    if (event.target.classList.contains('border-img')) {
      let idImg = event.dataTransfer.getData('text');
      event.target.appendChild(document.getElementById(idImg));
    } else if (event.target.id) {
      let idImg = event.dataTransfer.getData('text');
      let parentContainer = event.target.parentElement; 
      parentContainer.removeChild(event.target);
      parentContainer.appendChild(document.getElementById(idImg));
    }
  }

} ;