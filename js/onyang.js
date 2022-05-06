// onyang
$(function(){
    // menu
    let slideSub = $('.sub, .sub_box');
    function menuDown(){
        slideSub.stop().slideDown(300);
        $('header').css({backgroundColor:'#fff', transition:'all .5s'});
        $('.logo a').css({backgroundImage:'url(onyang_images/logo2.png)', backgroundSize:'cover'});
    };
    function menuUp(){
        slideSub.stop().slideUp(300);
        $('header').css({backgroundColor:'rgba(0, 0, 0, 0.3)', transition:'all .5s'});
        $('.logo a').css({backgroundImage:'url(onyang_images/logo.png)', backgroundSize:'cover'});
    };

    $('nav, .sub').mouseover(function(){
        menuDown();
    }).mouseout(function(){
        menuUp();
    });

    // 슬라이드
    
    $('.slide ul').children('li:gt(0)').hide();
        let slideNum = 0;

    let doSlide = setInterval(function(){
        let slideNext = (slideNum + 1) % 4 ;
        $('.slide ul').find('li').eq(slideNum).fadeOut(300);
        $('.slide ul').find('li').eq(slideNext).fadeIn(300);
            slideNum = slideNext;
    },3000);

    let listNum = 3; // li의 개수-1
    let currentNum = 0; //초기화면 eq값
    let NextR = currentNum + 1; //다음eq값
    let NextL = currentNum - 1; //다음eq값

    // 우클릭
    $('#right_btn').click(function(){
        clearInterval(doSlide);

        $('.slide ul').find('li').eq(currentNum).fadeOut(300);

        if(currentNum == listNum){
            NextR = 0;
        }else{
            NextR = currentNum + 1;
        }

        $('.slide ul').find('li').eq(NextR).fadeIn(300);

        if(currentNum == listNum){
            currentNum = 0;
        }else{
            currentNum += 1;
        }
    });
    //좌클릭
    $('#left_btn').click(function(){
        clearInterval(doSlide);

        $('.slide ul').find('li').eq(currentNum).fadeOut(300);

        if(currentNum == 0){
            NextL = listNum;
        }else{
            NextL = currentNum - 1;
        }
        $('.slide ul').find('li').eq(NextL).fadeIn(300);

        if(NextL == 0){
            currentNum = 0;
        }else{
            currentNum = NextL;
        }
    });

    // 기획전시
    let botNum = 2;

    $('.special .layout_fix').children('.sp_txt:gt(0)').hide();

    $('.sp_img li a').click(function(){
        let startNum = $(this).parent().index();

        if(startNum >= botNum){
            startNum = startNum - botNum;
        }else{
            startNum = startNum;
        }

        $('.sp_txt').eq(startNum).fadeIn(300).siblings('.sp_txt').fadeOut(300);
    });

    // 스크롤 메시지
    $(window).scroll(function(){
        let offSetMsg = $('.special').offset().top;
        let setMsgPoint = offSetMsg - 50;
        let scrTop = $(document).scrollTop();

        if(scrTop >= setMsgPoint){
            $('.message').addClass('m_active');
            setTimeout(function(){
                $('.message').removeClass('m_active');
            },3000);
        }else{
        }
    });

    // 페이지 리모콘

    let $btnBoxli = $('.btn_box li');

    $btnBoxli.click(function(){
        let moveNum = $(this).index();
        let movePoint;

        switch(moveNum){
            case 0: movePoint = $('.slide').offset();
            break;
            case 1: movePoint = $('.special').offset();
            break;
            case 2: movePoint = $('.artist').offset();
            break;
            case 3: movePoint = $('.edu').offset();
            break;

            default: movePoint = $('.slide').offset();
        }
        

        $('html').animate({scrollTop:movePoint.top},400);
        $(this).addClass('btn_color').siblings().removeClass('btn_color');
    });

    // 햄버거메뉴

    $('.stick_box').click(function(){
        $('.stick_box').toggleClass('hm_active');

        let getClassName = $('.stick_box').attr('class');
        if(getClassName === 'stick_box'){
            $('.h_sub').animate({right:'-30em'},300);
        }else{
            $('.h_sub').animate({right:0},300);
        }
    });
});