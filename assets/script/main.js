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

//############################form

function submitform() {


// nom, prenom et courriel

    var isok = 0;
    var valuenom = $('#nom').val();
    if(valuenom == ""){
        $('#err0').fadeIn();
        isok += 1;

    }else {
        $('#err0').fadeOut();

    }
    var valueprenom = $('#prenom').val();

    if(valueprenom == ""){
        $('#err1').fadeIn();
        isok += 1;

    }else {
        $('#err1').fadeOut();

    }
    var valuecourriel = $('#courriel').val();
    var reg_pattern = RegExp(".+\@.+\..+");
    if(!reg_pattern.test(valuecourriel)) {
        $('#err2').fadeIn();
        isok += 1;

    }else {
        $('#err2').fadeOut();

    }

    // nom d'utilisateur , password et password confirm
    var valueusername = $('#username').val();

    if(valueusername == ""){
        $('#err3').fadeIn();
        isok += 1;

    }else {
        $('#err3').fadeOut();

    }
    var valuepassword = $('#password').val();

    if(valuepassword == ""){
        $('#err4').fadeIn();
        isok += 1;

    }else {
        $('#err4').fadeOut();

    }
    var valuepassword_confirm = $('#password_confirm').val();

    if(valuepassword_confirm == ""){
        $('#err5').fadeIn();
        isok += 1;

    }else if(valuepassword_confirm !== valuepassword){
        $('#errpw2').fadeIn();
        isok += 1;

    }else{
        $('#err5').fadeOut();

    }
// sex age et préférences musicales

    var issexselected = $("input[name='sex']").is(':checked');

    if(!issexselected){
        $('#err_msg_sex').fadeIn();
        isok += 1;
    }else {
        $('#err_msg_sex').fadeOut();

    }
    var ismusselected = $("input[name='prefmus']").is(':checked');

    if(!ismusselected){
        $('#err_msg_mus').fadeIn();
        isok += 1;
    }else {
        $('#err_msg_mus').fadeOut();

    }
    var isageselected = $("input[name='age']");
    var age_indice = 0;
    for ( var i = 0 ; i < isageselected.length ; i++){
        if(isageselected[i].checked == true){
            age_indice += 1;
        }
    }
    if(age_indice == 0){
        $('#err_msg_age').fadeIn();
        isok += 1;
    }else {
        $('#err_msg_age').fadeOut();

    }
    if (isok == 0){
        alert('Merci beaucoup! Il est possible que vos informations soient vendues à d\'anonymes corporations!');
        $("input[type='text']").val('');
        $("input[type='radio']").attr("checked", false);
        $("input[type='checkbox']").attr("checked", false);

    }
}


// Functions Hide / Show pour les div de la section Review 

function swap_show_hide1() {
    if (document.getElementById('about-tyler').style.display == 'block') {
        document.getElementById('about-tyler').style.display = 'none';
        document.getElementById('img-tyler').style.border = 'none';
    } else {
        document.getElementById('about-tyler').style.display = 'block';
        document.getElementById('img-tyler').style.border = '2px solid #FF2E4C';
    }
}

function swap_show_hide2() {
    if (document.getElementById('about-prodigy').style.display == 'block') {
        document.getElementById('about-prodigy').style.display = 'none';
        document.getElementById('img-prodigy').style.border = 'none';
    } else {
        document.getElementById('about-prodigy').style.display = 'block';
        document.getElementById('img-prodigy').style.border = '2px solid #FF2E4C';
    }
}

function swap_show_hide3() {
    if (document.getElementById('about-softmoon').style.display == 'block') {
        document.getElementById('about-softmoon').style.display = 'none';
        document.getElementById('img-softmoon').style.border = 'none';
    } else {
        document.getElementById('about-softmoon').style.display = 'block';
        document.getElementById('img-softmoon').style.border = '2px solid #FF2E4C';
    }
}

function swap_show_hide4() {
    if (document.getElementById('about-ratking').style.display == 'block') {
        document.getElementById('about-ratking').style.display = 'none';
        document.getElementById('img-ratking').style.border = 'none';
    } else {
        document.getElementById('about-ratking').style.display = 'block';
        document.getElementById('img-ratking').style.border = '2px solid #FF2E4C';
    }
}

function swap_show_hide5() {
    if (document.getElementById('about-action').style.display == 'block') {
        document.getElementById('about-action').style.display = 'none';
        document.getElementById('img-action').style.border = 'none';
    } else {
        document.getElementById('about-action').style.display = 'block';
        document.getElementById('img-action').style.border = '2px solid #FF2E4C';
    }
}

function swap_show_hide6() {
    if (document.getElementById('about-kendrick').style.display == 'block') {
        document.getElementById('about-kendrick').style.display = 'none';
        document.getElementById('img-kendrick').style.border = 'none';
    } else {
        document.getElementById('about-kendrick').style.display = 'block';
        document.getElementById('img-kendrick').style.border = '2px solid #FF2E4C';
    }
}

function swap_show_hide7() {
    if (document.getElementById('about-lightning').style.display == 'block') {
        document.getElementById('about-lightning').style.display = 'none';
        document.getElementById('img-lightning').style.border = 'none';
    } else {
        document.getElementById('about-lightning').style.display = 'block';
        document.getElementById('img-lightning').style.border = '2px solid #FF2E4C';
    }
}

function swap_show_hide8() {
    if (document.getElementById('about-moon').style.display == 'block') {
        document.getElementById('about-moon').style.display = 'none';
        document.getElementById('img-moon').style.border = 'none';
    } else {
        document.getElementById('about-moon').style.display = 'block';
        document.getElementById('img-moon').style.border = '2px solid #FF2E4C';
    }
}

function swap_show_hide9() {
    if (document.getElementById('about-goats').style.display == 'block') {
        document.getElementById('about-goats').style.display = 'none';
        document.getElementById('img-goats').style.border = 'none';
    } else {
        document.getElementById('about-goats').style.display = 'block';
        document.getElementById('img-goats').style.border = '2px solid #FF2E4C';
    }
}