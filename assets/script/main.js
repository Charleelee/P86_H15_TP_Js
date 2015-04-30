'use strict';
$(function() {
    smoothscroll();



});

// JavaScript pour le Slider
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
}
setInterval(slider, 6000);

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


    var valuenom = $('#nom').val();
    if(valuenom == ""){
        $('#err0').fadeIn();

    }else {
        $('#err0').fadeOut();
    }
    var valueprenom = $('#prenom').val();

    if(valueprenom == ""){
        $('#err1').fadeIn();

    }else {
        $('#err1').fadeOut();
    }
    var valuecourriel = $('#courriel').val();
    var reg_pattern = RegExp(".+\@.+\..+");
    if(!reg_pattern.test(valuecourriel)) {
        $('#err2').fadeIn();

    }else {
        $('#err2').fadeOut();
    }

    // nom d'utilisateur , password et password confirm
    var valueusername = $('#username').val();

    if(valueusername == ""){
        $('#err3').fadeIn();

    }else {
        $('#err3').fadeOut();
    }
    var valuepassword = $('#password').val();

    if(valuepassword == ""){
        $('#err4').fadeIn();

    }else {
        $('#err4').fadeOut();
    }
    var valuepassword_confirm = $('#password_confirm').val();

    if(valuepassword_confirm == ""){
        $('#err5').fadeIn();

    }else if(valuepassword_confirm !== valuepassword){
        $('#errpw2').fadeIn();

    }else{
        $('#err5').fadeOut();
    }
// sex age et préférences musicales

    var issexselected = $("input[name='sex']").is(':checked');

    if(!issexselected){
        $('#err_msg_sex').fadeIn();
    }else {
        $('#err_msg_sex').fadeOut();
    }
    var ismusselected = $("input[name='prefmus']").is(':checked');

    if(!ismusselected){
        $('#err_msg_mus').fadeIn();
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
    }else {
        $('#err_msg_age').fadeOut();
    }
}
