// 서브페이지 스크립트

$(function(){
    // 서브메뉴
    $('header nav').mouseover(function(){
        $('.sub>ul>li>a').css({opacity:1});
        $('.sub').stop().slideDown(300);
    }).mouseout(function(){
        $('.sub>ul>li>a').css({opacity:0, transition:'all 0.2s'});
        $('.sub').stop().slideUp(300);
    });
});