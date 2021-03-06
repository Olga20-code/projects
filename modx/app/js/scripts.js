'use strict';

$(document).ready(function() {

  // якір
  $(".go-to").on('click',function(e){

    e.preventDefault();

    var anchor = $(this).attr("href");

    if ($(anchor).length) {
      var run = $(anchor).offset().top;
      $('body,html').stop().animate({scrollTop: run}, 1500);
    } else {
      console.warn("ID don't search!")
    }
  });

  $(".mobile-menu").on("click", function(){
    $("header nav > ul").stop().slideToggle(function(){
      if ($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
    });
  });

  $.fn.forceNumbericOnly = function () {
    return this.each(function () {
      $(this).keydown(function (e) {
        var key = e.charCode || e.keyCode || 0;
        return (key == 8 || key == 9 || key == 46 || (key >= 37 && key <= 40) || (key >=
          48 && key <= 57) || (key >= 96 && key <= 105) || key == 107 || key ==
          109 || key == 173 || key == 61);
      });
    });
  };

  $('input[type=tel]').forceNumbericOnly();

  $('.popup').magnificPopup({
    type:'inline',
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  $('.content-more').each(function () {
    let $this = $(this);
    let allWrapMore = $this.find('.wrap-more');
    let countWrapMores = allWrapMore.length;
    let showMoreBtn = $this.find('.show-more');
    let showElementsCount = Number($this.attr('data-show'));
    let newShowElements = showElementsCount;

    if (countWrapMores <= showElementsCount) {
      showMoreBtn.hide();
    }
    for (let i = 0; i < showElementsCount; i++) {
      allWrapMore.eq(i).addClass('fadeIn');
    }

    showMoreBtn.on('click', function () {
      let showElementsCount = Number($this.attr('data-show'));

      newShowElements = newShowElements + showElementsCount;

      if (countWrapMores <= newShowElements) {
        $(this).hide();
      }

      for (showElementsCount; showElementsCount < newShowElements; showElementsCount++) {
        allWrapMore.eq(showElementsCount).addClass('fadeIn');
      }
    });
  });

  let yaga = document.querySelectorAll('.parallax--yaga');
   
    // if (window.innerWidth < 768){
    //   instance.destroy();
    //   $('.parallax--yaga').removeAttr('style')
    // }

    if (window.innerWidth > 768){
      new simpleParallax(yaga, {
        delay: 1,
        scale: 1.8,
        orientation: 'down',
        overflow: true
    });
    }
});
