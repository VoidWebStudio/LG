
var swiper = new Swiper('.container-main-sayHello', {
    spaceBetween: 30,
    direction: "vertical",
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    onSlideChangeEnd: function (swiper) {
        $('.swiper-slide').each(function () {
            if ($(this).index() === swiper.activeIndex) {
                // Fadein in active slide
                $(this).find('.hello-alice').fadeIn(300);
            }
            else {
                // Fadeout in inactive slides
                $(this).find('.hello-alice').fadeOut(300);
            }
        });
    }
});