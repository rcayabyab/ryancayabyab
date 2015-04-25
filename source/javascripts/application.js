//= require_tree .

$(document).ready(function(){

  var screenheight = $(window).height();

  $('section.work').css("margin-top", screenheight);

  $('.hamburger').click(function(e) {
    e.preventDefault();
    $('header nav ul').toggleClass('show_nav');
    return $(this).toggleClass('menuopen');
  });

});