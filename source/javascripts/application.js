//= require_tree .

$(document).ready(function(){

  var screenheight = $(window).height();

  $(function() { // SMOOTH SCROLL
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  $('.hamburger').click(function() {
    // e.preventDefault();
    $('header nav ul').toggleClass('show_nav');
    $(this).toggleClass('menuopen');
    return false;
  });

  if ( $(window).width() > 850) { // MEDIUM
    $('body.index section.work').css("margin-top", screenheight);
  }
  else {
    $('body.index section.work').css("margin-top", 0);
  }

});