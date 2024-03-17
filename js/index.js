//box4 
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "에세이", size:50 },
  headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28"}
})
  .done(function( msg ) {
    console.log(msg);

   var boxs =$(".box1>.item");

   for (var i=0; i< boxs.length; i++){
    boxs.eq(i).append("<img class='shadow' src = '" + msg.documents[i].thumbnail+"'/>");
    boxs.eq(i).append("<h4>"+msg.documents[i].title +"</h4>");
    boxs.eq(i).append("<h5>"+msg.documents[i].authors+"</h5>");
    boxs.eq(i).append("<h5>"+msg.documents[i].publisher+"</h5>");
   }
  });


  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "여름", size:50 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28"}
  })
    .done(function( msg ) {
      console.log(msg);
  
     var boxs =$(".box2>.item");
  
     for (var i=0; i< boxs.length; i++){
      boxs.eq(i).append("<img class='shadow' src = '" + msg.documents[i].thumbnail+"'/>");
      boxs.eq(i).append("<h4>"+msg.documents[i].title +"</h4>");
      boxs.eq(i).append("<h5>"+msg.documents[i].authors+"</h5>");
      boxs.eq(i).append("<h5>"+msg.documents[i].publisher+"</h5>");
     }
    });


    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "문학동네", size:50 },
      headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28"}
    })
      .done(function( msg ) {
        console.log(msg);
    
       var boxs =$(".box3>.item");
    
       for (var i=0; i< boxs.length; i++){
        boxs.eq(i).append("<img class='shadow'  src = '" + msg.documents[i].thumbnail+"'/>");
        boxs.eq(i).append("<h4>"+msg.documents[i].title +"</h4>");
        boxs.eq(i).append("<h5>"+msg.documents[i].authors+"</h5>");
        boxs.eq(i).append("<h5>"+msg.documents[i].publisher+"</h5>");
       }
      });


      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "로맨스", size:50 },
        headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28"}
      })
        .done(function( msg ) {
          console.log(msg);
      
         var boxs =$(".box4>.item");
      
         for (var i=0; i< boxs.length; i++){
          boxs.eq(i).append("<img class='shadow'  src = '" + msg.documents[i].thumbnail+"'/>");
          boxs.eq(i).append("<h4>"+msg.documents[i].title +"</h4>");
          boxs.eq(i).append("<h5>"+msg.documents[i].authors+"</h5>");
          boxs.eq(i).append("<h5>"+msg.documents[i].publisher+"</h5>");
         }
        });




// box6 버튼
$(function () {
  $('#box6 li').click(function () {
      let idx = $(this).index();
      $('.hot').hide();
      $('.hot').eq(idx).fadeIn();
  });

});


        $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: { query: "주식", size:50 },
          headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28"}
        })
          .done(function( msg ) {
            console.log(msg);
        
           var boxs =$(".best1>.item");
        
           for (var i=0; i< boxs.length; i++){
            boxs.eq(i).append("<img class='shadow'  src = '" + msg.documents[i].thumbnail+"'/>");
            boxs.eq(i).append("<h4>"+msg.documents[i].title +"</h4>");
            boxs.eq(i).append("<h5>"+msg.documents[i].authors+"</h5>");
            boxs.eq(i).append("<h5>"+msg.documents[i].publisher+"</h5>");
           }
          });
          

        $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: { query: "영어", size:50 },
          headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28"}
        })
          .done(function( msg ) {
            console.log(msg);
        
           var boxs =$(".best2>.item");
        
           for (var i=0; i< boxs.length; i++){
            boxs.eq(i).append("<img class='shadow'  src = '" + msg.documents[i].thumbnail+"'/>");
            boxs.eq(i).append("<h4>"+msg.documents[i].title +"</h4>");
            boxs.eq(i).append("<h5>"+msg.documents[i].authors+"</h5>");
            boxs.eq(i).append("<h5>"+msg.documents[i].publisher+"</h5>");
           }
          });   
          

        $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: { query: "고전", size:50 },
          headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28"}
        })
          .done(function( msg ) {
            console.log(msg);
        
           var boxs =$(".best3>.item");
        
           for (var i=0; i< boxs.length; i++){
            boxs.eq(i).append("<img class='shadow'  src = '" + msg.documents[i].thumbnail+"'/>");
            boxs.eq(i).append("<h4>"+msg.documents[i].title +"</h4>");
            boxs.eq(i).append("<h5>"+msg.documents[i].authors+"</h5>");
            boxs.eq(i).append("<h5>"+msg.documents[i].publisher+"</h5>");
           }
          });   
          

        $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: { query: "인테리어", size:50 },
          headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28"}
        })
          .done(function( msg ) {
            console.log(msg);
        
           var boxs =$(".best4>.item");
        
           for (var i=0; i< boxs.length; i++){
            boxs.eq(i).append("<img class='shadow'  src = '" + msg.documents[i].thumbnail+"'/>");
            boxs.eq(i).append("<h4>"+msg.documents[i].title +"</h4>");
            boxs.eq(i).append("<h5>"+msg.documents[i].authors+"</h5>");
            boxs.eq(i).append("<h5>"+msg.documents[i].publisher+"</h5>");
           }
          });   
          

        $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: { query: "다이어트", size:50 },
          headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28"}
        })
          .done(function( msg ) {
            console.log(msg);
        
           var boxs =$(".best5>.item");
        
           for (var i=0; i< boxs.length; i++){
            boxs.eq(i).append("<img class='shadow'  src = '" + msg.documents[i].thumbnail+"'/>");
            boxs.eq(i).append("<h4>"+msg.documents[i].title +"</h4>");
            boxs.eq(i).append("<h5>"+msg.documents[i].authors+"</h5>");
            boxs.eq(i).append("<h5>"+msg.documents[i].publisher+"</h5>");
           }
          });         