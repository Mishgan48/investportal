$(function(){
  $('.slick-vertical').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 10,
    autoplay: true,
    prevArrow: '<img class="slick-prev" src="img/up.png">',
    nextArrow: '<img class="slick-next" src="img/down.png">'
  });
});

$(document).ready(function(){
  $("#application-wrapper").onepage_scroll({
    sectionContainer: ".lp-section",
    //responsiveFallback: 600,
    pagination: false,
    loop: true,
    animationTime: 500,
    //direction: "vertical"
    afterMove: function(index) {
      if (index == '2' || index == '4'|| index == '6') {
        $('.menu').css('color', '#000000');
        $('.logo__noyellow').css('color', '#000000');
        $('.find__input').css('background', 'rgba(0, 0, 0, 0.2)');
        $('.top__icons').css('filter', 'contrast(20%)');
        $('.hamburger').css('filter', 'contrast(20%)');
      } else {
        $('.menu').css('color', '#ffffff');
        $('.logo__noyellow').css('color', '#ffffff');
        $('.find__input').css('background', 'rgba(255, 255, 255, 0.2)');
        $('.top__icons').css('filter', 'none');
        $('.hamburger').css('filter', 'none');
      }

      if (index == '1') {
        //$('.hamburger').
        $('.menu').css('transform', 'scale(1,1)');
        $('.menu').prop('data', 1);
        $('.find').css('transform', 'translate(0,0)');
        $('.hamburger').css('transform', 'scale(0,0)');
      } else {
        $('.menu').css('transform', 'scale(0,0)');
        $('.menu').prop('data', 0);
        $('.find').css('transform', 'translate(0,-115%)');
        $('.hamburger').css('transform', 'scale(1,1)');
      }
    }
  });
});

$(function() {
  $('.checkbox1').on('click', function() {
    if ($('.menu').prop('data') == 0 ) {
      $('.menu').prop('data', 1);
      $('.menu').css('transform', 'scale(1,1)');
      $('.find').css('transform', 'translate(0,0)');
      return;
    } else {
      $('.menu').prop('data', 0);
      $('.menu').css('transform', 'scale(0,0)');
      $('.find').css('transform', 'translate(0,-115%)');
      return;
    }
  });
});
