$(document).ready(function() {
    // menu를 클릭하는 경우
    $('.gnb  ul li a').on('click', function (e) {
        e.preventDefault();
        $('.btn').click();
        const $tg = $($(this).attr('href'));
        $('html, body').stop().animate({scrollTop: $tg.offset().top});
    });
    
    // #cnt1
    let currentX = '';
    let currentY = '';
    const moveDis = 0.01;
    $('#cnt1').mousemove(function(e){
        if (currentX == '') currentX = e.pageX;
        const xdiff = e.pageX - currentX;
        currentX = e.pageX;
        if (currentY == '') currentY = e.pageY;
        const ydiff = e.pageY - currentY;
        currentY = e.pageY;
        $('#cnt1 .mouseM').each(function(i, el) {
            let movementx = (i + 1) * (xdiff * moveDis);
            let movementy = (i + 1) * (ydiff * moveDis);

            if (i%2 === 0) {
                movementx = -movementx;
                movementy = -movementy;
            }
            const newX = $(el).position().left + movementx;
            const newY = $(el).position().top + movementy;
            $(el).css({left: newX + 'px', top: newY + 'px'});
        });
    });
     
    // #cnt3
    const $acdn = $('#cnt3 .accordion')
    // 1) header의 초기설정 아코디언 패널이 열려있는지 열려있지 않는지
    $acdn.find('.title:nth-of-type(4) .header').addClass('on').attr({'aria-expanded': true, 'aria-disabled': true}).parent().siblings('.title').children().attr({'aria-expanded': false});

    $acdn.find('.panel:nth-of-type(4)').addClass('on').attr({tabIndex : 0});
    // 2) 키보드제어 - 상단방향키(38), 하단방향키(40), home(36), end(35), enter/spacebar(click 이벤트가 대신함)

    // 3) 마우스제어 - 클릭이벤트
    $acdn.find('.header').on('click', function () {
        if ($(this).hasClass('on')) {//열려진 경우 =>현재 열려진 헤더,패널 초기화
            $(this).removeClass('on').attr({'aria-expanded': false}).removeAttr('aria-disabled').parent().next().removeClass('on').attr({tabIndex: -1});
        } else{ // 닫긴경우
        //아코디언 헤더
        $(this).addClass('on').attr({'aria-expanded': true, 'aria-disabled': true}).parent().siblings('.title').children().removeClass('on').attr({'aria-expanded': false}).removeAttr('aria-disabled');

        //아코디언 패널
        $(this).parent().next().addClass('on').attr({tabIndex : 0}).siblings('.panel.on').removeClass('on').attr({tabIndex: -1});
        }
        
    });
    $acdn.find('.header').mouseenter(function () {
        $(this).addClass('clickm')
    });


    // #cnt4
    $('#cnt4 .next').click('on', function () {
        $(this).parents('.project1').css({visibility: 'hidden', overflow: 'hidden', maxHeight: 0}).next().css({visibility: 'visible', maxHeight: 5000})
    });
    $('#cnt4 .prev').click('on', function () {
        $(this).parents('.project2').css({visibility: 'hidden', overflow: 'hidden', maxHeight: 0}).prev().css({visibility: 'visible', maxHeight: 5000})
    });
});