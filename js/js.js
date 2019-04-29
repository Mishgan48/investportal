$(window).scroll(function() {
  var top_height = $('#top').height();
 if ($(this).scrollTop() < top_height) {
			$('.logo__noyellow').css('color', '#ffffff');
      $('.find__input').css('background', 'rgba(255, 255, 255, 0.2)');
      $('.menu').css('color', '#ffffff');
      $('.menu').show(1200);
      $('.top__icons').css('filter', 'none');
      // $('.bar').css('background-color', '#ffffff');
      $('.hamburger').hide(300);
		} else if ($(this).scrollTop() >= top_height && $(this).scrollTop() < top_height*2) {
     $('.logo__noyellow').css('color', '#000000');
     $('.find__input').css('background', 'rgba(0, 0, 0, 0.2)');
     $('.menu').css('color', '#000000');
     $('.menu').hide(1500);
     $('.top__icons').css('filter', 'contrast(20%)');
     // $('.bar').css('background-color', '#000000');
     $('.hamburger').show(300);
   } else if ($(this).scrollTop() >= top_height*2 && $(this).scrollTop() < top_height*3) {
     $('.logo__noyellow').css('color', '#ffffff');
     $('.find__input').css('background', 'rgba(255, 255, 255, 0.2)');
     $('.menu').css('color', '#ffffff');
     $('.top__icons').css('filter', 'none');
     // $('.bar').css('background-color', '#ffffff');
   } else if ($(this).scrollTop() >= top_height*3 && $(this).scrollTop() < top_height*4) {
      $('.logo__noyellow').css('color', '#000000');
      $('.find__input').css('background', 'rgba(0, 0, 0, 0.2)');
      $('.menu').css('color', '#000000');
      $('.top__icons').css('filter', 'contrast(20%)');
      // $('.bar').css('background-color', '#000000');
 		} else if ($(this).scrollTop() >= top_height*4 && $(this).scrollTop() < top_height*5) {
      $('.logo__noyellow').css('color', '#ffffff');
      $('.find__input').css('background', 'rgba(255, 255, 255, 0.2)');
      $('.menu').css('color', '#ffffff');
      $('.top__icons').css('filter', 'none');
      // $('.bar').css('background-color', '#ffffff');
 		} else if ($(this).scrollTop() >= top_height*5 && $(this).scrollTop() < top_height*6) {
      $('.logo__noyellow').css('color', '#000000');
      $('.find__input').css('background', 'rgba(0, 0, 0, 0.2)');
      $('.menu').css('color', '#000000');
      $('.top__icons').css('filter', 'contrast(20%)');
      // $('.bar').css('background-color', '#000000');
 		} else {
      $('.logo__noyellow').css('color', '#ffffff');
      $('.find__input').css('background', 'rgba(255, 255, 255, 0.2)');
      $('.menu').css('color', '#ffffff');
      $('.top__icons').css('filter', 'none');
      // $('.bar').css('background-color', '#ffffff');
 		};
});



// $(function() {
//   $('.checkbox1').on('click', function() {
//     if ($('.menu-s').is(":visible") ) {
//       $('.menu-s').stop(true,true).hide("slide", { direction: "left" }, 200);
//     } else {
//       $('.menu-s').stop(true,true).show("slide", { direction: "left" }, 200);
//     }
//   });
// });
