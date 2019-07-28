$(function () {
  //この下から記入します
  $(".h_right").click(function () {
    $(".menu").slideToggle();
  });

  var startPos = 0;
  winScrollTop = 0;
  $(window).on('scroll', function () {
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
      if (winScrollTop >= 200) {
        $('.site-header').addClass('hide');
      }
    } else {
      $('.site-header').removeClass('hide');
    }
    startPos = winScrollTop;
  });

  var offset = 100;
  var duration = 500;
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.pagetop').fadeIn(duration);
    } else {
      jQuery('.pagetop').fadeOut(duration);
    }
  });

  jQuery('.pagetop').click(function (event) {
    event.preventDefault();
    jQuery('html,body').animate({
      scrollTop: 0
    }, duration);
    return false;

  });


});
