$(function() {
  $('#nav__toggle').click(function(){
    $('header').toggleClass('open');
    $('nav').fadeToggle(200);
  })
})