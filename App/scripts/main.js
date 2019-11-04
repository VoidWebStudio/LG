
var swiper = new Swiper('.container-main-sayHello', {
    spaceBetween: 30,
    direction: "vertical",
    autoplay: {
        delay: 10000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },

});