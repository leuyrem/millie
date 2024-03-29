$(document).ready(() => {
    //이 분야의 베스트
    const best = [
    "무엇이 나를 행복하게 만드는가", 
    "양수인간:삶의 격을 높이는 내면 변화 심리학", 
    "마흔에 읽는 쇼펜하우어", 
    "도둑맞은 집중력", 
    "어차피 남들은 나에게 관심이 없다"
];

    for (let idxBest in best) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            headers: {
                Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28"
            },
            async: false,
            data: {
                query: best[idxBest],
                sort: "random",
                size: 1
            }
        })
            .done((result) => {
                let item = `<div class="bestBook">                            
                            <img src="${result.documents[0].thumbnail}">
                            <div class="listWrap">
                            <span>${Number(idxBest)+1}</span>
                            <h5>${result.documents[0].title}</h5>
                            <p class="pub">${result.documents[0].publisher}</p>
                            <p class="sale">10%</p><p class="list_price"><b>${result.documents[0].price}</b>원</p>
                            </div>`
                $(".booklist1").append(item);
                
            })
    }

    
    

    //이 분야의 신간
    const newbook = [
        "새우에서 고래로", 
        "1일 1페이지 고전 수업 365", 
        "최소한이 지구 사랑법", 
        "명예론", 
        "성공의 진심"
    ];
    
        for (let idxNewbook in newbook) {
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                headers: {
                    Authorization: "KakaoAK ef44ea052f79020e3b19027cf5323a28"
                },
                data: {
                    query: newbook[idxNewbook],
                    sort: "random",
                    size: 1
                }
            })
                .done((result) => {
                    let item = `<div class="brandNew">
                                <img src="${result.documents[0].thumbnail}">
                                <div class="listWrap">
                                <h5>${result.documents[0].title}</h5>
                                <p class="pub">${result.documents[0].publisher}</p>
                                <p class="sale">10%</p><p class="list_price"><b>${result.documents[0].price}</b>원</p>
                                </div>`
                    $(".booklist2").append(item);
                })
        }
});