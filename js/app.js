/* Funcionalidad del proyecto*/
$(document).ready(function() {
    var $email = $('#inputEmail');
    var $password = $('#inputPassword');
    var $buttonSubmit = $('#buttonSubmit')
  
  
    var validateEmail = false;
    var validatePassword = false; 
  
    // llamamos a los valores guardados en el localStorage
    console.log(localStorage.email);
    console.log(localStorage.password);
  
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
        alert('Bienvenido');
        window.location.href = 'views/collage.html';
      } else {
        alert('Clave y/o contraseña incorrecta');
      }
     
    });
  });