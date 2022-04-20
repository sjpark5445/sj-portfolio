$(function(){
    // 스크롤 이동
    let menuA = $('header nav ul li');

    menuA.click(function(){
        const moveNum = $(this).index();
        let movePoint;

        switch(moveNum){
            case 0: movePoint = $('header').offset();
            break;
            case 1: movePoint = $('.web').offset();
            break;
            case 2: movePoint = $('.design').offset();
            break;
            case 3: movePoint = $('footer').offset();
            break;

            default: movePoint = $('header').offset();
        }
        

        $('html').animate({scrollTop:movePoint.top},400);
    });

    // 팝업레이어
    // let setModalNum;
    // let getModalTitle = ['온양민속박물관', '새벽별 심리상담센터', '이디야 커피', '프렌즈 펭귄 아기물티슈'];
    // let getModalSub = ['홍보물 디자인', '로고 디자인', '이벤트페이지', '제품 상세페이지'];

    // $('.design .gallery').click(function(){

    //     setModalNum = $(this).index();
    //     function textView(){
    //         $('.modal p').eq(setModalNum - 1).show().siblings('p').hide();
    //     };
        
    //     $('.modal h3').text(getModalTitle[setModalNum - 1]);
    //     $('.modal h5').text(getModalSub[setModalNum - 1]);
    //     textView();

    //     $('.modal').addClass('modalOpen');
    // });

    $('#modalClose').click(function(){
        $('.modal').removeClass('modalOpen');
    });

    // 표지 애니메이션
    let getScPer = $(window).width() * 0.05;

    setTimeout(function(){
        $('.circle2').css({bottom:'-20%'});
    },0);
    setTimeout(function(){
        $('.circle1').css({left:'60%'});
        $('.title h1').css({opacity:1, top:'40%'});
    }, 100);
    setTimeout(function(){
        $('.title h4').css({opacity:1, top:'55%'});
    }, 500);

    $('.circle1, .circle2').mouseover(function(){
        let cirLeft = $(this).offset().left;

        $(this).css({left:cirLeft - getScPer});
    }).mouseout(function(){
        let cirLeft = $(this).offset().left;

        $(this).css({left:cirLeft + getScPer});
    });
});