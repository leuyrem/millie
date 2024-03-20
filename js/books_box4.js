//box4_books_box4

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "직장 상사 악령", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box4>.item1");
  
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
    data: { query: "홍학의 자리", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box4>.item2");
  
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
    data: { query: "바다가 들리는 편의점", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box4>.item3");
  
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
    data: { query: "살인자의 쇼핑목록", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box4>.item4");
  
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
    data: { query: "사랑의 기술", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box4>.item5");
  
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
    data: { query: "퓨처셀프", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box4>.item6");
  
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
    data: { query: "아주 희미한 빛으로도", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
  })
    .done(function (msg) {
      console.log(msg);
  
      var boxs = $(".box4>.item7");
  
      for (var i = 0; i < boxs.length; i++) {
        boxs.eq(i).append("<img class='shadow' src = '" + msg.documents[i].thumbnail + "'/>");
        boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
        boxs.eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
        boxs.eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
      }
    });