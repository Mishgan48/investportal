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

$(window).scroll(function() {
  var top_height = $('#top').height();
  if ($(this).scrollTop() < top_height) {
		$('.logo__noyellow').css('color', '#ffffff');
    $('.find__input').css('background', 'rgba(255, 255, 255, 0.2)');
    $('.menu').css('color', '#ffffff');
    $('.menu').show(1200);
    $('.top__icons').css('filter', 'none');
    $('.hamburger').css('filter', 'none');
    // $('.bar').css('background-color', '#ffffff');
    $('.hamburger').hide(300);
	} else if ($(this).scrollTop() >= top_height && $(this).scrollTop() < top_height*2) {
    $('.logo__noyellow').css('color', '#000000');
    $('.find__input').css('background', 'rgba(0, 0, 0, 0.2)');
    $('.menu').css('color', '#000000');
    $('.menu').hide(1500);
    $('.top__icons').css('filter', 'contrast(20%)');
    // $('.bar').css('background-color', '#000000');
    $('.hamburger').css('filter', 'contrast(20%)');
    $('.hamburger').show(300);
  } else if ($(this).scrollTop() >= top_height*2 && $(this).scrollTop() < top_height*3) {
    $('.logo__noyellow').css('color', '#ffffff');
    $('.find__input').css('background', 'rgba(255, 255, 255, 0.2)');
    $('.menu').hide(1500);
    $('.menu').css('color', '#ffffff');
    $('.top__icons').css('filter', 'none');
    $('.hamburger').css('filter', 'none');
    $('.hamburger').show(300);
    // $('.bar').css('background-color', '#ffffff');
  } else if ($(this).scrollTop() >= top_height*3 && $(this).scrollTop() < top_height*4) {
    $('.logo__noyellow').css('color', '#000000');
    $('.find__input').css('background', 'rgba(0, 0, 0, 0.2)');
    $('.menu').hide(1500);
    $('.menu').css('color', '#000000');
    $('.top__icons').css('filter', 'contrast(20%)');
    $('.hamburger').css('filter', 'contrast(20%)');
    $('.hamburger').show(300);
    // $('.bar').css('background-color', '#000000');
  } else if ($(this).scrollTop() >= top_height*4 && $(this).scrollTop() < top_height*5) {
    $('.logo__noyellow').css('color', '#ffffff');
    $('.find__input').css('background', 'rgba(255, 255, 255, 0.2)');
    $('.menu').hide(1500);
    $('.menu').css('color', '#ffffff');
    $('.top__icons').css('filter', 'none');
    $('.hamburger').css('filter', 'none');
    $('.hamburger').show(300);
    // $('.bar').css('background-color', '#ffffff');
  } else if ($(this).scrollTop() >= top_height*5 && $(this).scrollTop() < top_height*6) {
    $('.logo__noyellow').css('color', '#000000');
    $('.find__input').css('background', 'rgba(0, 0, 0, 0.2)');
    $('.menu').hide(1500);
    $('.menu').css('color', '#000000');
    $('.top__icons').css('filter', 'contrast(20%)');
    $('.hamburger').css('filter', 'contrast(20%)');
    $('.hamburger').show(300);
    // $('.bar').css('background-color', '#000000');
  } else {
    $('.logo__noyellow').css('color', '#ffffff');
    $('.find__input').css('background', 'rgba(255, 255, 255, 0.2)');
    $('.menu').hide(1500);
    $('.menu').css('color', '#ffffff');
    $('.top__icons').css('filter', 'none');
    $('.hamburger').css('filter', 'none');
    $('.hamburger').show(300);
    // $('.bar').css('background-color', '#ffffff');
  };
});

var scrollPosition = 0;

$(document).ready(function() {
  $(document).scroll(function() {
    var top_height = $('#top').height();
    if ($(this).scrollTop() > scrollPosition) {
      for(var i=0; i<10; i++) {
        if ($(this).scrollTop() > top_height*i && $(this).scrollTop() <= top_height*(i+1)) {
          $(this).scrollTop(top_height*(i+1));
          scrollPosition = $(this).scrollTop();
          return;
        }
      }
    } else if ($(this).scrollTop() < scrollPosition) {
      for(var i=0; i<10; i++) {
        if ($(this).scrollTop() >= top_height*i && $(this).scrollTop() < top_height*(i+1)) {
          $(this).scrollTop(top_height*i);
          scrollPosition = $(this).scrollTop();
          return;
        }
      }
    }
  })
});

$(function() {
  $('.checkbox1').on('click', function() {
    if ($('.menu').css('display') == 'none' ) {
      $('.menu').show(1200);
    } else {
      $('.menu').hide(1500);
    }
  });
});
