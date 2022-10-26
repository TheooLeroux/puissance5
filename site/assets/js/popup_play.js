/* ------------------------------------------------------------------------------------------------------------------------- */
/* CATEGORIE POPUP PLAY */

var buttonT1 = document.getElementById('button_t01');
var buttonT2 = document.getElementById('button_t02');
var buttonT3 = document.getElementById('button_t03');
var flexBody03 = document.getElementById('flexBody03');




var buttonFac = document.getElementById('button_facile');
var buttonMoy = document.getElementById('button_moyen');
var buttonExt = document.getElementById('button_extreme');
var buttonImp = document.getElementById('button_impossible');

var buttonPlay = document.getElementById('buttonPlay');
var TextError = document.getElementById('text_erreur');


var themeChoisi = ""
var niveauChoisi = ""
var lancerPartie = 0;



var button_select01 = function () {     
    themeChoisi = "Nourriture"
    buttonT1.style.opacity = '1'   
    buttonT2.style.opacity = '0.3'   
    buttonT3.style.opacity = '0.3';   
}

var button_select02 = function () {     
    themeChoisi = "Smiley"
    buttonT2.style.opacity = '1'
    buttonT1.style.opacity = '0.3'
    buttonT3.style.opacity = '0.3';   
}

var button_select03 = function () {     
    themeChoisi = "Objet"
    buttonT3.style.opacity = '1'
    buttonT1.style.opacity = '0.3'
    buttonT2.style.opacity = '0.3';   
}

var button_selectLevel01 = function () {     
    niveauChoisi = "Facile"
    buttonFac.style.opacity = '1'   
    buttonExt.style.opacity = '0.3'   
    buttonMoy.style.opacity = '0.3';   
    buttonImp.style.opacity = '0.3';   

}

var button_selectLevel02 = function () {     
    niveauChoisi = "Moyen"
    buttonMoy.style.opacity = '1'
    buttonFac.style.opacity = '0.3'
    buttonExt.style.opacity = '0.3';   
    buttonImp.style.opacity = '0.3';   

}

var button_selectLevel03 = function () {     
    niveauChoisi = "Extreme"
    buttonExt.style.opacity = '1'
    buttonFac.style.opacity = '0.3'
    buttonMoy.style.opacity = '0.3';   
    buttonImp.style.opacity = '0.3';   
}

var button_selectLevel04 = function () {     
    niveauChoisi = "Impossible"
    buttonImp.style.opacity = '1'
    buttonFac.style.opacity = '0.3'
    buttonMoy.style.opacity = '0.3';  
    buttonExt.style.opacity = '0.3';   
}

var button_play = function () {   
    
    if (niveauChoisi && themeChoisi != "") {

        flexBody03.style.opacity = '0'; 
        flexBody03.style.zIndex = '-10';
        lancerPartie = 1;

    }else{
        TextError.style.opacity = '1';
    }
    
}

console.log(niveauChoisi)


buttonT1.addEventListener('click', button_select01);
buttonT2.addEventListener('click', button_select02);
buttonT3.addEventListener('click', button_select03);

buttonFac.addEventListener('click', button_selectLevel01);
buttonMoy.addEventListener('click', button_selectLevel02);
buttonExt.addEventListener('click', button_selectLevel03);
buttonImp.addEventListener('click', button_selectLevel04);

buttonPlay.addEventListener('click', button_play);


/* ------------------------------------------------------------------------------------------------------------------------- */