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
/* eslint-enable no-undef, no-unused-vars */
