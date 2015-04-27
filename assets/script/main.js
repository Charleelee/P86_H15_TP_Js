'use strict';
$(function() {
    smoothscroll();
});

function div_reveal() {

}

function slider() {

}

function smoothscroll() {
    $("#about-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });
    $("#review-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#review").offset().top
        }, 2000);
    });
    $("#subscribe-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#subscribe").offset().top
        }, 2000);
    });
    $(".top-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#top").offset().top
        }, 2000);
    });
}