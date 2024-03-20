//srcoll event

// scrollY
// window.addEventListener('scroll', function(){
//     console.log(window.scrollY)
// });

//메인
$('#main h1, #main p').css('transform', 'translateY(0px)').css('opacity', '1');

//box2

$(window).scroll(function () {
    var ws = $(this).scrollTop();

    if (0<ws<300) {
        $('#main h1, #main p').css("transform", "translateY(0px)").css("opacity", "1");
        $('#box1 .textwrap h2, #box1 .textwrap p, #box1 .cardlist').css("transform", "translateY(200px)").css("opacity", "0");
    }

    if(ws > 300 && ws < 1300){
        $('#main h1, #main p').css("transform", "translateY(200px)").css("opacity", "0");
        $('#box1 .textwrap h2, #box1 .textwrap p, #box1 .cardlist').css("transform","translateY(0px)").css("opacity","1");
        $('#box2 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
      }

      if(ws > 1300 && ws < 2200){
        $('#box1 .textwrap h2, #box1 .textwrap p, #box1 .cardlist').css("transform", "translateY(200px)").css("opacity", "0");
        $('#box2 .textwrap').css("transform","translateY(0px)").css("opacity","1");
        $('#box3 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
      }

      if(ws > 2200 && ws < 3300){
        $('#box2 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
        $('#box3 .textwrap').css("transform","translateY(0px)").css("opacity","1");
        $('#box4 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
      }

      if(ws > 3300 && ws < 4000){
        $('#box3 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
        $('#box4 .textwrap').css("transform","translateY(0px)").css("opacity","1");
        $('#box5 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
      }
      
      if(ws > 4000 && ws < 6700){
        $('#box4 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
        $('#box5 .textwrap').css("transform","translateY(0px)").css("opacity","1");
        $('#box6 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
      }

      if(ws > 6700 && ws < 7700){
        $('#box5 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
        $('#box6 .textwrap').css("transform","translateY(0px)").css("opacity","1");
        $('#box7 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
      }

      if(ws > 7700 && ws < 8500){
        $('#box6 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
        $('#box7 .textwrap').css("transform","translateY(0px)").css("opacity","1");
        $('#box8 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
      }

      if(ws > 8500 && ws < 9400){
        $('#box7 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
        $('#box8 .textwrap').css("transform","translateY(0px)").css("opacity","1");
        $('#box9 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
      }
      
      if(ws > 9400 && ws < 10400){
        $('#box8 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
        $('#box9 .textwrap').css("transform","translateY(0px)").css("opacity","1");
        $('#box10 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
      }
      
      if(ws > 10400){
        $('#box9 .textwrap').css("transform", "translateY(200px)").css("opacity", "0");
        $('#box10 .textwrap').css("transform","translateY(0px)").css("opacity","1");
        $('#box10 .qna .textwrap').css("transform", "translateY(0px)").css("opacity", "1");
      }
});
