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

//together
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});