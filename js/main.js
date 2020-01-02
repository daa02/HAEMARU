// main.js

// gnb
$(function () {
    // 마우스 오버시 메뉴 열림
    $('.depth1').mouseover(function () {
        // class추가되면 보임
        $('.depth2').addClass('show');
        $('.depth2_bg').addClass('show');
        $('.header_wrap').addClass('show');
    });

    // 마우스가 나가면 메뉴 닫힘
    $('.depth1 > li').mouseout(function () {
        $('.depth2').removeClass('show');
        $('.depth2_bg').removeClass('show');
        $('.header_wrap').removeClass('show');
    });

});

// 모바일에서 스크롤이 맨 위일때 배경 지우기
$(function(){
    $(window).scroll(function() {
      if ($(this).scrollTop()) {
        $('.header_wrap').addClass('nav_bg');
      } else {
        $('.header_wrap').removeClass('nav_bg');
      }
    });  
  });
