//box3 video
setInterval(function () {
  if ($(".movie").prop("ended")) {
  }
}, 200);



//box9
//tab menu
$('.tab li').click(function () {
  index = $(this).index();

  $('.tab_sub ').eq(index).show().css('display','flex').siblings().hide();
  $(this).addClass("active").siblings().removeClass("active");
});

//swiper
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".audiobtn",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  on: {
    slideChange: function () {
      let idx = this.activeIndex;
      console.log(idx);
      $('.slide .slide-body').eq(idx).fadeIn().siblings().hide();
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  pagination: {
    el: ".viewbtn",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  on: {
    slideChange: function () {
      let idx = this.activeIndex;
      console.log(idx);
      $('.slide2 .slide-body').eq(idx).fadeIn().siblings().hide();
    },
  },
});


//box10 
//toggle
$('.Q').siblings().hide();
$('.Q').click(function () {
  $(this).find('img').toggleClass('q1');
  $(this).siblings().slideToggle();
});

