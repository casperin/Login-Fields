$(document).ready(function(){

  // First we hide the real password field, and show the password fake
  $(".login_password").hide();
  $(".login_fake").show();

  // adding 'idleField' as class to every input
  $("input").addClass("idleField");
  
  // and removing it again for the real password field
  $(".login_password").removeClass("idleField");

  // removing the default value on focus on login_name
  $("input.login_name").focus(function(){
    if (this.value==this.defaultValue) {
      this.value='';
    };
    $(this).removeClass("idleField").select();
  });

  // when the fake gets focus, remove and show the real password field and give it focus
  $("input.login_fake").focus(function(){
    $(this).hide().prev().show().focus();
  });

  // on blur of the real password field, if it's empty, hide it and show the fake again
  $("input.login_password").blur(function(){
    if (this.value=='') {
      $(this).hide().next().show();
    };
  });

  // in this example this is only really used for login_name, but it checks on blur if it's empty, and if so gives the fields its default value again
  $("input").blur(function(){
    if (this.value==''){
      $(this).addClass("idleField");
      this.value = this.defaultValue;
    };
  });

});



