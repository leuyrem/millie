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
// $('.index').stop().hide();
// $('.more').click(function () {
//   $(this).find('.more').toggleClass('rotate');
//   $(this).siblings().slideToggle();
// });



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