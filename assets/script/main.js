'use strict';
$(function() {
    smoothscroll();
});

var imageCount = 1;
var total = 4;
function slider() {
    var image = document.getElementById('slider');
    imageCount++;
    if (imageCount > total) {
        imageCount = 1;
    }
    if (imageCount < 1) {
        imageCount = total;
    }
    image.src = 'assets/images/slides/slide'+imageCount+'.jpg';
    setInterval(slider, 3000);
}

setInterval(function slider() {
    var image = document.getElementById('slider');
    imageCount++;
    if (imageCount > total) {
        imageCount = 1;
    }
    if (imageCount < 1) {
        imageCount = total;
    }
    image.src = 'assets/images/slides/slide'+imageCount+'.jpg';
}, 6000);

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