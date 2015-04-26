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

  $('.hamburger').click(function(e) { // TOGGLE MOBILE NAV ON HAMBURGER CLICK
    e.preventDefault();
    $('header nav ul').toggleClass('show_nav');
    $(this).toggleClass('menuopen');
    //FORCES REDRAW IN MOBILE SAFARI
    if (navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
      $('header nav ul').hide();
      $('header nav ul').get(0).offsetHeight;
      $('header nav ul').show();
      $(this).hide();
      $(this).get(0).offsetHeight;
      $(this).show();
    }
  });

  $('header nav ul li a').click(function() { // TOGGLE MOBILE NAV ON NAV ITEM CLICK
    $('header nav ul').toggleClass('show_nav');
    $('.hamburger').toggleClass('menuopen');
  });

  $('.tools_icon').click(function(e) { // TOGGLE MOBILE NAV ON HAMBURGER CLICK
    e.preventDefault();
    $('.tools').toggleClass('madeofopen');
    $(this).toggleClass('tools_icon_open');
    //FORCES REDRAW IN MOBILE SAFARI
    if (navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
      $('.tools_icon').hide();
      $('.tools_icon').get(0).offsetHeight;
      $('.tools_icon').show();
      $('.tools').hide();
      $('.tools').get(0).offsetHeight;
      $('.tools').show();
    }
  });

  if ( $(window).width() > 1025) { // MEDIUM - ORIGINAL 850 CHANGED FOR IPAD
    $('body.index section.work').css("margin-top", screenheight);
  }
  else {
    $('body.index section.work').css("margin-top", 0);
  }

  // window.onorientationchange = function()
  // {
  //    window.location.reload();
  // }

  $('.fancybox').fancybox();
  
  $('body').upUpDownDown({
      watchFor: [38,38,40,40,37,39,37,39,66,65],
      callback: function(){
           $(".fancybox").eq(0).trigger('click');
      }
  });

});