$(document).ready(function () {
    const player = new Plyr('#player', {
        controls: [
            'play-large', 'play', 'progress', 'current-time', 'download', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen',  'rewind', 'fast-forward'
        ],
        tooltips:{ controls: true, seek: true },
        displayDuration:true,
        // invertTime:true,
        seekTime:10,


    });
    var carouselInner = new Swiper(".carousel-inner", {
        speed: 300,
        loop: true,
        effect: "fade",
        pagination: {
            clickable: true,
            el: ".swiper-pagination1",
        },
        navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
        },
        // autoplay: {
        //     delay: 5000,
        // },
    });
    var customerCarousel = new Swiper(".customer-carousel", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        freeMode: true,
        speed: 9000,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 7,
                spaceBetween: 50,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
        },
        autoplay: {
            delay: 2500,

            disableOnInteraction: false,
        },
    });
    var sahabTestimonialSwiper = new Swiper(".sahab-testimonial-swiper", {
        // slidesPerView: 3,
        // spaceBetween: 50,
        speed: 2000,
        freeMode: true,
        loop: true,
        pagination: {
            clickable: true,
            el: ".swiper-pagination3",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
    var commentsSwiper = new Swiper(".hearing-rocket-swiper", {
        effect: "cards",
        grabCursor: true,
        speed: 300,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next4",
            prevEl: ".swiper-button-prev4",
        },
    });
    //mobile menu
    $(".childer").click(function () {
        $(this).closest('li').find('.sub-menu').eq(0).addClass('come-submenu');

        $('.sub-closer').click(function () {
            $(this).closest('ul.sub-menu').removeClass('come-submenu')
        })
    });

    var myOffcanvas = document.getElementById('responsive-menu')
    myOffcanvas.addEventListener('hidden.bs.offcanvas', function () {
        console.log('close')
        $('.sub-menu').removeClass('come-submenu');
    })

});
// })
