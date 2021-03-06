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

  $('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  $(document).on('click', '.btn-close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  $('.main-product').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.goods'
  });

  $('.goods').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    asNavFor: '.main-product',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    adaptiveHeight: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
  });

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  })

  var $slider = $('.multiple-items');

  if ($slider.length) {
    var currentSlide = 0;
    var slidesCounts = 0;

    $slider.on('init afterChange', function(event, slick) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCounts = slick.slideCount;
      $("#slider-counter").html(currentSlide + ' из ' +slidesCounts)
    });

    $slider.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      appendArrows: $('.multiple-items-arrow'),
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    });
  }

  $('.reviews-sl').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });

  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });

  $('.btn-menu').click(function() {
    $('.menu').slideToggle();
  });

  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
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
