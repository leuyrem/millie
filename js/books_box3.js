//box4_books_box3

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "분실물이 돌아왔습니다", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box3>.item1");
  
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
    data: { query: "기분이 태도가 되지 않게", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box3>.item2");
  
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
    data: { query: "사랑 밖의 모든 말들", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box3>.item3");
  
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
    data: { query: "시작의 기술", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box3>.item4");
  
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
    data: { query: "물고기는 존재하지 않는다", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box3>.item5");
  
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
    data: { query: "구의 증명", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box3>.item6");
  
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
    data: { query: "나이 느리게 드는 습관", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box3>.item7");
  
      for (var i = 0; i < boxs.length; i++) {
        boxs.eq(i).append("<img class='shadow' src = '" + msg.documents[i].thumbnail + "'/>");
        boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
        boxs.eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        boxs.eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
      }
    });