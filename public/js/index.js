AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

var swiperCore = new Swiper(".core_swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".core_swiper-next",
        prevEl: ".core_swiper-prev",
    },
    speed: 800,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    allowTouchMove: false,
    // loop: true,
})