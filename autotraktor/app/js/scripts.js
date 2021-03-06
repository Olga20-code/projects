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

  $('.cargo-slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  let totalSum = $('#total-sum');
  let countEl = 0;

  function countAllSum() {
    if(totalSum){

      countEl = 0;

      $(".count-total-sum").each(function(){
        let sumT = $(this).html();
        countEl += Number(sumT);
      });

      totalSum.text(countEl);
    }
  }

  countAllSum();

  $('.calc').on('click', '.btn-calc', function () {
    let btn = $(this);
    let count = $(this).parents('.calc').find('.count');
    let countSum = count.attr('data-price');
    let countNumber = count.html();
    let sum = $(this).parents('.item').find('.sum .count-total-sum');

    if(btn.hasClass('plus')){
      countNumber++;
    } else {
      if(countNumber > 1){
        countNumber--;
      }
    }

    sum.text(+countSum * countNumber);
    count.text(countNumber);

    countAllSum();
  });

  $('.basket-main .remove-item').on("click", function () {
    $(this).parents('.item').remove();
    countAllSum();
    console.log("ааа");
  });
});
