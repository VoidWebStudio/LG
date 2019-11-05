
var swiper = new Swiper('.container-main-sayHello', {
    spaceBetween: 0,
    direction: "vertical",
    autoplay: {
        delay: 10000,
    },
    navigation: {
        nextEl: '.ready',
    },
    hashNavigation: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },

});
var swiper2 = new Swiper('.container-slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
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

$(".btn-1").click(function () {
    $("#content-1").hide();
    $("#yt")[0].src += "?autoplay=1";
    $("#yt").show();
});
$(".btn-2").click(function () {
    $("#content-2").hide();
    $("#yt-2")[0].src += "?autoplay=1";
    $("#yt-2").show();
});
$(".btn-3").click(function () {
    $("#content-3").hide();
    $("#yt-3")[0].src += "?autoplay=1";
    $("#yt-3").show();
});
$(".btn-4").click(function () {
    $("#content-4").hide();
    $("#yt-4")[0].src += "?autoplay=1";
    $("#yt-4").show();
});