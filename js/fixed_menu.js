function blinkBell() {
    const blinkEvt = setInterval(function () {
        $(".header-alert-icon").toggleClass('bell-gray');
        $(".header-alert-text").html('<span><b>아무개</b></span><span>님이 새로운 메세지를 보냈습니다.</span>');
    }, 300);

    setTimeout(() => {
        $(".header-alert-text").html('<button type="button" onclick="blinkBell();">test</button>');
        clearInterval(blinkEvt);
    }, 1900);
}

/* top bell-icon hover event */
$(function () {
    $('.bell-icon').mouseover(function () {
        $('.bell-icon').css('color', '#3699ff');
    });
    $('.bell-icon').mouseout(function () {
        $('.bell-icon').css('color', '#ccc');
    });
    $('.header-alert-badge').mouseover(function () {
        $('.bell-icon').css('color', '#3699ff');
    });
    $('.header-alert-badge').mouseout(function () {
        $('.bell-icon').css('color', '#ccc');
    });
});

/* accordian menu event */
$(function() {
    $('.accordion-content').hide();
    $('.accordion-menu').click(function () {
        if ($(this).hasClass('active')) {
            $(this).next().slideUp(50);
            $(this).removeClass('active');
        } else {
            $('.accordion').find('.active').next().slideUp(50);
            $('.accordion').find('.active').removeClass('active');
            $(this).next().slideDown(50);
            $(this).addClass('active');
        }
    });
})

/* alert-box popup event */
$(function () {
    $('.bell-icon, .header-alert-badge').click(function () { // bell-icon
        if ($('.alert-box').hasClass('alert-popup')) {
            alertBoxOff();
        } else {
            alertBoxOn();
        }
    });

    $('html').click(function (e) { // alert-box외 구역 클릭
        if ($(e.target).parents('.alert-popup').length < 1 && $('.alert-box').hasClass('alert-popup')) {
            // console.log('팝업 외 부분이 맞습니다')
            alertBoxOff();
        }
    });
});

function alertBoxOn() {
    $('.alert-box').css('visibility', 'visible');
    $('.alert-box').css('opacity', '1');
    setTimeout(() => { // 이 기능을 넣지 않으면 alert-box가 열렸다가 바로 닫힘
        $('.alert-box').addClass('alert-popup')
    }, 10);
}

function alertBoxOff() {
    $('.alert-box').css('visibility', 'hidden');
    $('.alert-box').css('opacity', '0');
    $('.alert-box').removeClass('alert-popup')
}

/* config-box popup event */
$(function () {
    $('.header-part-config').click(function () { // bell-icon
        if ($('.config-box').hasClass('config-popup')) {
            configBoxOff();
        } else {
            configBoxOn();
        }
    });

    $('html').click(function (e) { // config-box외 구역 클릭
        if ($(e.target).parents('.config-popup').length < 1 && $('.config-box').hasClass('config-popup')) {
            // console.log('팝업 외 부분이 맞습니다')
            configBoxOff();
        }
    });
});

function configBoxOn() {
    console.log("??");
    $('.config-box').css('visibility', 'visible');
    $('.config-box').css('opacity', '1');
    setTimeout(() => { // 이 기능을 넣지 않으면 config-box가 열렸다가 바로 닫힘
        $('.config-box').addClass('config-popup')
    }, 10);
}

function configBoxOff() {
    $('.config-box').css('visibility', 'hidden');
    $('.config-box').css('opacity', '0');
    $('.config-box').removeClass('config-popup')
}