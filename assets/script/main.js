'use strict';
$(function() {
    smoothscroll();
});

// JavaScript pour le Slider
var Count_images = 1;
var total_images = 4;
function slider() {
    var image = document.getElementById('slider');
    Count_images++;
    if (Count_images > total_images) {
        Count_images = 1;
    }
    if (Count_images < 1) {
        Count_images = total_images;
    }
    image.src = 'assets/images/slides/slide'+Count_images+'.jpg';
}
setInterval(slider, 5000);

// jQuery Pour l'effet de smooth scroll
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