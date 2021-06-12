$(document).ready(function () {

  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  //   const urlParams = new URLSearchParams(window.location.search);
  // const myParam = urlParams.get('myParam');

  $('form .btn').on('click', function () {

    checkInputs();
  });

  function checkInputs() {
    $('.alert').remove();
    let inputs = $('input');

    let userPassErr = false;
    let emptyFieldErr = false;

    for (var i = 0; i < 4; i++) {
      if (!inputs.eq(i).val()){
       emptyFieldErr = true;
      }else{
        for(let i=0; i<2; i++){
          if(inputs.eq(i).val().length < 3)
          userPassErr = true;
        }
      }
    }

    if (emptyFieldErr) {
      $('h5').after(`
    <div class= "alert alert-danger" >
    <strong>warning!</strong> Empty field!
</div >
 ` );
      return;
    }
  

    if (userPassErr) {
      $('h5').after(`
    <div class= "alert alert-danger" >
    <strong>warning!</strong> username and password must contain at least 3 characters.
</div >
 ` );
      return;
    }



    if (!($('#inputMobile').val().match(phoneno))){
      $('h5').after(`
    <div class= "alert alert-danger" >
    <strong>warning!</strong> please Enter a valid mobile number!.
</div >
 ` );
    return;
}

  $('form').submit();

  }

});