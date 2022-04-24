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

    // // 시그니처

    $('.sig_img ul').children('li:gt(0)').hide();

    let sigNum = 2; // li의 개수-1
    let sig = 0; //초기화면 eq값
    let sigNextR = sig + 1; //다음eq값
    let sigNextL = sig - 1; //다음eq값
    const setMenuList = ['허니몽', '스프링 티', '자몽 얼그레이'];
    const addtxt = [
        '생자몽에 꿀을 더해 풍부한 과육의 맛과 향을 달콤하게 즐길 수 있는 웰빙 자몽 음료', 
        '상큼한 한라봉과 달큰한 도라지의 매력적인 조화로 봄에 어울리는 건강차', 
        '달콤쌉싸름한 자몽과 얼그레이의 조합으로 깔끔한 음료와 생자몽 과육이 씹혀 상큼하게 마시는 음료'
    ];
    $('.sig_name').text(setMenuList[sig]);
    $('.set_txt').text(addtxt[0]);
    
    // 우클릭
    $('#right_btn').click(function(){

        $('.sig_img ul').find('li').eq(sig).fadeOut(300);

        if(sig == sigNum){
            sigNextR = 0;
        }else{
            sigNextR = sig + 1;
        }

        $('.sig_img ul').find('li').eq(sigNextR).fadeIn(300);

        if(sig == sigNum){
            sig = 0;
        }else{
            sig += 1;
        }
        let setMenuName = $('.sig_name').text(setMenuList[sig]);
        setMenuName;

        $('.set_txt').text(addtxt[sig]);
    });

    //좌클릭
    $('#left_btn').click(function(){
        $('.sig_img ul').find('li').eq(sig).fadeOut(300);

        if(sig == 0){
            sigNextL = sigNum;
        }else{
            sigNextL = sig - 1;
        }
        $('.sig_img ul').find('li').eq(sigNextL).fadeIn(300);

        if(sigNextL == 0){
            sig = 0;
        }else{
            sig = sigNextL;
        }
        let setMenuName = $('.sig_name').text(setMenuList[sig]);
        setMenuName;

        $('.set_txt').text(addtxt[sig]);
    });

    // 상상일상

    //-- width값 계산
    let webWidth=screen.width;
    //-- 스크롤값
    let ostLife;
    let trendy;
    let $lifeB = $('.imagination');

    $(window).scroll(function(){
        let scrTop = $(document).scrollTop();
        // console.log(scrTop);
        
        //-- 스크롤값 조건식
        if(webWidth > 1200){
            ostLife=670;
            trendy=2600;
        }else if(webWidth <= 1200 && webWidth > 768){
            ostLife=200;
            trendy=900;
        }else if(webWidth <= 768 && webWidth > 640){
            ostLife=100;
            trendy=626;
        }else{
            ostLife=0;
            trendy=300;
        }

        //-- css적용
        if(scrTop >= ostLife){
            // 글자색
            $lifeB.find('h3').css({color:'#fc731e', transition: 'all 1s'});
            // 그림띄우기
            $('.float_top>ul>li').css({bottom:'0', opacity:1});
        }

        if(scrTop >= trendy){
            $('.trendy h4').css({opacity: 1, transition: 'all 1s'});
            setTimeout(function(){
                $('.trendy h3').css({opacity: 1, transition: 'all 1s'});
            },500);
            setTimeout(function(){
                $('.trendy p').css({opacity: 1, transition: 'all 1s'});
            },600);
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