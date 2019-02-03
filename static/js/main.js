$(function() {

  $('#nav__toggle').click(function(){
    $('header').toggleClass('open');
    $('nav').fadeToggle(200);
  })

  const USER_ID_VALIDATION_MSG = '半角英数字で入力してください'
  const USER_ID_SHOTAGE_MSG = '4文字以上入力してください'
  const PASSWORD_VALIDATION_MSG = '半角英数記号で入力してください'
  const PASSWORD_SHOTAGE_MSG = '8文字以上入力してください'
  const PASSWORD_RETYPE_VALIDATION_MSG = '同じパスワードを入力してください'

  $('input[name="login"]').keyup(function(){
    var user_id_validation_error = !$(this).val().match(/^([a-zA-Z0-9])+$/);
    if(user_id_validation_error === true){
      $('#user_id_validation_msg').text(USER_ID_VALIDATION_MSG);
    }else if (this.value.length < 4) {
      $('#user_id_validation_msg').text(USER_ID_SHOTAGE_MSG);
    }else{
      $('#user_id_validation_msg').text('');
    };
  });

  $('input[name="password"]').keyup(function(){
    var password_validation_error = !$(this).val().match(/^([\x20-\x7E])+$/);
    if(password_validation_error === true){
      $('#password_validation_msg').text(PASSWORD_VALIDATION_MSG);
    }else if (this.value.length < 8) {
      $('#password_validation_msg').text(PASSWORD_SHOTAGE_MSG);
    }else{
      $('#password_validation_msg').text('');
    };
  });

  $('input[name="password_retype"]').keyup(function(){
    if(this.value !== $('input[name="password"]').val()){
      $('#password_retype_validation_msg').text(PASSWORD_RETYPE_VALIDATION_MSG);
    }else{
      $('#password_retype_validation_msg').text('');
    };
  });

})