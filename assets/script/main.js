'use strict';
// Init.
$(function() {
    console.log('Start!');
    smoothscroll();
});

// JavaScript pour le Slider
var Count_images = 1;
var total_images = 4;
function slider(x) {
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

// Functions Hide / Show pour les div de la section Review 

function swap_show_hide1() {
    if (document.getElementById('about-tyler').style.display == 'block') {
        document.getElementById('about-tyler').style.display = 'none';
    } else {
        document.getElementById('about-tyler').style.display = 'block';
    }
}

function swap_show_hide2() {
    if (document.getElementById('about-prodigy').style.display == 'block') {
        document.getElementById('about-prodigy').style.display = 'none';
    } else {
        document.getElementById('about-prodigy').style.display = 'block';
    }
}

function swap_show_hide3() {
    if (document.getElementById('about-softmoon').style.display == 'block') {
        document.getElementById('about-softmoon').style.display = 'none';
    } else {
        document.getElementById('about-softmoon').style.display = 'block';
    }
}

function swap_show_hide4() {
    if (document.getElementById('about-ratking').style.display == 'block') {
        document.getElementById('about-ratking').style.display = 'none';
    } else {
        document.getElementById('about-ratking').style.display = 'block';
    }
}

function swap_show_hide5() {
    if (document.getElementById('about-action').style.display == 'block') {
        document.getElementById('about-action').style.display = 'none';
    } else {
        document.getElementById('about-action').style.display = 'block';
    }
}

function swap_show_hide6() {
    if (document.getElementById('about-kendrick').style.display == 'block') {
        document.getElementById('about-kendrick').style.display = 'none';
    } else {
        document.getElementById('about-kendrick').style.display = 'block';
    }
}

function swap_show_hide7() {
    if (document.getElementById('about-lightning').style.display == 'block') {
        document.getElementById('about-lightning').style.display = 'none';
    } else {
        document.getElementById('about-lightning').style.display = 'block';
    }
}

function swap_show_hide8() {
    if (document.getElementById('about-moon').style.display == 'block') {
        document.getElementById('about-moon').style.display = 'none';
    } else {
        document.getElementById('about-moon').style.display = 'block';
    }
}

function swap_show_hide9() {
    if (document.getElementById('about-goats').style.display == 'block') {
        document.getElementById('about-goats').style.display = 'none';
    } else {
        document.getElementById('about-goats').style.display = 'block';
    }
}