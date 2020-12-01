// Code found on http://jsfiddle.net/Niffler/z34cG/.
$(window).scroll(function() {
    /* get current scroll-position within window */
    var scroll = $(window).scrollTop();

    $('.nav').each(function() {

        /* get position of navigation-element (distance from top minus half of it's height, so that it changes color while it's half over black and half over white background) */
        var elementPositionTop = parseFloat($(this).offset().top) + (parseFloat($(this).height() / 2));

        /* change color for each background-change */
        if (elementPositionTop >= 320 && elementPositionTop <= 640 || elementPositionTop >= 960 && elementPositionTop <= 1280) {
            $(this).addClass('whiteText');
        } else {
            $(this).removeClass('whiteText');
        }
    });
});