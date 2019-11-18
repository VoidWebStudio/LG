
var swiper = new Swiper('.container-main-sayHello', {
    spaceBetween: 0,
    direction: "vertical",
    speed: 1500,
    autoplay: {
        delay: 1800000,
        disableOnInteraction:false,
        stopOnLastSlide:true,
    },
    navigation: {
        nextEl: '.ready',
    },
    on: {
        reachEnd: function (){
            setTimeout(() => {

                document.querySelector('.to-index').click();
            }, 10000);
        }
    },
    hashNavigation: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: false,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },

});
var swiper2 = new Swiper('.container-slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop:true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
    },

});


var reload_button = document.getElementsByClassName("repeat");
for (var i = 0; i < reload_button.length; i++) {
    reload_button[i].onclick = function() {
        history.go(0);
}
}
$(function() {
    $(".btn-1").click(function () {
        $(".content-1").hide();
        $(".yt").show();
        $(".yt")[1].play();
    });
    $(".btn-2").click(function () {
        $(".content-2").hide();
        $(".yt-2")[1].play();
        $(".yt-2").show();
    });
    $(".btn-3").click(function () {
        $(".content-3").hide();
        $(".yt-3")[1].play();
        $(".yt-3").show();
    });
    $(".btn-4").click(function () {
        $(".content-4").hide();
        $(".yt-4")[1].play();
        $(".yt-4").show();
    });

});