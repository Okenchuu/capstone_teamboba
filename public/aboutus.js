$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ourApp').offset().top - 150 }, 'slow');
      return false;
    });
  });