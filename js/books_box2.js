//box4_books_box2

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "생각중독", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box2>.item1");
  
      for (var i = 0; i < boxs.length; i++) {
        boxs.eq(i).append("<img class='shadow' src = '" + msg.documents[i].thumbnail + "'/>");
        boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
        boxs.eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        boxs.eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
      }
    });
  
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "컨셉 수업", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box2>.item2");
  
      for (var i = 0; i < boxs.length; i++) {
        boxs.eq(i).append("<img class='shadow' src = '" + msg.documents[i].thumbnail + "'/>");
        boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
        boxs.eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        boxs.eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
      }
    });
  
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "부자아빠의 돈 공부", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box2>.item3");
  
      for (var i = 0; i < boxs.length; i++) {
        boxs.eq(i).append("<img class='shadow' src = '" + msg.documents[i].thumbnail + "'/>");
        boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
        boxs.eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        boxs.eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
      }
    });
  
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "블랙 쇼맨과 운명의 바퀴", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box2>.item4");
  
      for (var i = 0; i < boxs.length; i++) {
        boxs.eq(i).append("<img class='shadow' src = '" + msg.documents[i].thumbnail + "'/>");
        boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
        boxs.eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        boxs.eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
      }
    });
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "우리가 작별 인사를 할때마다", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box2>.item5");
  
      for (var i = 0; i < boxs.length; i++) {
        boxs.eq(i).append("<img class='shadow' src = '" + msg.documents[i].thumbnail + "'/>");
        boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
        boxs.eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        boxs.eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
      }
    });
  
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "남의 시선에 아랑곳하지 않기", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box2>.item6");
  
      for (var i = 0; i < boxs.length; i++) {
        boxs.eq(i).append("<img class='shadow' src = '" + msg.documents[i].thumbnail + "'/>");
        boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
        boxs.eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        boxs.eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
      }
    });
  
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나는 푸바오", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box2>.item7");
  
      for (var i = 0; i < boxs.length; i++) {
        boxs.eq(i).append("<img class='shadow' src = '" + msg.documents[i].thumbnail + "'/>");
        boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
        boxs.eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        boxs.eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
      }
    });