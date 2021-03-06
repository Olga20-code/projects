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

  $('.card').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    fade: true,
    appendArrows: $('.multiple-items-arrow'),
    asNavFor: '.card-small'
  });

  $('.card-small').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    asNavFor: '.card',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  let $slider = $('.card');

  if ($slider.length) {
    let currentSlide = 1;
    let slidesCounts = $slider.find('.card__text').length;

    let  $nextBtn = $('.card-small .slick-next');

    $("#slider-counter").html(currentSlide + ' - ' +slidesCounts)

    $slider.on('init afterChange', function(event, slick) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCounts = slick.slideCount;
      $("#slider-counter").html(currentSlide + ' - ' +slidesCounts);

      if (currentSlide === slidesCounts){
        $nextBtn.addClass('disabled prev-btn');
      } else {
        $nextBtn.removeClass('disabled prev-btn');
      }
    });
  }; 
});
