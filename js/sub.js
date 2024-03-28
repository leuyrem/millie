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

