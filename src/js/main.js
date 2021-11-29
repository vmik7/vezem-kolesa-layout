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
const homeSwiper = new Swiper('.home-slider', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
});
const brand1Swiper = new Swiper('#tires-brand-slider', {
    slidesPerView: 1,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.brand-slider__pagination',
        type: 'bullets',
        dynamicBullets: true,
    },
    breakpoints: {
        620: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1465: {
            slidesPerView: 5,
        },
        1730: {
            slidesPerView: 6,
        },
    },
});
const brand2Swiper = new Swiper('#disks-brand-slider', {
    slidesPerView: 1,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.brand-slider__pagination',
        type: 'bullets',
        dynamicBullets: true,
    },
    breakpoints: {
        620: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1465: {
            slidesPerView: 5,
        },
        1730: {
            slidesPerView: 6,
        },
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
$('.tirefit-price__tabs').responsiveTabs();
$('.wheel-size-list').responsiveTabs();
$('.tires-season__tabs').responsiveTabs();
/* eslint-enable no-undef, no-unused-vars */
