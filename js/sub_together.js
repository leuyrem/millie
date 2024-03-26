$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "양수인간", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
    .done(function (msg) {

        var boxs = $(".list1");

        for (var i = 0; i < boxs.length; i++) {
            boxs.eq(i).append("<img src = '" + msg.documents[i].thumbnail + "'/>");
            boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            boxs.eq(i).append("<p>" + msg.documents[i].authors + "</p>");
            boxs.eq(i).append("<p>" + msg.documents[i].publisher + "</p>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "정상이라는 환상", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
    .done(function (msg) {

        var boxs = $(".list2");

        for (var i = 0; i < boxs.length; i++) {
            boxs.eq(i).append("<img src = '" + msg.documents[i].thumbnail + "'/>");
            boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            boxs.eq(i).append("<p>" + msg.documents[i].authors + "</p>");
            boxs.eq(i).append("<p>" + msg.documents[i].publisher + "</p>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "깨진 틈이 있어야 그 사이로", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
    .done(function (msg) {

        var boxs = $(".list3");

        for (var i = 0; i < boxs.length; i++) {
            boxs.eq(i).append("<img src = '" + msg.documents[i].thumbnail + "'/>");
            boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            boxs.eq(i).append("<p>" + msg.documents[i].authors + "</p>");
            boxs.eq(i).append("<p>" + msg.documents[i].publisher + "</p>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "혼자일 수 없다면 나아갈 수 없다", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
    .done(function (msg) {

        var boxs = $(".list4");

        for (var i = 0; i < boxs.length; i++) {
            boxs.eq(i).append("<img src = '" + msg.documents[i].thumbnail + "'/>");
            boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            boxs.eq(i).append("<p>" + msg.documents[i].authors + "</p>");
            boxs.eq(i).append("<p>" + msg.documents[i].publisher + "</p>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "내가 틀릴 수도 있습니다", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
    .done(function (msg) {

        var boxs = $(".list5");

        for (var i = 0; i < boxs.length; i++) {
            boxs.eq(i).append("<img src = '" + msg.documents[i].thumbnail + "'/>");
            boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            boxs.eq(i).append("<p>" + msg.documents[i].authors + "</p>");
            boxs.eq(i).append("<p>" + msg.documents[i].publisher + "</p>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "생각 중독", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
    .done(function (msg) {

        var boxs = $(".list6");

        for (var i = 0; i < boxs.length; i++) {
            boxs.eq(i).append("<img src = '" + msg.documents[i].thumbnail + "'/>");
            boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            boxs.eq(i).append("<p>" + msg.documents[i].authors + "</p>");
            boxs.eq(i).append("<p>" + msg.documents[i].publisher + "</p>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "마음 해방", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
    .done(function (msg) {

        var boxs = $(".list7");

        for (var i = 0; i < boxs.length; i++) {
            boxs.eq(i).append("<img src = '" + msg.documents[i].thumbnail + "'/>");
            boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            boxs.eq(i).append("<p>" + msg.documents[i].authors + "</p>");
            boxs.eq(i).append("<p>" + msg.documents[i].publisher + "</p>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "보여주기", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
    .done(function (msg) {

        var boxs = $(".list8");

        for (var i = 0; i < boxs.length; i++) {
            boxs.eq(i).append("<img src = '" + msg.documents[i].thumbnail + "'/>");
            boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            boxs.eq(i).append("<p>" + msg.documents[i].authors + "</p>");
            boxs.eq(i).append("<p>" + msg.documents[i].publisher + "</p>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "살아가는 힘은 어디에서 나오는가", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
    .done(function (msg) {

        var boxs = $(".list9");

        for (var i = 0; i < boxs.length; i++) {
            boxs.eq(i).append("<img src = '" + msg.documents[i].thumbnail + "'/>");
            boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            boxs.eq(i).append("<p>" + msg.documents[i].authors + "</p>");
            boxs.eq(i).append("<p>" + msg.documents[i].publisher + "</p>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "철학은 날씨를 바꾼다", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
    .done(function (msg) {

        var boxs = $(".list10");

        for (var i = 0; i < boxs.length; i++) {
            boxs.eq(i).append("<img src = '" + msg.documents[i].thumbnail + "'/>");
            boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            boxs.eq(i).append("<p>" + msg.documents[i].authors + "</p>");
            boxs.eq(i).append("<p>" + msg.documents[i].publisher + "</p>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "어차피 남들은 나에게 관심이 없다", size: 1 },
    headers: { Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28" }
})
    .done(function (msg) {

        var boxs = $(".list11");

        for (var i = 0; i < boxs.length; i++) {
            boxs.eq(i).append("<img src = '" + msg.documents[i].thumbnail + "'/>");
            boxs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            boxs.eq(i).append("<p>" + msg.documents[i].authors + "</p>");
            boxs.eq(i).append("<p>" + msg.documents[i].publisher + "</p>");
        }
    });