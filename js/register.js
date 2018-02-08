$(document).ready(function() {
    var $email = $('#inputEmail');
    var $password = $('#inputPassword');
    
    var validateEmail = false;
    var validatePassword = false; 

    function activeButton() {
      if (validateEmail && validatePassword) {
        $('form > button').attr('disabled', false);
      }
    }
  
    function desactiveButton() {
      $('form > button').attr('disabled', 'disabled');
    } 
  
    $email.on('input', function(event) {
    
      var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
      console.log(REGEXEMAIL.test($(this).val()));
      console.log($(this).val());
      if (REGEXEMAIL.test($(this).val())) {
        validateEmail = true;
        activeButton(); 
      } else {
        desactiveButton();
      }
    });
   
    $password.on('input', function() {
      console.log($(this).val());
      if (($(this).val().length >= 6) && ($(this).val() != 123456))  {
        validatePassword = true;
        activeButton(); 
      } else {
        desactiveButton(); 
      }
    });
   
   
    $('form > button').on('click', function(event) {
      event.preventDefault();
      localStorage.email = $email.val();
      localStorage.password = $password.val();
      window.location.href = '../index.html';
    });
  });