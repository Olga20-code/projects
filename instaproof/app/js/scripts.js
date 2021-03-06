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
    $(this).toggleClass("active");
    $(".main-header .main-menu").stop().slideToggle( "slow", function(){
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

  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        $next = $this.next();

    $next.stop().slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  }
  var accordion = new Accordion($('#accordion'), false);

  $('.slider-galery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: '.slider-galery-arrow',
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
  });

  var slider = $('.slider-photograph');

  slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.slider-btn-prev').on('click', function() {
    $(slider).slick('slickPrev');
  });
  $('.slider-btn-next').on('click', function() {
    $(slider).slick('slickNext');
  });

  $('.slider-blog').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: false
  });

  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link__click');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        $next = $this.next();

    $next.stop().slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  }
  var accordion = new Accordion($('#accordion__two'), false);

  $('.slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-photographer',
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true
  });
  $('.slider-photographer').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-text',
    centerMode: true,
    centerPadding: '30px',
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
         slidesToShow: 3,
         slidesToScroll: 1
        }
      },
      {
          breakpoint: 770,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
          }
      }
    ]
  });

  $('.tab-btn').on('click', function() {
    let id = $(this).attr('data-id')

    $('.tab-btn').removeClass('active')
    $(this).addClass('active')
    $('.price__tr').removeClass('active')
    $('.'+id).addClass('active')
  });

  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link__faq');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        $next = $this.next();

    $next.stop().slideToggle();
    $next.stop().slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  }
  var accordion = new Accordion($('#accordion__faq'), false);

});
