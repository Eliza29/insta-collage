/* Funcionalidad del proyecto*/
$(document).ready(function() {
  let $email = $('#inputEmail');
  let $password = $('#inputPassword');
  let $buttonSubmit = $('#buttonSubmit');
  
  let validateEmail = false;
  let validatePassword = false; 
  
  // si el email es igual al valor almacenado en el del local storage
  $email.on('input', function() {
    if ($(this).val() === localStorage.email) {
      validateEmail = true;
    }
  });
  // si el password es igual valor almacenado en localstorage
  $password.on('input', function() {
    if ($(this).val() === localStorage.password) {
      validatePassword = true;
    }
  });
  
  $buttonSubmit.on('click', function(event) {
    event.preventDefault();
    if (validateEmail && validatePassword) {
      window.location.href = 'views/collage.html';
    } else {
      alert('Clave y/o contraseña incorrecta');
    }
  });
});