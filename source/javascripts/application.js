//= require_tree .

$(document).ready(function(){

  var screenheight = $(window).height();

  $('.hamburger').click(function(e) {
    e.preventDefault();
    $('header nav ul').toggleClass('show_nav');
    return $(this).toggleClass('menuopen');
  });

  if ( $(window).width() > 850) { // MEDIUM
    $('section.work').css("margin-top", screenheight);
  }
  else {
    $('section.work').css("margin-top", 0);
  }

});