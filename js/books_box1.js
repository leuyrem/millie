//box4_books_box1

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "나는 푸바오", size: 1 },
  headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
  .done(function (msg) {
    console.log(msg);

    var boxs = $(".box1>.item1");

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
  data: { query: "나는 메트로폴리탄 미술관의 경비원입니다", size: 1 },
  headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
  .done(function (msg) {
    console.log(msg);

    var boxs = $(".box1>.item2");

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
  data: { query: "칵테일 러브 좀비", size: 1 },
  headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
  .done(function (msg) {
    console.log(msg);

    var boxs = $(".box1>.item3");

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
  data: { query: "마흔에 읽는 쇼펜하우어", size: 1 },
  headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
  .done(function (msg) {
    console.log(msg);

    var boxs = $(".box1>.item4");

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
  data: { query: "아이는 무엇으로 자라는가", size: 1 },
  headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
  .done(function (msg) {
    console.log(msg);

    var boxs = $(".box1>.item5");

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
  data: { query: "생각이 너무 많은 어른들을 위한 심리학", size: 1 },
  headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
  .done(function (msg) {
    console.log(msg);

    var boxs = $(".box1>.item6");

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
  data: { query: "보편의 단어", size: 1 },
  headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
  .done(function (msg) {
    console.log(msg);

    var boxs = $(".box1>.item7");

    for (var i = 0; i < boxs.length; i++) {
      boxs.eq(i).append("<img class='shadow' src = '" + msg.documents[i].thumbnail + "'/>");
      boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
      boxs.eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
      boxs.eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
    }
  });