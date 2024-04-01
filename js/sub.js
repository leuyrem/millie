//책커버 회전
$('.turn_img').click(function () {
    $(this).toggleClass('rotate');
});

//bookcard
var swiper = new Swiper(".mySwiper1", {
    rewind: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$('.mySwiper1').mouseover(function(){
    $('.btn').stop().fadeIn();
}).mouseout(function(){
    $('.btn').stop().hide();
});


//together
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 6,
    // centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});


//more
//목차
    $('.index .show').click(function(){
      $('.txt3Wrap').animate({height : '380px'}, 800);
      $('.index .show').hide();
      $('.index .hide').show();
    });
    $('.index .hide').click(function(){
      $('.txt3Wrap').animate({height : '150px'}, 500);
      $('.index .hide').hide();
      $('.index .show').show();
    });


  //추천사
  $('.recommend .show').click(function(){
    $('.txt4Wrap').animate({height : '320px'}, 800);
    $('.recommend .show').hide();
    $('.recommend .hide').show();
  });
  $('.recommend .hide').click(function(){
    $('.txt4Wrap').animate({height : '150px'}, 500);
    $('.recommend .hide').hide();
    $('.recommend .show').show();
  });

  //책속으로
  $('.bookin .show').click(function(){
    $('.txt5Wrap').animate({height : '600px'}, 800);
    $('.bookin .show').hide();
    $('.bookin .hide').show();
  });
  $('.bookin .hide').click(function(){
    $('.txt5Wrap').animate({height : '230px'}, 500);
    $('.bookin .hide').hide();
    $('.bookin .show').show();
  });

  //출판사 서평
  $('.publisher .show').click(function(){
    $('.txt6Wrap').animate({height : '700px'}, 800);
    $('.publisher .show').hide();
    $('.publisher .hide').show();
  });
  $('.publisher .hide').click(function(){
    $('.txt6Wrap').animate({height : '150px'}, 500);
    $('.publisher .hide').hide();
    $('.publisher .show').show();
  });




//txt
$.get("./sub_txt/txt1.txt", function (data) {
    $(".txt1Wrap").html(data);
});

$.get("./sub_txt/txt2.txt", function (data) {
    $(".txt2Wrap").html(data);
});

$.get("./sub_txt/txt3.txt", function (data) {
    $(".txt3Wrap").html(data);
});

$.get("./sub_txt/txt4.txt", function (data) {
    $(".txt4Wrap").html(data);
});

$.get("./sub_txt/txt5.txt", function (data) {
    $(".txt5Wrap").html(data);
});

$.get("./sub_txt/txt6.txt", function (data) {
    $(".txt6Wrap").html(data);
});

$.get("./sub_txt/txt7.txt", function (data) {
    $(".txt7Wrap").html(data);
});