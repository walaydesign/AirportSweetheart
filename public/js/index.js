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

var swiperSweetlife = new Swiper(".sweetlife_swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 2,
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
    breakpoints: {
        992: {
            slidesPerView: 2,
        }
    }
})

var swiperSchoolText = new Swiper(".school_swiper-text", {
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: false,
    navigation: {
        nextEl: "#school_swiper-next",
        prevEl: "#school_swiper-prev",
    },
    pagination: {
        el: "#school_swiper-pagination",
        clickable: true,
    },
})

var swiperSchoolPic = new Swiper(".school_swiper-pic", {
    slidesPerView: 1,
    speed: 800,
    // allowTouchMove: false,
    navigation: {
        nextEl: "#school_swiper-next",
        prevEl: "#school_swiper-prev",
    },
    pagination: {
        el: "#school_swiper-pagination",
        clickable: true,
    },
})

$(".school_tab_item").click(function(){
    $(this).addClass("active").siblings(".school_tab_item").removeClass("active");
    let li_index = $(this).index();
    swiperSchoolPic.slideTo(li_index, 1000, true);
    swiperSchoolText.slideTo(li_index, 1000, true);
})

var swiperGreen = new Swiper(".green_swiper", {
    slidesPerView: 1,
    speed: 800,
    // allowTouchMove: false,
    navigation: {
        nextEl: "#green_swiper-next",
        prevEl: "#green_swiper-prev",
    },
    pagination: {
        el: "#green_swiper-pagination",
        clickable: true,
    },
})

$(".green_tab_item").click(function(){
    $(this).addClass("active").siblings(".green_tab_item").removeClass("active");
    let li_index = $(this).index();
    swiperGreen.slideTo(li_index, 1000, true);
})