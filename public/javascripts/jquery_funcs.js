

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