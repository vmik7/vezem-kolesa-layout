/* eslint-disable no-undef, no-unused-vars */
const productGalleryThumbsSwiper = new Swiper('.product-gallery__thumbs', {
    spaceBetween: 20,
    slidesPerView: 4,
    centerInsufficientSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
    },
});
const productGallerySwiper = new Swiper('.product-gallery__swiper', {
    thumbs: {
        swiper: productGalleryThumbsSwiper,
    },
    pagination: {
        el: '.product-gallery__paggination',
        type: 'bullets',
        bulletClass: 'product-gallery__paggination-bullet',
        bulletActiveClass: 'product-gallery__paggination-bullet-active',
    },
});

$.fn.responsiveTabs = function () {
    this.addClass('responsive-tabs');
    this.append($('<span class="glyphicon glyphicon-chevron-down"></span>'));
    this.append($('<span class="glyphicon glyphicon-chevron-up"></span>'));

    this.on('click', 'li.active > a, span.glyphicon', () => {
        this.toggleClass('open');
    });

    this.on('click', 'li:not(.active) > a', () => {
        this.removeClass('open');
    });
};

$('.product-info__tabs').responsiveTabs();

/* eslint-enable no-undef, no-unused-vars */