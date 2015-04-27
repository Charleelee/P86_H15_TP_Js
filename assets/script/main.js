'use strict';

function submitform(){
    var check_entry = document.getElementsByClassName('checkentry');

        if(check_entry[0].value === ""){
            document.getElementById('err'+0).style.visibility = 'visible';
        }else{
            document.getElementById('err'+0).style.visibility = 'hidden';
        }

        if(check_entry[1].value === ""){
            document.getElementById('err'+1).style.visibility = 'visible';
        }else{
            document.getElementById('err'+1).style.visibility = 'hidden';
        }

        if(check_entry[2].value === ""){
            document.getElementById('err'+2).style.visibility = 'visible';
        }else{
            document.getElementById('err'+2).style.visibility = 'hidden';
        }

        if(check_entry[3].value === ""){
            document.getElementById('err'+3).style.visibility = 'visible';
        }else{
            document.getElementById('err'+3).style.visibility = 'hidden';
        }
        if(check_entry[4].value === ""){
            document.getElementById('err'+4).style.visibility = 'visible';
        }else{
            document.getElementById('err'+4).style.visibility = 'hidden';
        }
        if(check_entry[5].value === ""){
            document.getElementById('err'+5).style.visibility = 'visible';
        }else{
            document.getElementById('err'+5).style.visibility = 'hidden';
        }
    var gender = document.getElementsByName('h/f');
    var flag = 1;
    var errh_f = document.getElementById('errh/f');
        for (var j in gender){
            if (gender[j].checked){
                flag = 0;
            }
        }
        if (flag == 1){
            errh_f.style.visibility = 'visible';
        }

    var age = document.getElementsByName('age_name');
    var flag2 = 1;
    var errage = document.getElementById('errage');
        for (var i in age){
            if (age[i].checked){
                flag2 = 0;
            }
        }
        if (flag2 == 1){
            errage.style.visibility = 'visible';
        }

    var prefmusicales = document.getElementsByName('prefmus');
    var flag3 = 0;
    var errprefmus = document.getElementById('errprefmus');
        for (var i in prefmusicales){
            if (prefmusicales[i].checked){
                flag3 += 1;
            }
        }
        if (flag3 < 1){
            errprefmus.style.visibility = 'visible';
        }
}