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

$('.visual').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [{
        breakpoint: 767.9,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "8%",
        },
    },],
});