$(document).ready(function () {
    $(window).on('resize', function () {
        if ($(window).width() > 950) {
            $('.popup-menu').removeClass('open');
        }
    });

    $('.popup-menu-toggle').on('click', function () {
        $('.popup-menu').toggleClass('open');
    });

    $('.close-button').on('click', function () {
        $('.popup-menu').removeClass('open');
    });
});
