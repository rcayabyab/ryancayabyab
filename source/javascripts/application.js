//= require "_jquery"
//= require "_fancybox"
//= require "_konami"

$(document).ready(function(){

  var screenheight = $(window).height();

  if ( $(window).width() > 1025) { // MEDIUM - ORIGINAL 850 CHANGED FOR IPAD
    $('body.index section.work').css("margin-top", screenheight);
  }
  else {
    $('body.index section.work').css("margin-top", 0);
  }

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

  $('.tools_icon').click(function(e) { // TOGGLE TOOLS IN FOOTER
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

// GOOGLE ANALYTICS
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-24065522-1', 'auto');
ga('send', 'pageview');