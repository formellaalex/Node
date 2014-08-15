

$(document).ready(function() {
  $('.show_hide_btn').click(function() {
    var $lefte = $('#formula');
    $lefte.animate({
      left: parseInt($lefte.css('left'),10) == 0 ?
        -$lefte.outerWidth() :
        0
    });
  });
});

$(document).ready(function() {
  $('h6').click(function() {
    var $lefty = $('#profile');
    $lefty.animate({
      left: parseInt($lefty.css('left'),10) == 0 ?
        -$lefty.outerWidth() :
        0
    });
    $('#nazwa_imie').html($(this).html());
  });
});

$(document).ready(function()
{
  /*$('ul#lista li').children('h2').next('div').attr('id', 'level');
  $('div#level').children('p').next('div').attr('id', 'level');
  $('div#level').children('p').next('div').css('margin-left','30px');
  $("ul#lista li").children("h2").click( function() { $(this).next('div').toggle(500); });
  $('div#level').children('p').click( function() { $(this).next('div').toggle(500); });
  */
  $('ul').addClass('menu_main');
  $('li').children('p').click( function() { $(this).next().toggle(500); });
  $('li').children('p').next().css('display', 'none');
});