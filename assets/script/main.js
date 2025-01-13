// ハンバーガーメニュー

const ham = $('#js-hamburger');
const nav = $('#js-nav');

ham.on('click', function () {
    ham.toggleClass('active');
    nav.toggleClass('active');
});
$(window).on('resize', function () {
    ham.removeClass('active');
    nav.removeClass('active');
});


// ---------- スライダー ---------- 

let mySwiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    initialSlide: 1,
    speed: 1000,
    effect: 'fade',
    crossFade: true,
});


// ---------- アコーディオン ---------- 

$(function () {
    $('.js-accordion_title').click(function () {
        $(this).next('.js-accordion_inner').slideToggle();
        $(this).toggleClass("open");
    });
});