// 달콤커피 스크립트

$(function(){
    // 서브메뉴
    $('header nav').mouseover(function(){
        $('.sub>ul>li>a').css({opacity:1});
        $('.sub').stop().slideDown(300);
    }).mouseout(function(){
        $('.sub>ul>li>a').css({opacity:0, transition:'all 0.2s'});
        $('.sub').stop().slideUp(300);
    });

    // 햄버거메뉴
    $('.menu_open').click(function(){
        $(this).toggleClass('b_active');
        $('.vertical_menu').toggleClass('v_active');
    });

    // 슬라이드
    setInterval(function(){
        $('.slide ul').animate({left:'-100%'},1000,function(){
            $('.slide li').eq(0).appendTo('.slide ul');
            $('.slide ul').css({left:0});
        });
    },5000);

    // 시그니처

    $('.sig_menu ul').children('li:gt(0)').hide();
    $('.sig_txt').children('p:gt(0)').hide();

    let sigNum = 2; // li의 개수-1
    let sig = 0; //초기화면 eq값
    let sigNextR = sig + 1; //다음eq값
    let sigNextL = sig - 1; //다음eq값

    
    // 우클릭
    $('#right_btn').click(function(){

        $('.sig_menu ul').find('li').eq(sig).fadeOut();
        $('.sig_txt').find('p').eq(sig).fadeOut();
        

        if(sig == sigNum){
            sigNextR = 0;
        }else{
            sigNextR = sig + 1;
        }

        $('.sig_menu ul').find('li').eq(sigNextR).fadeIn();
        $('.sig_txt').find('p').eq(sigNextR).fadeIn();

        if(sig == sigNum){
            sig = 0;
        }else{
            sig += 1;
        }
    });
    //좌클릭
    $('#left_btn').click(function(){
        $('.sig_menu ul').find('li').eq(sig).fadeOut();
        $('.sig_txt').find('p').eq(sig).fadeOut();

        if(sig == 0){
            sigNextL = sigNum;
        }else{
            sigNextL = sig - 1;
        }
        $('.sig_menu ul').find('li').eq(sigNextL).fadeIn();
        $('.sig_txt').find('p').eq(sigNextL).fadeIn();

        if(sigNextL == 0){
            sig = 0;
        }else{
            sig = sigNextL;
        }
    });

    // 상상일상

    //-- width값 계산
    let webWidth=screen.width;
    //-- 스크롤값
    let ostLife;
    let $lifeB = $('.imagination');

    $(window).scroll(function(){
        let scrTop = $(document).scrollTop();
        // console.log(scrTop);
        
        //-- 스크롤값 조건식
        if(webWidth > 1200){
            ostLife=670;
        }else if(webWidth <= 1200 && webWidth > 768){
            ostLife=200;
        }else if(webWidth <= 768 && webWidth > 640){
            ostLife=100;
        }else{
            ostLife=0;
        }
        //-- css적용
        if(scrTop >= ostLife){
            // 글자색
            $lifeB.find('h3').css({color:'#fc731e', transition: 'all 1s'});
            // 그림띄우기
            $('.float_top>ul>li').css({bottom:'0', visibility: 'visible'});
        }
    });

    // 뉴스

    $('.news_img a').mouseenter(function(){
        $(this).find('span').addClass('border_active');
    }).mouseleave(function(){
        $(this).find('span').removeClass('border_active');
    });

    // 앱

    $('.app_img a').mouseenter(function(){
        $(this).find('span').addClass('border_active');
    }).mouseleave(function(){
        $(this).find('span').removeClass('border_active');
    });
});