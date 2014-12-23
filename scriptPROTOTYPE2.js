var toggleButton = function() {
  var $img = $('img')
  var $text = $('.text')
  var $smalltext = $('.smalltext')

  if ($(this).hasClass('showButton')) {
    $img.css('visibility', 'visible');
    $text.animate({right: "0"});
    $smalltext.animate({right: '0'});
  } else {
    $img.css('visibility', 'hidden');
    $text.animate({right: "75px"});
    $smalltext.animate({right: '75px'});
  }
}

/*var toggleTheSteps = function(){
  var $togglesteps = $('.togglesteps')

    $togglesteps.on('click', function(){
      $togglesteps = false;
  });
    if ($togglesteps === false) {
      $
  }

  }

  }


  if ($togglesteps % false) {

  }*/

$(document).ready(function() {
  $('.hideButton, .showButton').on('click', toggleButton)

  $('li, .text, .smalltext').on('click', function() {
    $(this).toggleClass('colorHighlight');
  });

  /*$('.togglesteps').on('click', toggleTheSteps(){

  });*/

  $(this).on('click', function(){
    $('.triangle-right').animate({bottom: '75px'});
  });

//  animate()

});
//::before use: contentzindex
