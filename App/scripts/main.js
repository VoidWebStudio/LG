
var swiper = new Swiper('.container-main-sayHello', {
    spaceBetween: 0,
    direction: "vertical",
    autoplay: {
        delay: 10000,
    },
    navigation: {
        nextEl: '.ready',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },

});