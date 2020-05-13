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

  $('.dropdown').on("click", '.toggle', function (e) {
    // $dropdownContainer.stop().slideToggle();
    // $dropdownContainer.slideToggle();
    let $this = $(this);
    let $dropdownContainer = $this.parents('.dropdown').find('.dropdown-container');
    $dropdownContainer.slideToggle();
  });

  $('.submenu > li').matchHeight();

  $('.slider').slick({
    dots: true,
    arrows: false
  });

  $('#nav-icon2').click(function(){
    $(this).addClass('open');
  });

  $('.mfp-wrap').click(function(){
    $('#nav-icon2').removeClass('open');
  });

  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: false,
    preloader: false,
    
    midClick: false,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

  let $volumeSlider1 = $("#slider-value-count-1");
  let $volumeSlider2 = $("#slider-value-count-2");
  let $sliderValue1 = $('#slider-value-1');
  let $sliderValue2 = $('#slider-value-2');
  let $pointsCount = $("#points-count");
  let $inputInfo = $('.input-info');

  $volumeSlider1.slider({
    range: "min",
    value: 120,
    min: 1,
    max: 500,
    create: function() {
      $sliderValue1.text($( this ).slider( "value" ));
    },
    slide: function( event, ui ) {
      $sliderValue1.text( ui.value );
      $pointsCount.text(ui.value * $volumeSlider2.slider( "value" ))
    }
  });

  $volumeSlider2.slider({
    range: "min",
    value: 2000,
    min: 1,
    max: 4000,
    create: function() {
      $sliderValue2.text($( this ).slider( "value" ));
    },
    slide: function( event, ui ) {
      $sliderValue2.text( ui.value );
      $pointsCount.text(ui.value * $volumeSlider1.slider( "value" ))
    }
  });

  $pointsCount.text($volumeSlider1.slider( "value" ) * $volumeSlider2.slider( "value" ))

  $('.language').on("click", '.item', function () {
    let $this = $(this);
    let $dataNumber = $this.attr('data-number');
    let $flag = $this.find('img').attr('src');

    $this.parents('.dropdown').find('.toggle img').attr('src', $flag);
    $this.parents('.input-dropdown').find('.tel-input').val($dataNumber).attr('placeholder', $dataNumber);

    $this.parents('.dropdown').find('.dropdown-container').slideToggle();
  });

  $inputInfo.on("click", '.info-btn', function () {
    let $this = $(this);
    let $parent = $this.parents('.input-info');

    if($parent.hasClass("active")){
      $parent.removeClass('active');
    } else {
      $('.input-info').removeClass('active');
      $parent.addClass('active');
    }
  });

  $(document).mouseup(function (e){
    if (!$inputInfo.is(e.target)
      && $inputInfo.has(e.target).length === 0) {
      $('.input-info').removeClass('active');
    }
  });

  $inputInfo.on("mouseout", '.info-btn', function () {
    let $this = $(this);

    if($this.parents('.input-info').hasClass('active')){
      $this.parents('.input-info').removeClass('active');
    }
  });

  $( ".selectmenu" ).selectmenu();

  $('.datepicker').datepicker();

  $.fn.forceNumbericOnly = function () {
    return this.each(function () {
      $(this).keydown(function (e) {
        let key = e.charCode || e.keyCode || 0;
        return (key == 8 || key == 9 || key == 46 || (key >= 37 && key <= 40) || (key >=
          48 && key <= 57) || (key >= 96 && key <= 105) || key == 107 || key ==
          109 || key == 173 || key == 61);
      });
    });
  };

  $('input[type=tel]').forceNumbericOnly();
});

const dragAndDropsList = document.getElementById('file-list');

function handleFiles(files) {
  var files = [...files];

  let filesHtml = "";
  for (let i = 0; files.length > i; i++){
    filesHtml += '<div class="file"><div class="name">' + files[i].name + '</div></div>'
  }

  dragAndDropsList.innerHTML = filesHtml;
}