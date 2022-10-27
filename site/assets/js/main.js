/* ------------------------------------------------------------------------------------------------------------------------- */
/* CATEGORIE POPUP PLAY */

var buttonT1 = document.getElementById('button_t01');
var buttonT2 = document.getElementById('button_t02');
var buttonT3 = document.getElementById('button_t03');
var flexBody03 = document.getElementById('flexBody03');
var fullscreen = document.getElementById('fullscreen');

var buttonFac = document.getElementById('button_facile');
var buttonMoy = document.getElementById('button_moyen');
var buttonExt = document.getElementById('button_extreme');
var buttonImp = document.getElementById('button_impossible');

var buttonPlay = document.getElementById('buttonPlay');
var TextError = document.getElementById('text_erreur');
var popUpReplay = document.getElementById('popUpReplay');
var imgreplaycroix = document.getElementById('imgreplaycroix');

var bravo = document.getElementById('bravo');
var img_bravo = document.getElementById('img_bravo');

var dommage = document.getElementById('dommage');
var img_dommage = document.getElementById('img_dommage');





var lancerPartie = 0;
var veriffin = 0;
var themeChoisi = "";
var niveauChoisi = "";
var score=10000;



var button_select01 = function () {     
    themeChoisi = "Nourriture";
    buttonT1.style.opacity = '1';   
    buttonT2.style.opacity = '0.3';   
    buttonT3.style.opacity = '0.3';   
}

var button_select02 = function () {     
    themeChoisi = "Smiley";
    buttonT2.style.opacity = '1';
    buttonT1.style.opacity = '0.3'
    buttonT3.style.opacity = '0.3';   
}

var button_select03 = function () {     
    themeChoisi = "Objet";
    buttonT3.style.opacity = '1';
    buttonT1.style.opacity = '0.3';
    buttonT2.style.opacity = '0.3';   
}

var button_selectLevel01 = function () {     
    niveauChoisi = "Facile";
    buttonFac.style.opacity = '1';   
    buttonExt.style.opacity = '0.3';   
    buttonMoy.style.opacity = '0.3';   
    buttonImp.style.opacity = '0.3';   

}

var button_selectLevel02 = function () {     
    niveauChoisi = "Moyen";
    buttonMoy.style.opacity = '1';
    buttonFac.style.opacity = '0.3';
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
    niveauChoisi = "Impossible";
    buttonImp.style.opacity = '1';
    buttonFac.style.opacity = '0.3';
    buttonMoy.style.opacity = '0.3';  
    buttonExt.style.opacity = '0.3';   
}

var button_play = function () {   
    
    if (niveauChoisi && themeChoisi != "") {

        console.log(niveauChoisi);
        flexBody03.style.opacity = '0'; 
        flexBody03.style.zIndex = '-10';
        fullscreen.style.opacity = '1';
        lancerPartie = 1;

    }else{
        TextError.style.opacity = '1';
    }
    
}

var fermerPopUp = function(){
    popUpReplay.style.zIndex = '-5';
}




buttonT1.addEventListener('click', button_select01);
buttonT2.addEventListener('click', button_select02);
buttonT3.addEventListener('click', button_select03);

buttonFac.addEventListener('click', button_selectLevel01);
buttonMoy.addEventListener('click', button_selectLevel02);
buttonExt.addEventListener('click', button_selectLevel03);
buttonImp.addEventListener('click', button_selectLevel04);



/* ------------------------------------------------------------------------------------------------------------------------- */

const divResultat = document.querySelector("#resultat");


var tabJeuFacile= [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
    
]

var tabJeuMoyen= [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
    
]

var tabJeuExtreme= [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    
]

var tabJeuImpossible= [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    
]


/// var tabResultatMoyen= [
///    [1, 4, 3, 2],
///    [8, 5, 2, 6],
///    [7, 3, 6, 5],
///    [1, 4, 8, 7]
///]


var oldSelection=[];
var nbAffiche=0;
var ready = true;





/* ------------------------------------------------------------------------------------------------------------------------- */
/* CATEGORIE Facile */



var tabResultatFacile = genereTableauAleatoireFacile();

function afficherTableauFacile(){
    if (niveauChoisi=="Facile"){
        var txt=""
        for(var i = 0; i < tabJeuFacile.length; i++){
            txt += "</div>";
            for(var j=0; j < tabJeuFacile[i].length ; j++){
                if (tabJeuFacile[i][j] === 0){
                txt += "<button id='carretabID01Facile'class='carretabFacile' onClick = 'verifFacile(\""+i+"-"+j+"\")' ></button>";
            } else {
                txt += "<button id='carretabIDFacile' class='imagejeuFacile' style='background-image:url("+getImageFacile(tabJeuFacile[i][j])+")'>";
            }
            
        }
        txt += "</div>";
        
    }
        
        divResultat.innerHTML = txt;
    }
}








function getImageFacile(valeur){
    var imgTxt = "";
    if(themeChoisi=="Nourriture"){
    switch(valeur){
        case 1 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1033503212377997312/u1F347.png";
        break;
        case 2 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1033503212742910022/u1F353.png";
        break;
        case 3 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1033503213074268230/u1F354.png";
        break;
        case 4 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1033503213564985375/u1F355.png";
        break;
        case 5 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1033504336250159125/u1F352.png";
        break;
        case 6 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1033503224835088454/u1F351.png";
        break;
        case 7 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1033503214697451610/u1F346.png";
        break;
        case 8 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1033503215037198396/u1F965.png";
        break;

        
    
        default : console.log("Cas non pris en compte")
    }
    return imgTxt
}
else if (themeChoisi=="Smiley"){
    switch(valeur){
        case 1 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1035104383932846110/u1F973.png";
        break;
        case 2 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1035104383932846110/u1F973.png";
        break;
        case 3 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1035104384771690526/u1F975.png";
        break;
        case 4 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1035104385417609246/u1F976.png";
        break;
        case 5 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1035104386105495672/u1F923.png";
        break;
        case 6 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1035104386625568788/u1F922.png";
        break;
        case 7 : imgTxt += "https://cdn.discordapp.com/attachments/301039123160891402/1035104387137294346/u1F631.png";
        break;
        case 8 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1035104387518959656/u1F46E.5.M.png";
        break;


        
    
        default : console.log("Cas non pris en compte")
    }
    return imgTxt
}
else{
    switch(valeur){
        case 1 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1035102895076544533/u1F9EF.png";
        break;
        case 2 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1035102895529533540/u1F9F8.png";
        break;
        case 3 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1035102896083189760/u1F97E.png";
        break;
        case 4 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1035102896552939550/u1F6F5.png";
        break;
        case 5 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1035102897559572543/u1F302.png";
        break;
        case 6 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1035102897974820925/u1F511.png";
        break;
        case 7 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1035102898985639966/u26BD.png";
        break;
        case 8 : imgTxt += "https://media.discordapp.net/attachments/301039123160891402/1035103850601918564/unknown.png";
        break;


        
    
        default : console.log("Cas non pris en compte")
    }
    return imgTxt
}
}




function verifFacile(bouton){

        if(ready){

            nbAffiche++;
            var ligne = bouton.substr(0,1);
            var colonne = bouton.substr(2, 1);
            console.log(ligne);
            console.log(colonne);
            
            tabJeuFacile[ligne][colonne] = tabResultatFacile[ligne][colonne];
            afficherTableauFacile();

            if(nbAffiche>1) {

                ready = false;
                setTimeout(() => {
                    //Verification entre les 2 img ici
                    if (tabJeuFacile[ligne][colonne] !== tabResultatFacile[oldSelection[0]][oldSelection[1]]) {
                        tabJeuFacile[ligne][colonne] = 0;
                        tabJeuFacile[oldSelection[0]][oldSelection[1]] = 0;
                    }
                    else{
                        veriffin=veriffin+1
                        if(veriffin==8){
                            gagne()
                            popUpReplay.style.zIndex = '5';
                            bravo.style.opacity = '1';
                            img_bravo.style.opacity = '1';
                        }
                    }
                    afficherTableauFacile();
                    ready = true;
                    nbAffiche = 0;
                    oldSelection = [ligne, colonne];

                },2000)

            } else {
                oldSelection = [ligne, colonne];
                
            }

        }
    

}




function genereTableauAleatoireFacile(){
        var tab = [];
        var nbImagePosition=[0, 0, 0, 0, 0, 0, 0, 0];

        for(var i = 0 ; i < 4 ; i++){
            var ligne = [];
            for (var j = 0 ; j < 4 ; j++){
                var fin = false;
                while(!fin){
                    console.log(nbImagePosition[randomImage])
                    var randomImage = Math.floor(Math.random() * 8);
                    if (nbImagePosition[randomImage] < 2){
                        ligne.push(randomImage+1);
                        nbImagePosition[randomImage]++;
                        fin = true;
                    }
                }
            }
            tab.push(ligne);
        }
        return tab;
    }

/* ------------------------------------------------------------------------------------------------------------------------- */
/* CATEGORIE Moyen */


var tabResultatMoyen = genereTableauAleatoireMoyen();


function afficherTableauMoyen(){
    if (niveauChoisi=="Moyen"){
        var txt=""

        for(var i = 0; i < tabJeuMoyen.length; i++){
            txt += "</div>";
            for(var j=0; j < tabJeuMoyen[i].length ; j++){
                if (tabJeuMoyen[i][j] === 0){
                txt += "<button id='carretabID01Moyen'class='carretabMoyen' onClick = 'verifMoyen(\""+i+"-"+j+"\")' ></button>";
            } else {
                txt += "<button id='carretabIDMoyen' class='imagejeuMoyen' style='background-image:url("+getImageMoyen(tabJeuMoyen[i][j])+")'>";
            }
            
        }
        txt += "</div>";
        
    }
        
        divResultat.innerHTML = txt;
    }
}




function getImageMoyen(valeur){
    var imgTxt = "";
    if(themeChoisi=="Nourriture"){
    switch(valeur){
        case 1 : imgTxt += "assets/Image/Apple/697.png";
        break;
        case 2 : imgTxt += "assets/Image/Apple/699.png";
        break;
        case 3 : imgTxt += "assets/Image/Apple/693.png";
        break;
        case 4 : imgTxt += "assets/Image/Apple/743.png";
        break;
        case 5 : imgTxt += "assets/Image/Apple/698.png";
        break;
        case 6 : imgTxt += "assets/Image/Apple/681.png";
        break;
        case 7 : imgTxt += "assets/Image/Apple/662.png";
        break;
        case 8 : imgTxt += "assets/Image/Apple/668.png";
        break;

        case 9 : imgTxt += "assets/Image/Apple/663.png";
        break;
        case 10 : imgTxt += "assets/Image/Apple/664.png";
        break;
        case 11 : imgTxt += "assets/Image/Apple/665.png";
        break;
        case 12 : imgTxt += "assets/Image/Apple/671.png";
        break;
        case 13 : imgTxt += "assets/Image/Apple/661.png";
        break;
        case 14 : imgTxt += "assets/Image/Apple/650.png";
        break;
        case 15 : imgTxt += "assets/Image/Apple/658.png";
        break;
        case 16 : imgTxt += "assets/Image/Apple/655.png";
        break;

        case 17 : imgTxt += "assets/Image/Apple/686.png";
        break;
        case 18 : imgTxt += "assets/Image/Apple/685.png";
        break;
        case 19 : imgTxt += "assets/Image/Apple/688.png";
        break;
        case 20 : imgTxt += "assets/Image/Apple/690.png";
        break;
        case 21 : imgTxt += "assets/Image/Apple/694.png";
        break;
        case 22 : imgTxt += "assets/Image/Apple/692.png";
        break;
        case 23 : imgTxt += "assets/Image/Apple/691.png";
        break;
        case 24 : imgTxt += "assets/Image/Apple/700.png";
        break;

        case 25 : imgTxt += "assets/Image/Apple/701.png";
        break;
        case 26 : imgTxt += "assets/Image/Apple/702.png";
        break;
        case 27 : imgTxt += "assets/Image/Apple/703.png";
        break;
        case 28 : imgTxt += "assets/Image/Apple/704.png";
        break;
        case 29 : imgTxt += "assets/Image/Apple/708.png";
        break;
        case 30 : imgTxt += "assets/Image/Apple/713.png";
        break;
        case 31 : imgTxt += "assets/Image/Apple/714.png";
        break;
        case 32 : imgTxt += "assets/Image/Apple/716.png";
        break;



        
    
        default : console.log("Cas non pris en compte")
    }
    return imgTxt
}
else if(themeChoisi=="Smiley"){
    switch(valeur){
        case 1 : imgTxt += "assets/Image/Apple/2.png";
        break;
        case 2 : imgTxt += "assets/Image/Apple/3.png";
        break;
        case 3 : imgTxt += "assets/Image/Apple/4.png";
        break;
        case 4 : imgTxt += "assets/Image/Apple/5.png";
        break;
        case 5 : imgTxt += "assets/Image/Apple/6.png";
        break;
        case 6 : imgTxt += "assets/Image/Apple/7.png";
        break;
        case 7 : imgTxt += "assets/Image/Apple/8.png";
        break;
        case 8 : imgTxt += "assets/Image/Apple/9.png";
        break;

        case 9 : imgTxt += "assets/Image/Apple/10.png";
        break;
        case 10 : imgTxt += "assets/Image/Apple/11.png";
        break;
        case 11 : imgTxt += "assets/Image/Apple/12.png";
        break;
        case 12 : imgTxt += "assets/Image/Apple/13.png";
        break;
        case 13 : imgTxt += "assets/Image/Apple/14.png";
        break;
        case 14 : imgTxt += "assets/Image/Apple/15.png";
        break;
        case 15 : imgTxt += "assets/Image/Apple/16.png";
        break;
        case 16 : imgTxt += "assets/Image/Apple/17.png";
        break;

        case 17 : imgTxt += "assets/Image/Apple/18.png";
        break;
        case 18 : imgTxt += "assets/Image/Apple/19.png";
        break;
        case 19 : imgTxt += "assets/Image/Apple/20.png";
        break;
        case 20 : imgTxt += "assets/Image/Apple/21.png";
        break;
        case 21 : imgTxt += "assets/Image/Apple/22.png";
        break;
        case 22 : imgTxt += "assets/Image/Apple/23.png";
        break;
        case 23 : imgTxt += "assets/Image/Apple/24.png";
        break;
        case 24 : imgTxt += "assets/Image/Apple/25.png";
        break;

        case 25 : imgTxt += "assets/Image/Apple/26.png";
        break;
        case 26 : imgTxt += "assets/Image/Apple/27.png";
        break;
        case 27 : imgTxt += "assets/Image/Apple/28.png";
        break;
        case 28 : imgTxt += "assets/Image/Apple/29.png";
        break;
        case 29 : imgTxt += "assets/Image/Apple/30.png";
        break;
        case 30 : imgTxt += "assets/Image/Apple/31.png";
        break;
        case 31 : imgTxt += "assets/Image/Apple/32.png";
        break;
        case 32 : imgTxt += "assets/Image/Apple/33.png";
        break;



        
    
        default : console.log("Cas non pris en compte")
    }
    return imgTxt
}
else{
    switch(valeur){
        case 1 : imgTxt += "assets/Image/Apple/886.png";
        break;
        case 2 : imgTxt += "assets/Image/Apple/880.png";
        break;
        case 3 : imgTxt += "assets/Image/Apple/879.png";
        break;
        case 4 : imgTxt += "assets/Image/Apple/901.png";
        break;
        case 5 : imgTxt += "assets/Image/Apple/895.png";
        break;
        case 6 : imgTxt += "assets/Image/Apple/919.png";
        break;
        case 7 : imgTxt += "assets/Image/Apple/915.png";
        break;
        case 8 : imgTxt += "assets/Image/Apple/913.png";
        break;


        case 9 : imgTxt += "assets/Image/Apple/800.png";
        break;
        case 10 : imgTxt += "assets/Image/Apple/799.png";
        break;
        case 11 : imgTxt += "assets/Image/Apple/848.png";
        break;
        case 12 : imgTxt += "assets/Image/Apple/860.png";
        break;
        case 13 : imgTxt += "assets/Image/Apple/893.png";
        break;
        case 14 : imgTxt += "assets/Image/Apple/890.png";
        break;
        case 15 : imgTxt += "assets/Image/Apple/914.png";
        break;
        case 16 : imgTxt += "assets/Image/Apple/998.png";
        break;

        case 17 : imgTxt += "assets/Image/Apple/1000.png";
        break;
        case 18 : imgTxt += "assets/Image/Apple/1001.png";
        break;
        case 19 : imgTxt += "assets/Image/Apple/1002.png";
        break;
        case 20 : imgTxt += "assets/Image/Apple/1003.png";
        break;
        case 21 : imgTxt += "assets/Image/Apple/1010.png";
        break;
        case 22 : imgTxt += "assets/Image/Apple/1011.png";
        break;
        case 23 : imgTxt += "assets/Image/Apple/1015.png";
        break;
        case 24 : imgTxt += "assets/Image/Apple/1016.png";
        break;

        case 25 : imgTxt += "assets/Image/Apple/1021.png";
        break;
        case 26 : imgTxt += "assets/Image/Apple/1022.png";
        break;
        case 27 : imgTxt += "assets/Image/Apple/1026.png";
        break;
        case 28 : imgTxt += "assets/Image/Apple/1043.png";
        break;
        case 29 : imgTxt += "assets/Image/Apple/1051.png";
        break;
        case 30 : imgTxt += "assets/Image/Apple/1052.png";
        break;
        case 31 : imgTxt += "assets/Image/Apple/1059.png";
        break;
        case 32 : imgTxt += "assets/Image/Apple/1055.png";
        break;



        
    
        default : console.log("Cas non pris en compte")
    }
    return imgTxt
}
}



function verifMoyen(bouton){

    if(ready){

        nbAffiche++;
        var ligne = bouton.substr(0,1);
        var colonne = bouton.substr(2, 1);
        console.log(ligne);
        console.log(colonne);
        
        tabJeuMoyen[ligne][colonne] = tabResultatMoyen[ligne][colonne];
        afficherTableauMoyen();

        if(nbAffiche>1) {

            ready = false;
            setTimeout(() => {
                //Verification entre les 2 img ici
                if (tabJeuMoyen[ligne][colonne] !== tabResultatMoyen[oldSelection[0]][oldSelection[1]]) {
                    tabJeuMoyen[ligne][colonne] = 0;
                    tabJeuMoyen[oldSelection[0]][oldSelection[1]] = 0;
                }
                else{
                    veriffin=veriffin+1
                    if(veriffin==32){
                        gagne()
                        popUpReplay.style.zIndex = '5';
                        bravo.style.opacity = '1';
                        img_bravo.style.opacity = '1';
                        
                    }
                }
                afficherTableauMoyen();
                ready = true;
                nbAffiche = 0;
                oldSelection = [ligne, colonne];

            },2000)

        } else {
            oldSelection = [ligne, colonne];
        }

    }

}




function genereTableauAleatoireMoyen(){
    var tab = [];
    var nbImagePosition=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for(var i = 0 ; i < 8 ; i++){
        var ligne = [];
        for (var j = 0 ; j < 8 ; j++){
            var fin = false;
            while(!fin){
                console.log(nbImagePosition[randomImage])
                var randomImage = Math.floor(Math.random() * 32);
                if (nbImagePosition[randomImage] < 2){
                    ligne.push(randomImage+1);
                    nbImagePosition[randomImage]++;
                    fin = true;
                }
            }
        }
        tab.push(ligne);
    }
    return tab;
}


/* ------------------------------------------------------------------------------------------------------------------------- */
/* CATEGORIE Extreme */


var tabResultatExtreme = genereTableauAleatoireExtreme();


function afficherTableauExtreme(){
    if (niveauChoisi=="Extreme"){
        var txt=""

        for(var i = 0; i < tabJeuExtreme.length; i++){
            txt += "</div>";
            for(var j=0; j < tabJeuExtreme[i].length ; j++){
                if (tabJeuExtreme[i][j] === 0){
                txt += "<button id='carretabID01Extreme'class='carretabExtreme' onClick = 'verifExtreme(\""+i+"-"+j+"\")' ></button>";
            } else {
                txt += "<button id='carretabIDExtreme' class='imagejeuExtreme' style='background-image:url("+getImageExtreme(tabJeuExtreme[i][j])+")'>";
            }
            
        }
        txt += "</div>";
        
    }
        
        divResultat.innerHTML = txt;
    }
}




function getImageExtreme(valeur){
    var imgTxt = "";
    if(themeChoisi=="Nourriture"){
    switch(valeur){
        case 1 : imgTxt += "assets/Image/Apple/697.png";
        break;
        case 2 : imgTxt += "assets/Image/Apple/699.png";
        break;
        case 3 : imgTxt += "assets/Image/Apple/693.png";
        break;
        case 4 : imgTxt += "assets/Image/Apple/743.png";
        break;
        case 5 : imgTxt += "assets/Image/Apple/698.png";
        break;
        case 6 : imgTxt += "assets/Image/Apple/681.png";
        break;
        case 7 : imgTxt += "assets/Image/Apple/662.png";
        break;
        case 8 : imgTxt += "assets/Image/Apple/668.png";
        break;

        case 9 : imgTxt += "assets/Image/Apple/663.png";
        break;
        case 10 : imgTxt += "assets/Image/Apple/664.png";
        break;
        case 11 : imgTxt += "assets/Image/Apple/665.png";
        break;
        case 12 : imgTxt += "assets/Image/Apple/671.png";
        break;
        case 13 : imgTxt += "assets/Image/Apple/661.png";
        break;
        case 14 : imgTxt += "assets/Image/Apple/650.png";
        break;
        case 15 : imgTxt += "assets/Image/Apple/658.png";
        break;
        case 16 : imgTxt += "assets/Image/Apple/655.png";
        break;

        case 17 : imgTxt += "assets/Image/Apple/686.png";
        break;
        case 18 : imgTxt += "assets/Image/Apple/685.png";
        break;
        case 19 : imgTxt += "assets/Image/Apple/688.png";
        break;
        case 20 : imgTxt += "assets/Image/Apple/690.png";
        break;
        case 21 : imgTxt += "assets/Image/Apple/694.png";
        break;
        case 22 : imgTxt += "assets/Image/Apple/692.png";
        break;
        case 23 : imgTxt += "assets/Image/Apple/691.png";
        break;
        case 24 : imgTxt += "assets/Image/Apple/700.png";
        break;

        case 25 : imgTxt += "assets/Image/Apple/701.png";
        break;
        case 26 : imgTxt += "assets/Image/Apple/702.png";
        break;
        case 27 : imgTxt += "assets/Image/Apple/703.png";
        break;
        case 28 : imgTxt += "assets/Image/Apple/704.png";
        break;
        case 29 : imgTxt += "assets/Image/Apple/708.png";
        break;
        case 30 : imgTxt += "assets/Image/Apple/713.png";
        break;
        case 31 : imgTxt += "assets/Image/Apple/714.png";
        break;
        case 32 : imgTxt += "assets/Image/Apple/716.png";
        break;

        case 33 : imgTxt += "assets/Image/Apple/721.png";
        break;
        case 34 : imgTxt += "assets/Image/Apple/722.png";
        break;
        case 35 : imgTxt += "assets/Image/Apple/728.png";
        break;
        case 36 : imgTxt += "assets/Image/Apple/731.png";
        break;
        case 37 : imgTxt += "assets/Image/Apple/729.png";
        break;
        case 38 : imgTxt += "assets/Image/Apple/718.png";
        break;
        case 39 : imgTxt += "assets/Image/Apple/727.png";
        break;
        case 40 : imgTxt += "assets/Image/Apple/719.png";
        break;
        case 41 : imgTxt += "assets/Image/Apple/720.png";
        break;

        case 42 : imgTxt += "assets/Image/Apple/733.png";
        break;
        case 43 : imgTxt += "assets/Image/Apple/734.png";
        break;
        case 44 : imgTxt += "assets/Image/Apple/735.png";
        break;
        case 45 : imgTxt += "assets/Image/Apple/736.png";
        break;
        case 46 : imgTxt += "assets/Image/Apple/737.png";
        break;
        case 47 : imgTxt += "assets/Image/Apple/738.png";
        break;
        case 48 : imgTxt += "assets/Image/Apple/739.png";
        break;
        case 49 : imgTxt += "assets/Image/Apple/740.png";
        break;

        case 50 : imgTxt += "assets/Image/Apple/745.png";
        break;
        case 51 : imgTxt += "assets/Image/Apple/746.png";
        break;
        case 52 : imgTxt += "assets/Image/Apple/747.png";
        break;
        case 53 : imgTxt += "assets/Image/Apple/748.png";
        break;
        case 54 : imgTxt += "assets/Image/Apple/749.png";
        break;
        case 55 : imgTxt += "assets/Image/Apple/750.png";
        break;
        case 56 : imgTxt += "assets/Image/Apple/751.png";
        break;
        case 57 : imgTxt += "assets/Image/Apple/753.png";
        break;

        case 58 : imgTxt += "assets/Image/Apple/754.png";
        break;
        case 59 : imgTxt += "assets/Image/Apple/756.png";
        break;
        case 60 : imgTxt += "assets/Image/Apple/769.png";
        break;
        case 61 : imgTxt += "assets/Image/Apple/707.png";
        break;
        case 62 : imgTxt += "assets/Image/Apple/695.png";
        break;
        case 63 : imgTxt += "assets/Image/Apple/696.png";
        break;
        case 64 : imgTxt += "assets/Image/Apple/688.png";
        break;
        case 65 : imgTxt += "assets/Image/Apple/683.png";
        break;

        case 66 : imgTxt += "assets/Image/Apple/673.png";
        break;
        case 67 : imgTxt += "assets/Image/Apple/674.png";
        break;
        case 68 : imgTxt += "assets/Image/Apple/670.png";
        break;
        case 69 : imgTxt += "assets/Image/Apple/672.png";
        break;
        case 70 : imgTxt += "assets/Image/Apple/656.png";
        break;
        case 71 : imgTxt += "assets/Image/Apple/652.png";
        break;
        case 72 : imgTxt += "assets/Image/Apple/654.png";
        break;
        
        default : console.log("Cas non pris en compte")
    }
    return imgTxt
}
else if(themeChoisi=="Smiley"){
    switch(valeur){
        case 1 : imgTxt += "assets/Image/Apple/2.png";
        break;
        case 2 : imgTxt += "assets/Image/Apple/3.png";
        break;
        case 3 : imgTxt += "assets/Image/Apple/4.png";
        break;
        case 4 : imgTxt += "assets/Image/Apple/5.png";
        break;
        case 5 : imgTxt += "assets/Image/Apple/6.png";
        break;
        case 6 : imgTxt += "assets/Image/Apple/7.png";
        break;
        case 7 : imgTxt += "assets/Image/Apple/8.png";
        break;
        case 8 : imgTxt += "assets/Image/Apple/9.png";
        break;

        case 9 : imgTxt += "assets/Image/Apple/10.png";
        break;
        case 10 : imgTxt += "assets/Image/Apple/11.png";
        break;
        case 11 : imgTxt += "assets/Image/Apple/12.png";
        break;
        case 12 : imgTxt += "assets/Image/Apple/13.png";
        break;
        case 13 : imgTxt += "assets/Image/Apple/14.png";
        break;
        case 14 : imgTxt += "assets/Image/Apple/15.png";
        break;
        case 15 : imgTxt += "assets/Image/Apple/16.png";
        break;
        case 16 : imgTxt += "assets/Image/Apple/17.png";
        break;

        case 17 : imgTxt += "assets/Image/Apple/18.png";
        break;
        case 18 : imgTxt += "assets/Image/Apple/19.png";
        break;
        case 19 : imgTxt += "assets/Image/Apple/20.png";
        break;
        case 20 : imgTxt += "assets/Image/Apple/21.png";
        break;
        case 21 : imgTxt += "assets/Image/Apple/22.png";
        break;
        case 22 : imgTxt += "assets/Image/Apple/23.png";
        break;
        case 23 : imgTxt += "assets/Image/Apple/24.png";
        break;
        case 24 : imgTxt += "assets/Image/Apple/25.png";
        break;

        case 25 : imgTxt += "assets/Image/Apple/26.png";
        break;
        case 26 : imgTxt += "assets/Image/Apple/27.png";
        break;
        case 27 : imgTxt += "assets/Image/Apple/28.png";
        break;
        case 28 : imgTxt += "assets/Image/Apple/29.png";
        break;
        case 29 : imgTxt += "assets/Image/Apple/30.png";
        break;
        case 30 : imgTxt += "assets/Image/Apple/31.png";
        break;
        case 31 : imgTxt += "assets/Image/Apple/32.png";
        break;
        case 32 : imgTxt += "assets/Image/Apple/33.png";
        break;

        case 33 : imgTxt += "assets/Image/Apple/1.png";
        break;
        case 34 : imgTxt += "assets/Image/Apple/34.png";
        break;
        case 35 : imgTxt += "assets/Image/Apple/35.png";
        break;
        case 36 : imgTxt += "assets/Image/Apple/36.png";
        break;
        case 37 : imgTxt += "assets/Image/Apple/37.png";
        break;
        case 38 : imgTxt += "assets/Image/Apple/38.png";
        break;
        case 39 : imgTxt += "assets/Image/Apple/39.png";
        break;
        case 40 : imgTxt += "assets/Image/Apple/40.png";
        break;
        case 41 : imgTxt += "assets/Image/Apple/41.png";
        break;

        case 42 : imgTxt += "assets/Image/Apple/42.png";
        break;
        case 43 : imgTxt += "assets/Image/Apple/43.png";
        break;
        case 44 : imgTxt += "assets/Image/Apple/44.png";
        break;
        case 45 : imgTxt += "assets/Image/Apple/45.png";
        break;
        case 46 : imgTxt += "assets/Image/Apple/46.png";
        break;
        case 47 : imgTxt += "assets/Image/Apple/47.png";
        break;
        case 48 : imgTxt += "assets/Image/Apple/48.png";
        break;
        case 49 : imgTxt += "assets/Image/Apple/49.png";
        break;

        case 50 : imgTxt += "assets/Image/Apple/50.png";
        break;
        case 51 : imgTxt += "assets/Image/Apple/51.png";
        break;
        case 52 : imgTxt += "assets/Image/Apple/52.png";
        break;
        case 53 : imgTxt += "assets/Image/Apple/53.png";
        break;
        case 54 : imgTxt += "assets/Image/Apple/54.png";
        break;
        case 55 : imgTxt += "assets/Image/Apple/55.png";
        break;
        case 56 : imgTxt += "assets/Image/Apple/56.png";
        break;
        case 57 : imgTxt += "assets/Image/Apple/57.png";
        break;

        case 58 : imgTxt += "assets/Image/Apple/58.png";
        break;
        case 59 : imgTxt += "assets/Image/Apple/59.png";
        break;
        case 60 : imgTxt += "assets/Image/Apple/60.png";
        break;
        case 61 : imgTxt += "assets/Image/Apple/61.png";
        break;
        case 62 : imgTxt += "assets/Image/Apple/62.png";
        break;
        case 63 : imgTxt += "assets/Image/Apple/63.png";
        break;
        case 64 : imgTxt += "assets/Image/Apple/64.png";
        break;
        case 65 : imgTxt += "assets/Image/Apple/65.png";
        break;

        case 66 : imgTxt += "assets/Image/Apple/66.png";
        break;
        case 67 : imgTxt += "assets/Image/Apple/67.png";
        break;
        case 68 : imgTxt += "assets/Image/Apple/68.png";
        break;
        case 69 : imgTxt += "assets/Image/Apple/69.png";
        break;
        case 70 : imgTxt += "assets/Image/Apple/70.png";
        break;
        case 71 : imgTxt += "assets/Image/Apple/71.png";
        break;
        case 72 : imgTxt += "assets/Image/Apple/72.png";
        break;
       
        default : console.log("Cas non pris en compte")
    }
    return imgTxt
}
else{
    switch(valeur){
        case 1 : imgTxt += "assets/Image/Apple/773.png";
        break;
        case 2 : imgTxt += "assets/Image/Apple/774.png";
        break;
        case 3 : imgTxt += "assets/Image/Apple/775.png";
        break;
        case 4 : imgTxt += "assets/Image/Apple/776.png";
        break;
        case 5 : imgTxt += "assets/Image/Apple/777.png";
        break;
        case 6 : imgTxt += "assets/Image/Apple/778.png";
        break;
        case 7 : imgTxt += "assets/Image/Apple/785.png";
        break;
        case 8 : imgTxt += "assets/Image/Apple/799.png";
        break;

        case 9 : imgTxt += "assets/Image/Apple/800.png";
        break;
        case 10 : imgTxt += "assets/Image/Apple/839.png";
        break;
        case 11 : imgTxt += "assets/Image/Apple/873.png";
        break;
        case 12 : imgTxt += "assets/Image/Apple/879.png";
        break;
        case 13 : imgTxt += "assets/Image/Apple/880.png";
        break;
        case 14 : imgTxt += "assets/Image/Apple/881.png";
        break;
        case 15 : imgTxt += "assets/Image/Apple/893.png";
        break;
        case 16 : imgTxt += "assets/Image/Apple/890.png";
        break;

        case 17 : imgTxt += "assets/Image/Apple/901.png";
        break;
        case 18 : imgTxt += "assets/Image/Apple/907.png";
        break;
        case 19 : imgTxt += "assets/Image/Apple/912.png";
        break;
        case 20 : imgTxt += "assets/Image/Apple/913.png";
        break;
        case 21 : imgTxt += "assets/Image/Apple/914.png";
        break;
        case 22 : imgTxt += "assets/Image/Apple/917.png";
        break;
        case 23 : imgTxt += "assets/Image/Apple/919.png";
        break;
        case 24 : imgTxt += "assets/Image/Apple/1003.png";
        break;

        case 25 : imgTxt += "assets/Image/Apple/1011.png";
        break;
        case 26 : imgTxt += "assets/Image/Apple/1015.png";
        break;
        case 27 : imgTxt += "assets/Image/Apple/1016.png";
        break;
        case 28 : imgTxt += "assets/Image/Apple/1021.png";
        break;
        case 29 : imgTxt += "assets/Image/Apple/1022.png";
        break;
        case 30 : imgTxt += "assets/Image/Apple/1026.png";
        break;
        case 31 : imgTxt += "assets/Image/Apple/1050.png";
        break;
        case 32 : imgTxt += "assets/Image/Apple/1055.png";
        break;

        case 33 : imgTxt += "assets/Image/Apple/1051.png";
        break;
        case 34 : imgTxt += "assets/Image/Apple/1052.png";
        break;
        case 35 : imgTxt += "assets/Image/Apple/1056.png";
        break;
        case 36 : imgTxt += "assets/Image/Apple/1071.png";
        break;
        case 37 : imgTxt += "assets/Image/Apple/1072.png";
        break;
        case 38 : imgTxt += "assets/Image/Apple/1076.png";
        break;
        case 39 : imgTxt += "assets/Image/Apple/1078.png";
        break;
        case 40 : imgTxt += "assets/Image/Apple/1112.png";
        break;
        case 41 : imgTxt += "assets/Image/Apple/1121.png";
        break;

        case 42 : imgTxt += "assets/Image/Apple/1130.png";
        break;
        case 43 : imgTxt += "assets/Image/Apple/1135.png";
        break;
        case 44 : imgTxt += "assets/Image/Apple/1138.png";
        break;
        case 45 : imgTxt += "assets/Image/Apple/1139.png";
        break;
        case 46 : imgTxt += "assets/Image/Apple/1141.png";
        break;
        case 47 : imgTxt += "assets/Image/Apple/1143.png";
        break;
        case 48 : imgTxt += "assets/Image/Apple/1145.png";
        break;
        case 49 : imgTxt += "assets/Image/Apple/1146.png";
        break;

        case 50 : imgTxt += "assets/Image/Apple/1152.png";
        break;
        case 51 : imgTxt += "assets/Image/Apple/1150.png";
        break;
        case 52 : imgTxt += "assets/Image/Apple/1153.png";
        break;
        case 53 : imgTxt += "assets/Image/Apple/1164.png";
        break;
        case 54 : imgTxt += "assets/Image/Apple/1169.png";
        break;
        case 55 : imgTxt += "assets/Image/Apple/1172.png";
        break;
        case 56 : imgTxt += "assets/Image/Apple/1181.png";
        break;
        case 57 : imgTxt += "assets/Image/Apple/1180.png";
        break;

        case 58 : imgTxt += "assets/Image/Apple/1183.png";
        break;
        case 59 : imgTxt += "assets/Image/Apple/1185.png";
        break;
        case 60 : imgTxt += "assets/Image/Apple/1187.png";
        break;
        case 61 : imgTxt += "assets/Image/Apple/1202.png";
        break;
        case 62 : imgTxt += "assets/Image/Apple/1203.png";
        break;
        case 63 : imgTxt += "assets/Image/Apple/1212.png";
        break;
        case 64 : imgTxt += "assets/Image/Apple/1219.png";
        break;
        case 65 : imgTxt += "assets/Image/Apple/1225.png";
        break;

        case 66 : imgTxt += "assets/Image/Apple/1245.png";
        break;
        case 67 : imgTxt += "assets/Image/Apple/1247.png";
        break;
        case 68 : imgTxt += "assets/Image/Apple/1251.png";
        break;
        case 69 : imgTxt += "assets/Image/Apple/1254.png";
        break;
        case 70 : imgTxt += "assets/Image/Apple/1259.png";
        break;
        case 71 : imgTxt += "assets/Image/Apple/1267.png";
        break;
        case 72 : imgTxt += "assets/Image/Apple/1293.png";
        break;
        
        default : console.log("Cas non pris en compte")
    }
    return imgTxt
}
}



function verifExtreme(bouton){

    if(ready){

        nbAffiche++;
        var ligne = bouton.substr(0,1);
        var colonne = bouton.substr(2, 1);
        console.log(ligne);
        console.log(colonne);
        
        tabJeuExtreme[ligne][colonne] = tabResultatExtreme[ligne][colonne];
        afficherTableauExtreme();

        if(nbAffiche>1) {

            ready = false;
            setTimeout(() => {
                //Verification entre les 2 img ici
                if (tabJeuExtreme[ligne][colonne] !== tabResultatExtreme[oldSelection[0]][oldSelection[1]]) {
                    tabJeuExtreme[ligne][colonne] = 0;
                    tabJeuExtreme[oldSelection[0]][oldSelection[1]] = 0;
                }
                else{
                    veriffin=veriffin+1
                    if(veriffin==72){
                        gagne()
                        popUpReplay.style.zIndex = '5';
                        bravo.style.opacity = '1';
                        img_bravo.style.opacity = '1';
                    }
                }
                afficherTableauExtreme();
                ready = true;
                nbAffiche = 0;
                oldSelection = [ligne, colonne];

            },2000)

        } else {
            oldSelection = [ligne, colonne];
        }

    }

}




function genereTableauAleatoireExtreme(){
    var tab = [];
    var nbImagePosition=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for(var i = 0 ; i < 12 ; i++){
        var ligne = [];
        for (var j = 0 ; j < 12 ; j++){
            var fin = false;
            while(!fin){
                console.log(nbImagePosition[randomImage])
                var randomImage = Math.floor(Math.random() * 72);
                if (nbImagePosition[randomImage] < 2){
                    ligne.push(randomImage+1);
                    nbImagePosition[randomImage]++;
                    fin = true;
                }
            }
        }
        tab.push(ligne);
    }
    return tab;
}


/* ------------------------------------------------------------------------------------------------------------------------- */
/* CATEGORIE Impossible */


var tabResultatImpossible = genereTableauAleatoireImpossible();

function afficherTableauImpossible(){
    if (niveauChoisi=="Impossible"){
        var txt=""

        for(var i = 0; i < tabJeuImpossible.length; i++){
            txt += "</div>";
            for(var j=0; j < tabJeuImpossible[i].length ; j++){
                if (tabJeuImpossible[i][j] === 0){
                txt += "<button id='carretabID01Impossible'class='carretabImpossible' onClick = 'verifImpossible(\""+i+"-"+j+"\")' ></button>";
            } else {
                txt += "<button id='carretabIDImpossible' class='imagejeuImpossible' style='background-image:url("+getImageImpossible(tabJeuImpossible[i][j])+")'>";
            }
            
        }
        txt += "</div>";
        
    }
        
        divResultat.innerHTML = txt;
    }
}




function getImageImpossible(valeur){
    var imgTxt = "";
    if(themeChoisi=="Nourriture"){
    switch(valeur){
        case 1 : imgTxt += "assets/Image/Apple/649.png";
        break;
        case 2 : imgTxt += "assets/Image/Apple/650.png";
        break;
        case 3 : imgTxt += "assets/Image/Apple/651.png";
        break;
        case 4 : imgTxt += "assets/Image/Apple/652.png";
        break;
        case 5 : imgTxt += "assets/Image/Apple/653.png";
        break;
        case 6 : imgTxt += "assets/Image/Apple/654.png";
        break;
        case 7 : imgTxt += "assets/Image/Apple/655.png";
        break;
        case 8 : imgTxt += "assets/Image/Apple/656.png";
        break;

        case 9 : imgTxt += "assets/Image/Apple/657.png";
        break;
        case 10 : imgTxt += "assets/Image/Apple/658.png";
        break;
        case 11 : imgTxt += "assets/Image/Apple/659.png";
        break;
        case 12 : imgTxt += "assets/Image/Apple/660.png";
        break;
        case 13 : imgTxt += "assets/Image/Apple/661.png";
        break;
        case 14 : imgTxt += "assets/Image/Apple/662.png";
        break;
        case 15 : imgTxt += "assets/Image/Apple/663.png";
        break;
        case 16 : imgTxt += "assets/Image/Apple/664.png";
        break;

        case 17 : imgTxt += "assets/Image/Apple/665.png";
        break;
        case 18 : imgTxt += "assets/Image/Apple/666.png";
        break;
        case 19 : imgTxt += "assets/Image/Apple/667.png";
        break;
        case 20 : imgTxt += "assets/Image/Apple/668.png";
        break;
        case 21 : imgTxt += "assets/Image/Apple/669.png";
        break;
        case 22 : imgTxt += "assets/Image/Apple/670.png";
        break;
        case 23 : imgTxt += "assets/Image/Apple/671.png";
        break;
        case 24 : imgTxt += "assets/Image/Apple/672.png";
        break;

        case 25 : imgTxt += "assets/Image/Apple/673.png";
        break;
        case 26 : imgTxt += "assets/Image/Apple/674.png";
        break;
        case 27 : imgTxt += "assets/Image/Apple/675.png";
        break;
        case 28 : imgTxt += "assets/Image/Apple/676.png";
        break;
        case 29 : imgTxt += "assets/Image/Apple/677.png";
        break;
        case 30 : imgTxt += "assets/Image/Apple/678.png";
        break;
        case 31 : imgTxt += "assets/Image/Apple/679.png";
        break;
        case 32 : imgTxt += "assets/Image/Apple/680.png";
        break;

        case 33 : imgTxt += "assets/Image/Apple/681.png";
        break;
        case 34 : imgTxt += "assets/Image/Apple/682.png";
        break;
        case 35 : imgTxt += "assets/Image/Apple/683.png";
        break;
        case 36 : imgTxt += "assets/Image/Apple/684.png";
        break;
        case 37 : imgTxt += "assets/Image/Apple/685.png";
        break;
        case 38 : imgTxt += "assets/Image/Apple/686.png";
        break;
        case 39 : imgTxt += "assets/Image/Apple/687.png";
        break;
        case 40 : imgTxt += "assets/Image/Apple/688.png";
        break;
        case 41 : imgTxt += "assets/Image/Apple/689.png";
        break;

        case 42 : imgTxt += "assets/Image/Apple/690.png";
        break;
        case 43 : imgTxt += "assets/Image/Apple/691.png";
        break;
        case 44 : imgTxt += "assets/Image/Apple/692.png";
        break;
        case 45 : imgTxt += "assets/Image/Apple/693.png";
        break;
        case 46 : imgTxt += "assets/Image/Apple/694.png";
        break;
        case 47 : imgTxt += "assets/Image/Apple/695.png";
        break;
        case 48 : imgTxt += "assets/Image/Apple/696.png";
        break;
        case 49 : imgTxt += "assets/Image/Apple/697.png";
        break;

        case 50 : imgTxt += "assets/Image/Apple/698.png";
        break;
        case 51 : imgTxt += "assets/Image/Apple/699.png";
        break;
        case 52 : imgTxt += "assets/Image/Apple/700.png";
        break;
        case 53 : imgTxt += "assets/Image/Apple/701.png";
        break;
        case 54 : imgTxt += "assets/Image/Apple/702.png";
        break;
        case 55 : imgTxt += "assets/Image/Apple/703.png";
        break;
        case 56 : imgTxt += "assets/Image/Apple/704.png";
        break;
        case 57 : imgTxt += "assets/Image/Apple/705.png";
        break;

        case 58 : imgTxt += "assets/Image/Apple/706.png";
        break;
        case 59 : imgTxt += "assets/Image/Apple/707.png";
        break;
        case 60 : imgTxt += "assets/Image/Apple/708.png";
        break;
        case 61 : imgTxt += "assets/Image/Apple/709.png";
        break;
        case 62 : imgTxt += "assets/Image/Apple/710.png";
        break;
        case 63 : imgTxt += "assets/Image/Apple/711.png";
        break;
        case 64 : imgTxt += "assets/Image/Apple/712.png";
        break;
        case 65 : imgTxt += "assets/Image/Apple/713.png";
        break;

        case 66 : imgTxt += "assets/Image/Apple/714.png";
        break;
        case 67 : imgTxt += "assets/Image/Apple/715.png";
        break;
        case 68 : imgTxt += "assets/Image/Apple/716.png";
        break;
        case 69 : imgTxt += "assets/Image/Apple/717.png";
        break;
        case 70 : imgTxt += "assets/Image/Apple/718.png";
        break;
        case 71 : imgTxt += "assets/Image/Apple/719.png";
        break;
        case 72 : imgTxt += "assets/Image/Apple/720.png";
        break;

        case 73 : imgTxt += "assets/Image/Apple/721.png";
        break;
        case 74 : imgTxt += "assets/Image/Apple/722.png";
        break;
        case 75 : imgTxt += "assets/Image/Apple/723.png";
        break;
        case 76 : imgTxt += "assets/Image/Apple/724.png";
        break;
        case 77 : imgTxt += "assets/Image/Apple/725.png";
        break;
        case 78 : imgTxt += "assets/Image/Apple/726.png";
        break;
        case 79 : imgTxt += "assets/Image/Apple/727.png";
        break;
        case 80 : imgTxt += "assets/Image/Apple/728.png";
        break;

        case 81 : imgTxt += "assets/Image/Apple/729.png";
        break;
        case 82 : imgTxt += "assets/Image/Apple/730.png";
        break;
        case 83 : imgTxt += "assets/Image/Apple/731.png";
        break;
        case 84 : imgTxt += "assets/Image/Apple/732.png";
        break;
        case 85 : imgTxt += "assets/Image/Apple/733.png";
        break;
        case 86 : imgTxt += "assets/Image/Apple/734.png";
        break;
        case 87 : imgTxt += "assets/Image/Apple/735.png";
        break;
        case 88 : imgTxt += "assets/Image/Apple/736.png";
        break;

        case 89 : imgTxt += "assets/Image/Apple/737.png";
        break;
        case 90 : imgTxt += "assets/Image/Apple/738.png";
        break;
        case 91 : imgTxt += "assets/Image/Apple/739.png";
        break;
        case 92 : imgTxt += "assets/Image/Apple/740.png";
        break;
        case 93 : imgTxt += "assets/Image/Apple/741.png";
        break;
        case 94 : imgTxt += "assets/Image/Apple/742.png";
        break;
        case 95 : imgTxt += "assets/Image/Apple/743.png";
        break;
        case 96 : imgTxt += "assets/Image/Apple/744.png";
        break;

        case 97 : imgTxt += "assets/Image/Apple/745.png";
        break;
        case 98 : imgTxt += "assets/Image/Apple/746.png";
        break;
        case 99 : imgTxt += "assets/Image/Apple/747.png";
        break;
        case 100 : imgTxt += "assets/Image/Apple/748.png";
        break;
        case 101 : imgTxt += "assets/Image/Apple/749.png";
        break;
        case 102 : imgTxt += "assets/Image/Apple/750.png";
        break;
        case 103 : imgTxt += "assets/Image/Apple/751.png";
        break;
        case 104 : imgTxt += "assets/Image/Apple/752.png";
        break;

        case 105 : imgTxt += "assets/Image/Apple/753.png";
        break;
        case 106 : imgTxt += "assets/Image/Apple/754.png";
        break;
        case 107 : imgTxt += "assets/Image/Apple/755.png";
        break;
        case 108 : imgTxt += "assets/Image/Apple/756.png";
        break;
        case 109 : imgTxt += "assets/Image/Apple/757.png";
        break;
        case 110 : imgTxt += "assets/Image/Apple/758.png";
        break;
        case 111 : imgTxt += "assets/Image/Apple/759.png";
        break;
        case 112 : imgTxt += "assets/Image/Apple/760.png";
        break;
        case 113 : imgTxt += "assets/Image/Apple/761.png";
        break;

        case 114 : imgTxt += "assets/Image/Apple/762.png";
        break;
        case 115 : imgTxt += "assets/Image/Apple/763.png";
        break;
        case 116 : imgTxt += "assets/Image/Apple/764.png";
        break;
        case 117 : imgTxt += "assets/Image/Apple/765.png";
        break;
        case 118 : imgTxt += "assets/Image/Apple/766.png";
        break;
        case 119 : imgTxt += "assets/Image/Apple/767.png";
        break;
        case 120 : imgTxt += "assets/Image/Apple/768.png";
        break;
        case 121 : imgTxt += "assets/Image/Apple/769.png";
        break;

        case 122 : imgTxt += "assets/Image/Apple/770.png";
        break;
        case 123 : imgTxt += "assets/Image/Apple/771.png";
        break;
        case 124 : imgTxt += "assets/Image/Apple/772.png";
        break;
        case 125 : imgTxt += "assets/Image/Apple/644.png";
        break;
        case 126 : imgTxt += "assets/Image/Apple/645.png";
        break;
        case 127 : imgTxt += "assets/Image/Apple/646.png";
        break;
        case 128 : imgTxt += "assets/Image/Apple/647.png";
        break;
        case 129 : imgTxt += "assets/Image/Apple/648.png";
        break;

        case 130 : imgTxt += "assets/Image/Apple/650.png";
        break;
        case 131 : imgTxt += "assets/Image/Apple/651.png";
        break;
        case 132 : imgTxt += "assets/Image/Apple/652.png";
        break;
        case 133 : imgTxt += "assets/Image/Apple/653.png";
        break;
        case 134 : imgTxt += "assets/Image/Apple/654.png";
        break;
        case 135 : imgTxt += "assets/Image/Apple/655.png";
        break;
        case 136 : imgTxt += "assets/Image/Apple/656.png";
        break;
        case 137 : imgTxt += "assets/Image/Apple/657.png";
        break;

        case 138 : imgTxt += "assets/Image/Apple/658.png";
        break;
        case 139 : imgTxt += "assets/Image/Apple/659.png";
        break;
        case 140 : imgTxt += "assets/Image/Apple/660.png";
        break;
        case 141 : imgTxt += "assets/Image/Apple/661.png";
        break;
        case 142 : imgTxt += "assets/Image/Apple/662.png";
        break;
        case 143 : imgTxt += "assets/Image/Apple/663.png";
        break;
        case 144 : imgTxt += "assets/Image/Apple/664.png";
        break;

        case 145 : imgTxt += "assets/Image/Apple/665.png";
        break;
        case 146 : imgTxt += "assets/Image/Apple/699.png";
        break;
        case 147 : imgTxt += "assets/Image/Apple/693.png";
        break;
        case 148 : imgTxt += "assets/Image/Apple/743.png";
        break;
        case 149 : imgTxt += "assets/Image/Apple/698.png";
        break;
        case 150 : imgTxt += "assets/Image/Apple/681.png";
        break;
        case 151 : imgTxt += "assets/Image/Apple/662.png";
        break;
        case 152 : imgTxt += "assets/Image/Apple/668.png";
        break;

        case 153 : imgTxt += "assets/Image/Apple/663.png";
        break;
        case 154 : imgTxt += "assets/Image/Apple/664.png";
        break;
        case 155 : imgTxt += "assets/Image/Apple/665.png";
        break;
        case 156 : imgTxt += "assets/Image/Apple/671.png";
        break;
        case 157 : imgTxt += "assets/Image/Apple/661.png";
        break;
        case 158 : imgTxt += "assets/Image/Apple/650.png";
        break;
        case 159 : imgTxt += "assets/Image/Apple/658.png";
        break;
        case 160 : imgTxt += "assets/Image/Apple/655.png";
        break;

        case 161 : imgTxt += "assets/Image/Apple/686.png";
        break;
        case 162 : imgTxt += "assets/Image/Apple/685.png";
        break;
        case 163 : imgTxt += "assets/Image/Apple/688.png";
        break;
        case 164 : imgTxt += "assets/Image/Apple/690.png";
        break;
        case 165 : imgTxt += "assets/Image/Apple/694.png";
        break;
        case 166 : imgTxt += "assets/Image/Apple/692.png";
        break;
        case 167 : imgTxt += "assets/Image/Apple/691.png";
        break;
        case 168 : imgTxt += "assets/Image/Apple/700.png";
        break;

        case 169 : imgTxt += "assets/Image/Apple/701.png";
        break;
        case 170 : imgTxt += "assets/Image/Apple/702.png";
        break;
        case 171 : imgTxt += "assets/Image/Apple/703.png";
        break;
        case 172 : imgTxt += "assets/Image/Apple/704.png";
        break;
        case 173 : imgTxt += "assets/Image/Apple/708.png";
        break;
        case 174 : imgTxt += "assets/Image/Apple/713.png";
        break;
        case 175 : imgTxt += "assets/Image/Apple/714.png";
        break;
        case 176 : imgTxt += "assets/Image/Apple/716.png";
        break;

        case 177 : imgTxt += "assets/Image/Apple/721.png";
        break;
        case 178 : imgTxt += "assets/Image/Apple/722.png";
        break;
        case 179 : imgTxt += "assets/Image/Apple/728.png";
        break;
        case 180 : imgTxt += "assets/Image/Apple/731.png";
        break;
        case 181 : imgTxt += "assets/Image/Apple/729.png";
        break;
        case 182 : imgTxt += "assets/Image/Apple/718.png";
        break;
        case 183 : imgTxt += "assets/Image/Apple/727.png";
        break;
        case 184 : imgTxt += "assets/Image/Apple/719.png";
        break;
        case 185 : imgTxt += "assets/Image/Apple/720.png";
        break;

        case 186 : imgTxt += "assets/Image/Apple/733.png";
        break;
        case 187 : imgTxt += "assets/Image/Apple/734.png";
        break;
        case 188 : imgTxt += "assets/Image/Apple/735.png";
        break;
        case 189 : imgTxt += "assets/Image/Apple/736.png";
        break;
        case 190 : imgTxt += "assets/Image/Apple/737.png";
        break;
        case 191 : imgTxt += "assets/Image/Apple/738.png";
        break;
        case 192 : imgTxt += "assets/Image/Apple/739.png";
        break;
        case 193 : imgTxt += "assets/Image/Apple/740.png";
        break;

        case 194 : imgTxt += "assets/Image/Apple/745.png";
        break;
        case 195 : imgTxt += "assets/Image/Apple/746.png";
        break;
        case 196 : imgTxt += "assets/Image/Apple/747.png";
        break;
        case 197 : imgTxt += "assets/Image/Apple/748.png";
        break;
        case 198 : imgTxt += "assets/Image/Apple/749.png";
        break;
        case 199 : imgTxt += "assets/Image/Apple/750.png";
        break;
        case 200 : imgTxt += "assets/Image/Apple/751.png";
        break;
        


        
    
        default : console.log("Cas non pris en compte")
    }
    return imgTxt
}
else if(themeChoisi=="Smiley"){
    switch(valeur){
        case 1 : imgTxt += "assets/Image/Apple/2.png";
        break;
        case 2 : imgTxt += "assets/Image/Apple/3.png";
        break;
        case 3 : imgTxt += "assets/Image/Apple/4.png";
        break;
        case 4 : imgTxt += "assets/Image/Apple/5.png";
        break;
        case 5 : imgTxt += "assets/Image/Apple/6.png";
        break;
        case 6 : imgTxt += "assets/Image/Apple/7.png";
        break;
        case 7 : imgTxt += "assets/Image/Apple/8.png";
        break;
        case 8 : imgTxt += "assets/Image/Apple/9.png";
        break;

        case 9 : imgTxt += "assets/Image/Apple/10.png";
        break;
        case 10 : imgTxt += "assets/Image/Apple/11.png";
        break;
        case 11 : imgTxt += "assets/Image/Apple/12.png";
        break;
        case 12 : imgTxt += "assets/Image/Apple/13.png";
        break;
        case 13 : imgTxt += "assets/Image/Apple/14.png";
        break;
        case 14 : imgTxt += "assets/Image/Apple/15.png";
        break;
        case 15 : imgTxt += "assets/Image/Apple/16.png";
        break;
        case 16 : imgTxt += "assets/Image/Apple/17.png";
        break;

        case 17 : imgTxt += "assets/Image/Apple/18.png";
        break;
        case 18 : imgTxt += "assets/Image/Apple/19.png";
        break;
        case 19 : imgTxt += "assets/Image/Apple/20.png";
        break;
        case 20 : imgTxt += "assets/Image/Apple/21.png";
        break;
        case 21 : imgTxt += "assets/Image/Apple/22.png";
        break;
        case 22 : imgTxt += "assets/Image/Apple/23.png";
        break;
        case 23 : imgTxt += "assets/Image/Apple/24.png";
        break;
        case 24 : imgTxt += "assets/Image/Apple/25.png";
        break;

        case 25 : imgTxt += "assets/Image/Apple/26.png";
        break;
        case 26 : imgTxt += "assets/Image/Apple/27.png";
        break;
        case 27 : imgTxt += "assets/Image/Apple/28.png";
        break;
        case 28 : imgTxt += "assets/Image/Apple/29.png";
        break;
        case 29 : imgTxt += "assets/Image/Apple/30.png";
        break;
        case 30 : imgTxt += "assets/Image/Apple/31.png";
        break;
        case 31 : imgTxt += "assets/Image/Apple/32.png";
        break;
        case 32 : imgTxt += "assets/Image/Apple/33.png";
        break;

        case 33 : imgTxt += "assets/Image/Apple/1.png";
        break;
        case 34 : imgTxt += "assets/Image/Apple/34.png";
        break;
        case 35 : imgTxt += "assets/Image/Apple/35.png";
        break;
        case 36 : imgTxt += "assets/Image/Apple/36.png";
        break;
        case 37 : imgTxt += "assets/Image/Apple/37.png";
        break;
        case 38 : imgTxt += "assets/Image/Apple/38.png";
        break;
        case 39 : imgTxt += "assets/Image/Apple/39.png";
        break;
        case 40 : imgTxt += "assets/Image/Apple/40.png";
        break;
        case 41 : imgTxt += "assets/Image/Apple/41.png";
        break;

        case 42 : imgTxt += "assets/Image/Apple/42.png";
        break;
        case 43 : imgTxt += "assets/Image/Apple/43.png";
        break;
        case 44 : imgTxt += "assets/Image/Apple/44.png";
        break;
        case 45 : imgTxt += "assets/Image/Apple/45.png";
        break;
        case 46 : imgTxt += "assets/Image/Apple/46.png";
        break;
        case 47 : imgTxt += "assets/Image/Apple/47.png";
        break;
        case 48 : imgTxt += "assets/Image/Apple/48.png";
        break;
        case 49 : imgTxt += "assets/Image/Apple/49.png";
        break;

        case 50 : imgTxt += "assets/Image/Apple/50.png";
        break;
        case 51 : imgTxt += "assets/Image/Apple/51.png";
        break;
        case 52 : imgTxt += "assets/Image/Apple/52.png";
        break;
        case 53 : imgTxt += "assets/Image/Apple/53.png";
        break;
        case 54 : imgTxt += "assets/Image/Apple/54.png";
        break;
        case 55 : imgTxt += "assets/Image/Apple/55.png";
        break;
        case 56 : imgTxt += "assets/Image/Apple/56.png";
        break;
        case 57 : imgTxt += "assets/Image/Apple/57.png";
        break;

        case 58 : imgTxt += "assets/Image/Apple/58.png";
        break;
        case 59 : imgTxt += "assets/Image/Apple/59.png";
        break;
        case 60 : imgTxt += "assets/Image/Apple/60.png";
        break;
        case 61 : imgTxt += "assets/Image/Apple/61.png";
        break;
        case 62 : imgTxt += "assets/Image/Apple/62.png";
        break;
        case 63 : imgTxt += "assets/Image/Apple/63.png";
        break;
        case 64 : imgTxt += "assets/Image/Apple/64.png";
        break;
        case 65 : imgTxt += "assets/Image/Apple/65.png";
        break;

        case 66 : imgTxt += "assets/Image/Apple/66.png";
        break;
        case 67 : imgTxt += "assets/Image/Apple/67.png";
        break;
        case 68 : imgTxt += "assets/Image/Apple/68.png";
        break;
        case 69 : imgTxt += "assets/Image/Apple/69.png";
        break;
        case 70 : imgTxt += "assets/Image/Apple/70.png";
        break;
        case 71 : imgTxt += "assets/Image/Apple/71.png";
        break;
        case 72 : imgTxt += "assets/Image/Apple/72.png";
        break;

        case 73 : imgTxt += "assets/Image/Apple/73.png";
        break;
        case 74 : imgTxt += "assets/Image/Apple/74.png";
        break;
        case 75 : imgTxt += "assets/Image/Apple/75.png";
        break;
        case 76 : imgTxt += "assets/Image/Apple/76.png";
        break;
        case 77 : imgTxt += "assets/Image/Apple/77.png";
        break;
        case 78 : imgTxt += "assets/Image/Apple/78.png";
        break;
        case 79 : imgTxt += "assets/Image/Apple/79.png";
        break;
        case 80 : imgTxt += "assets/Image/Apple/80.png";
        break;

        case 81 : imgTxt += "assets/Image/Apple/81.png";
        break;
        case 82 : imgTxt += "assets/Image/Apple/82.png";
        break;
        case 83 : imgTxt += "assets/Image/Apple/83.png";
        break;
        case 84 : imgTxt += "assets/Image/Apple/84.png";
        break;
        case 85 : imgTxt += "assets/Image/Apple/85.png";
        break;
        case 86 : imgTxt += "assets/Image/Apple/86.png";
        break;
        case 87 : imgTxt += "assets/Image/Apple/87.png";
        break;
        case 88 : imgTxt += "assets/Image/Apple/88.png";
        break;

        case 89 : imgTxt += "assets/Image/Apple/89.png";
        break;
        case 90 : imgTxt += "assets/Image/Apple/90.png";
        break;
        case 91 : imgTxt += "assets/Image/Apple/91.png";
        break;
        case 92 : imgTxt += "assets/Image/Apple/92.png";
        break;
        case 93 : imgTxt += "assets/Image/Apple/93.png";
        break;
        case 94 : imgTxt += "assets/Image/Apple/94.png";
        break;
        case 95 : imgTxt += "assets/Image/Apple/95.png";
        break;
        case 96 : imgTxt += "assets/Image/Apple/96.png";
        break;

        case 97 : imgTxt += "assets/Image/Apple/97.png";
        break;
        case 98 : imgTxt += "assets/Image/Apple/98.png";
        break;
        case 99 : imgTxt += "assets/Image/Apple/99.png";
        break;
        case 100 : imgTxt += "assets/Image/Apple/100.png";
        break;
        case 101 : imgTxt += "assets/Image/Apple/101.png";
        break;
        case 102 : imgTxt += "assets/Image/Apple/102.png";
        break;
        case 103 : imgTxt += "assets/Image/Apple/103.png";
        break;
        case 104 : imgTxt += "assets/Image/Apple/104.png";
        break;

        case 105 : imgTxt += "assets/Image/Apple/105.png";
        break;
        case 106 : imgTxt += "assets/Image/Apple/106.png";
        break;
        case 107 : imgTxt += "assets/Image/Apple/107.png";
        break;
        case 108 : imgTxt += "assets/Image/Apple/108.png";
        break;
        case 109 : imgTxt += "assets/Image/Apple/109.png";
        break;
        case 110 : imgTxt += "assets/Image/Apple/110.png";
        break;
        case 111 : imgTxt += "assets/Image/Apple/111.png";
        break;
        case 112 : imgTxt += "assets/Image/Apple/112.png";
        break;
        case 113 : imgTxt += "assets/Image/Apple/113.png";
        break;

        case 114 : imgTxt += "assets/Image/Apple/114.png";
        break;
        case 115 : imgTxt += "assets/Image/Apple/115.png";
        break;
        case 116 : imgTxt += "assets/Image/Apple/116.png";
        break;
        case 117 : imgTxt += "assets/Image/Apple/117.png";
        break;
        case 118 : imgTxt += "assets/Image/Apple/118.png";
        break;
        case 119 : imgTxt += "assets/Image/Apple/119.png";
        break;
        case 120 : imgTxt += "assets/Image/Apple/208.png";
        break;
        case 121 : imgTxt += "assets/Image/Apple/209.png";
        break;

        case 122 : imgTxt += "assets/Image/Apple/210.png";
        break;
        case 123 : imgTxt += "assets/Image/Apple/211.png";
        break;
        case 124 : imgTxt += "assets/Image/Apple/212.png";
        break;
        case 125 : imgTxt += "assets/Image/Apple/213.png";
        break;
        case 126 : imgTxt += "assets/Image/Apple/214.png";
        break;
        case 127 : imgTxt += "assets/Image/Apple/215.png";
        break;
        case 128 : imgTxt += "assets/Image/Apple/216.png";
        break;
        case 129 : imgTxt += "assets/Image/Apple/217.png";
        break;

        case 130 : imgTxt += "assets/Image/Apple/218.png";
        break;
        case 131 : imgTxt += "assets/Image/Apple/219.png";
        break;
        case 132 : imgTxt += "assets/Image/Apple/220.png";
        break;
        case 133 : imgTxt += "assets/Image/Apple/221.png";
        break;
        case 134 : imgTxt += "assets/Image/Apple/222.png";
        break;
        case 135 : imgTxt += "assets/Image/Apple/223.png";
        break;
        case 136 : imgTxt += "assets/Image/Apple/224.png";
        break;
        case 137 : imgTxt += "assets/Image/Apple/225.png";
        break;

        case 138 : imgTxt += "assets/Image/Apple/226.png";
        break;
        case 139 : imgTxt += "assets/Image/Apple/227.png";
        break;
        case 140 : imgTxt += "assets/Image/Apple/228.png";
        break;
        case 141 : imgTxt += "assets/Image/Apple/229.png";
        break;
        case 142 : imgTxt += "assets/Image/Apple/230.png";
        break;
        case 143 : imgTxt += "assets/Image/Apple/231.png";
        break;
        case 144 : imgTxt += "assets/Image/Apple/232.png";
        break;

        case 145 : imgTxt += "assets/Image/Apple/233.png";
        break;
        case 146 : imgTxt += "assets/Image/Apple/234.png";
        break;
        case 147 : imgTxt += "assets/Image/Apple/235.png";
        break;
        case 148 : imgTxt += "assets/Image/Apple/236.png";
        break;
        case 149 : imgTxt += "assets/Image/Apple/237.png";
        break;
        case 150 : imgTxt += "assets/Image/Apple/238.png";
        break;
        case 151 : imgTxt += "assets/Image/Apple/239.png";
        break;
        case 152 : imgTxt += "assets/Image/Apple/240.png";
        break;

        case 153 : imgTxt += "assets/Image/Apple/241.png";
        break;
        case 154 : imgTxt += "assets/Image/Apple/242.png";
        break;
        case 155 : imgTxt += "assets/Image/Apple/243.png";
        break;
        case 156 : imgTxt += "assets/Image/Apple/244.png";
        break;
        case 157 : imgTxt += "assets/Image/Apple/245.png";
        break;
        case 158 : imgTxt += "assets/Image/Apple/246.png";
        break;
        case 159 : imgTxt += "assets/Image/Apple/247.png";
        break;
        case 160 : imgTxt += "assets/Image/Apple/248.png";
        break;

        case 161 : imgTxt += "assets/Image/Apple/249.png";
        break;
        case 162 : imgTxt += "assets/Image/Apple/250.png";
        break;
        case 163 : imgTxt += "assets/Image/Apple/251.png";
        break;
        case 164 : imgTxt += "assets/Image/Apple/252.png";
        break;
        case 165 : imgTxt += "assets/Image/Apple/253.png";
        break;
        case 166 : imgTxt += "assets/Image/Apple/254.png";
        break;
        case 167 : imgTxt += "assets/Image/Apple/255.png";
        break;
        case 168 : imgTxt += "assets/Image/Apple/256.png";
        break;

        case 169 : imgTxt += "assets/Image/Apple/257.png";
        break;
        case 170 : imgTxt += "assets/Image/Apple/258.png";
        break;
        case 171 : imgTxt += "assets/Image/Apple/259.png";
        break;
        case 172 : imgTxt += "assets/Image/Apple/260.png";
        break;
        case 173 : imgTxt += "assets/Image/Apple/261.png";
        break;
        case 174 : imgTxt += "assets/Image/Apple/262.png";
        break;
        case 175 : imgTxt += "assets/Image/Apple/263.png";
        break;
        case 176 : imgTxt += "assets/Image/Apple/264.png";
        break;

        case 177 : imgTxt += "assets/Image/Apple/265.png";
        break;
        case 178 : imgTxt += "assets/Image/Apple/266.png";
        break;
        case 179 : imgTxt += "assets/Image/Apple/267.png";
        break;
        case 180 : imgTxt += "assets/Image/Apple/268.png";
        break;
        case 181 : imgTxt += "assets/Image/Apple/269.png";
        break;
        case 182 : imgTxt += "assets/Image/Apple/270.png";
        break;
        case 183 : imgTxt += "assets/Image/Apple/271.png";
        break;
        case 184 : imgTxt += "assets/Image/Apple/272.png";
        break;
        case 185 : imgTxt += "assets/Image/Apple/273.png";
        break;

        case 186 : imgTxt += "assets/Image/Apple/274.png";
        break;
        case 187 : imgTxt += "assets/Image/Apple/275.png";
        break;
        case 188 : imgTxt += "assets/Image/Apple/276.png";
        break;
        case 189 : imgTxt += "assets/Image/Apple/277.png";
        break;
        case 190 : imgTxt += "assets/Image/Apple/278.png";
        break;
        case 191 : imgTxt += "assets/Image/Apple/279.png";
        break;
        case 192 : imgTxt += "assets/Image/Apple/280.png";
        break;
        case 193 : imgTxt += "assets/Image/Apple/281.png";
        break;

        case 194 : imgTxt += "assets/Image/Apple/282.png";
        break;
        case 195 : imgTxt += "assets/Image/Apple/283.png";
        break;
        case 196 : imgTxt += "assets/Image/Apple/284.png";
        break;
        case 197 : imgTxt += "assets/Image/Apple/285.png";
        break;
        case 198 : imgTxt += "assets/Image/Apple/286.png";
        break;
        case 199 : imgTxt += "assets/Image/Apple/287.png";
        break;
        case 200 : imgTxt += "assets/Image/Apple/288.png";
        break;
        
 default : console.log("Cas non pris en compte")
    }
    return imgTxt
}
else{
    switch(valeur){
        case 1 : imgTxt += "assets/Image/Apple/773.png";
        break;
        case 2 : imgTxt += "assets/Image/Apple/774.png";
        break;
        case 3 : imgTxt += "assets/Image/Apple/775.png";
        break;
        case 4 : imgTxt += "assets/Image/Apple/776.png";
        break;
        case 5 : imgTxt += "assets/Image/Apple/777.png";
        break;
        case 6 : imgTxt += "assets/Image/Apple/778.png";
        break;
        case 7 : imgTxt += "assets/Image/Apple/785.png";
        break;
        case 8 : imgTxt += "assets/Image/Apple/799.png";
        break;

        case 9 : imgTxt += "assets/Image/Apple/800.png";
        break;
        case 10 : imgTxt += "assets/Image/Apple/839.png";
        break;
        case 11 : imgTxt += "assets/Image/Apple/873.png";
        break;
        case 12 : imgTxt += "assets/Image/Apple/879.png";
        break;
        case 13 : imgTxt += "assets/Image/Apple/880.png";
        break;
        case 14 : imgTxt += "assets/Image/Apple/881.png";
        break;
        case 15 : imgTxt += "assets/Image/Apple/893.png";
        break;
        case 16 : imgTxt += "assets/Image/Apple/890.png";
        break;

        case 17 : imgTxt += "assets/Image/Apple/901.png";
        break;
        case 18 : imgTxt += "assets/Image/Apple/907.png";
        break;
        case 19 : imgTxt += "assets/Image/Apple/912.png";
        break;
        case 20 : imgTxt += "assets/Image/Apple/913.png";
        break;
        case 21 : imgTxt += "assets/Image/Apple/914.png";
        break;
        case 22 : imgTxt += "assets/Image/Apple/917.png";
        break;
        case 23 : imgTxt += "assets/Image/Apple/919.png";
        break;
        case 24 : imgTxt += "assets/Image/Apple/1003.png";
        break;

        case 25 : imgTxt += "assets/Image/Apple/1011.png";
        break;
        case 26 : imgTxt += "assets/Image/Apple/1015.png";
        break;
        case 27 : imgTxt += "assets/Image/Apple/1016.png";
        break;
        case 28 : imgTxt += "assets/Image/Apple/1021.png";
        break;
        case 29 : imgTxt += "assets/Image/Apple/1022.png";
        break;
        case 30 : imgTxt += "assets/Image/Apple/1026.png";
        break;
        case 31 : imgTxt += "assets/Image/Apple/1050.png";
        break;
        case 32 : imgTxt += "assets/Image/Apple/1055.png";
        break;

        case 33 : imgTxt += "assets/Image/Apple/1051.png";
        break;
        case 34 : imgTxt += "assets/Image/Apple/1052.png";
        break;
        case 35 : imgTxt += "assets/Image/Apple/1056.png";
        break;
        case 36 : imgTxt += "assets/Image/Apple/1071.png";
        break;
        case 37 : imgTxt += "assets/Image/Apple/1072.png";
        break;
        case 38 : imgTxt += "assets/Image/Apple/1076.png";
        break;
        case 39 : imgTxt += "assets/Image/Apple/1078.png";
        break;
        case 40 : imgTxt += "assets/Image/Apple/1112.png";
        break;
        case 41 : imgTxt += "assets/Image/Apple/1121.png";
        break;

        case 42 : imgTxt += "assets/Image/Apple/1130.png";
        break;
        case 43 : imgTxt += "assets/Image/Apple/1135.png";
        break;
        case 44 : imgTxt += "assets/Image/Apple/1138.png";
        break;
        case 45 : imgTxt += "assets/Image/Apple/1139.png";
        break;
        case 46 : imgTxt += "assets/Image/Apple/1141.png";
        break;
        case 47 : imgTxt += "assets/Image/Apple/1143.png";
        break;
        case 48 : imgTxt += "assets/Image/Apple/1145.png";
        break;
        case 49 : imgTxt += "assets/Image/Apple/1146.png";
        break;

        case 50 : imgTxt += "assets/Image/Apple/1152.png";
        break;
        case 51 : imgTxt += "assets/Image/Apple/1150.png";
        break;
        case 52 : imgTxt += "assets/Image/Apple/1153.png";
        break;
        case 53 : imgTxt += "assets/Image/Apple/1164.png";
        break;
        case 54 : imgTxt += "assets/Image/Apple/1169.png";
        break;
        case 55 : imgTxt += "assets/Image/Apple/1172.png";
        break;
        case 56 : imgTxt += "assets/Image/Apple/1181.png";
        break;
        case 57 : imgTxt += "assets/Image/Apple/1180.png";
        break;

        case 58 : imgTxt += "assets/Image/Apple/1183.png";
        break;
        case 59 : imgTxt += "assets/Image/Apple/1185.png";
        break;
        case 60 : imgTxt += "assets/Image/Apple/1187.png";
        break;
        case 61 : imgTxt += "assets/Image/Apple/1202.png";
        break;
        case 62 : imgTxt += "assets/Image/Apple/1203.png";
        break;
        case 63 : imgTxt += "assets/Image/Apple/1212.png";
        break;
        case 64 : imgTxt += "assets/Image/Apple/1219.png";
        break;
        case 65 : imgTxt += "assets/Image/Apple/1225.png";
        break;

        case 66 : imgTxt += "assets/Image/Apple/1245.png";
        break;
        case 67 : imgTxt += "assets/Image/Apple/1247.png";
        break;
        case 68 : imgTxt += "assets/Image/Apple/1251.png";
        break;
        case 69 : imgTxt += "assets/Image/Apple/1254.png";
        break;
        case 70 : imgTxt += "assets/Image/Apple/1259.png";
        break;
        case 71 : imgTxt += "assets/Image/Apple/1267.png";
        break;
        case 72 : imgTxt += "assets/Image/Apple/1293.png";
        break;

        case 73 : imgTxt += "assets/Image/Apple/773.png";
        break;
        case 74 : imgTxt += "assets/Image/Apple/774.png";
        break;
        case 75 : imgTxt += "assets/Image/Apple/775.png";
        break;
        case 76 : imgTxt += "assets/Image/Apple/776.png";
        break;
        case 77 : imgTxt += "assets/Image/Apple/777.png";
        break;
        case 78 : imgTxt += "assets/Image/Apple/778.png";
        break;
        case 79 : imgTxt += "assets/Image/Apple/785.png";
        break;
        case 80 : imgTxt += "assets/Image/Apple/799.png";
        break;

        case 81 : imgTxt += "assets/Image/Apple/800.png";
        break;
        case 82 : imgTxt += "assets/Image/Apple/839.png";
        break;
        case 83 : imgTxt += "assets/Image/Apple/873.png";
        break;
        case 84 : imgTxt += "assets/Image/Apple/879.png";
        break;
        case 85 : imgTxt += "assets/Image/Apple/880.png";
        break;
        case 86 : imgTxt += "assets/Image/Apple/881.png";
        break;
        case 87 : imgTxt += "assets/Image/Apple/893.png";
        break;
        case 88 : imgTxt += "assets/Image/Apple/890.png";
        break;

        case 89 : imgTxt += "assets/Image/Apple/901.png";
        break;
        case 90 : imgTxt += "assets/Image/Apple/907.png";
        break;
        case 91 : imgTxt += "assets/Image/Apple/912.png";
        break;
        case 92 : imgTxt += "assets/Image/Apple/913.png";
        break;
        case 93 : imgTxt += "assets/Image/Apple/914.png";
        break;
        case 94 : imgTxt += "assets/Image/Apple/917.png";
        break;
        case 95 : imgTxt += "assets/Image/Apple/919.png";
        break;
        case 96 : imgTxt += "assets/Image/Apple/1003.png";
        break;

        case 97 : imgTxt += "assets/Image/Apple/1011.png";
        break;
        case 98 : imgTxt += "assets/Image/Apple/1015.png";
        break;
        case 99 : imgTxt += "assets/Image/Apple/1016.png";
        break;
        case 100 : imgTxt += "assets/Image/Apple/1021.png";
        break;
        case 101 : imgTxt += "assets/Image/Apple/1022.png";
        break;
        case 102 : imgTxt += "assets/Image/Apple/1026.png";
        break;
        case 103 : imgTxt += "assets/Image/Apple/1050.png";
        break;
        case 104 : imgTxt += "assets/Image/Apple/1055.png";
        break;

        case 105 : imgTxt += "assets/Image/Apple/1051.png";
        break;
        case 106 : imgTxt += "assets/Image/Apple/1052.png";
        break;
        case 107 : imgTxt += "assets/Image/Apple/1056.png";
        break;
        case 108 : imgTxt += "assets/Image/Apple/1071.png";
        break;
        case 109 : imgTxt += "assets/Image/Apple/1072.png";
        break;
        case 110 : imgTxt += "assets/Image/Apple/1076.png";
        break;
        case 111 : imgTxt += "assets/Image/Apple/1078.png";
        break;
        case 112 : imgTxt += "assets/Image/Apple/1112.png";
        break;
        case 113 : imgTxt += "assets/Image/Apple/1121.png";
        break;

        case 114 : imgTxt += "assets/Image/Apple/1130.png";
        break;
        case 115 : imgTxt += "assets/Image/Apple/1135.png";
        break;
        case 116 : imgTxt += "assets/Image/Apple/1138.png";
        break;
        case 117 : imgTxt += "assets/Image/Apple/1139.png";
        break;
        case 118 : imgTxt += "assets/Image/Apple/1141.png";
        break;
        case 119 : imgTxt += "assets/Image/Apple/1143.png";
        break;
        case 120 : imgTxt += "assets/Image/Apple/1145.png";
        break;
        case 121 : imgTxt += "assets/Image/Apple/1146.png";
        break;

        case 122 : imgTxt += "assets/Image/Apple/1152.png";
        break;
        case 123 : imgTxt += "assets/Image/Apple/1150.png";
        break;
        case 124 : imgTxt += "assets/Image/Apple/1153.png";
        break;
        case 125 : imgTxt += "assets/Image/Apple/1164.png";
        break;
        case 126 : imgTxt += "assets/Image/Apple/1169.png";
        break;
        case 127 : imgTxt += "assets/Image/Apple/1172.png";
        break;
        case 128 : imgTxt += "assets/Image/Apple/1181.png";
        break;
        case 129 : imgTxt += "assets/Image/Apple/1180.png";
        break;

        case 130 : imgTxt += "assets/Image/Apple/1183.png";
        break;
        case 131 : imgTxt += "assets/Image/Apple/1185.png";
        break;
        case 132 : imgTxt += "assets/Image/Apple/1187.png";
        break;
        case 133 : imgTxt += "assets/Image/Apple/1202.png";
        break;
        case 134 : imgTxt += "assets/Image/Apple/1203.png";
        break;
        case 135 : imgTxt += "assets/Image/Apple/1212.png";
        break;
        case 136 : imgTxt += "assets/Image/Apple/1219.png";
        break;
        case 137 : imgTxt += "assets/Image/Apple/1225.png";
        break;

        case 138 : imgTxt += "assets/Image/Apple/1245.png";
        break;
        case 139 : imgTxt += "assets/Image/Apple/1247.png";
        break;
        case 140 : imgTxt += "assets/Image/Apple/1251.png";
        break;
        case 141 : imgTxt += "assets/Image/Apple/1254.png";
        break;
        case 142 : imgTxt += "assets/Image/Apple/1259.png";
        break;
        case 143 : imgTxt += "assets/Image/Apple/1267.png";
        break;
        case 144 : imgTxt += "assets/Image/Apple/1293.png";
        break;

        case 145 : imgTxt += "assets/Image/Apple/773.png";
        break;
        case 146 : imgTxt += "assets/Image/Apple/774.png";
        break;
        case 147 : imgTxt += "assets/Image/Apple/775.png";
        break;
        case 148 : imgTxt += "assets/Image/Apple/776.png";
        break;
        case 149 : imgTxt += "assets/Image/Apple/777.png";
        break;
        case 150 : imgTxt += "assets/Image/Apple/778.png";
        break;
        case 151 : imgTxt += "assets/Image/Apple/785.png";
        break;
        case 152 : imgTxt += "assets/Image/Apple/799.png";
        break;

        case 153 : imgTxt += "assets/Image/Apple/800.png";
        break;
        case 154 : imgTxt += "assets/Image/Apple/839.png";
        break;
        case 155 : imgTxt += "assets/Image/Apple/873.png";
        break;
        case 156 : imgTxt += "assets/Image/Apple/879.png";
        break;
        case 157 : imgTxt += "assets/Image/Apple/880.png";
        break;
        case 158 : imgTxt += "assets/Image/Apple/881.png";
        break;
        case 159 : imgTxt += "assets/Image/Apple/893.png";
        break;
        case 160 : imgTxt += "assets/Image/Apple/890.png";
        break;

        case 161 : imgTxt += "assets/Image/Apple/901.png";
        break;
        case 162 : imgTxt += "assets/Image/Apple/907.png";
        break;
        case 163 : imgTxt += "assets/Image/Apple/912.png";
        break;
        case 164 : imgTxt += "assets/Image/Apple/913.png";
        break;
        case 165 : imgTxt += "assets/Image/Apple/914.png";
        break;
        case 166 : imgTxt += "assets/Image/Apple/917.png";
        break;
        case 167 : imgTxt += "assets/Image/Apple/919.png";
        break;
        case 168 : imgTxt += "assets/Image/Apple/1003.png";
        break;

        case 169 : imgTxt += "assets/Image/Apple/1011.png";
        break;
        case 170 : imgTxt += "assets/Image/Apple/1015.png";
        break;
        case 171 : imgTxt += "assets/Image/Apple/1016.png";
        break;
        case 172 : imgTxt += "assets/Image/Apple/1021.png";
        break;
        case 173 : imgTxt += "assets/Image/Apple/1022.png";
        break;
        case 174 : imgTxt += "assets/Image/Apple/1026.png";
        break;
        case 175 : imgTxt += "assets/Image/Apple/1050.png";
        break;
        case 176 : imgTxt += "assets/Image/Apple/1055.png";
        break;

        case 177 : imgTxt += "assets/Image/Apple/1051.png";
        break;
        case 178 : imgTxt += "assets/Image/Apple/1052.png";
        break;
        case 179 : imgTxt += "assets/Image/Apple/1056.png";
        break;
        case 180 : imgTxt += "assets/Image/Apple/1071.png";
        break;
        case 181 : imgTxt += "assets/Image/Apple/1072.png";
        break;
        case 182 : imgTxt += "assets/Image/Apple/1076.png";
        break;
        case 183 : imgTxt += "assets/Image/Apple/1078.png";
        break;
        case 184 : imgTxt += "assets/Image/Apple/1112.png";
        break;
        case 185 : imgTxt += "assets/Image/Apple/1121.png";
        break;

        case 186 : imgTxt += "assets/Image/Apple/1130.png";
        break;
        case 187 : imgTxt += "assets/Image/Apple/1135.png";
        break;
        case 188 : imgTxt += "assets/Image/Apple/1138.png";
        break;
        case 189 : imgTxt += "assets/Image/Apple/1139.png";
        break;
        case 190 : imgTxt += "assets/Image/Apple/1141.png";
        break;
        case 191 : imgTxt += "assets/Image/Apple/1143.png";
        break;
        case 192 : imgTxt += "assets/Image/Apple/1145.png";
        break;
        case 193 : imgTxt += "assets/Image/Apple/1146.png";
        break;

        case 194 : imgTxt += "assets/Image/Apple/1152.png";
        break;
        case 195 : imgTxt += "assets/Image/Apple/1150.png";
        break;
        case 196 : imgTxt += "assets/Image/Apple/1153.png";
        break;
        case 197 : imgTxt += "assets/Image/Apple/1164.png";
        break;
        case 198 : imgTxt += "assets/Image/Apple/1169.png";
        break;
        case 199 : imgTxt += "assets/Image/Apple/1172.png";
        break;
        case 200 : imgTxt += "assets/Image/Apple/1181.png";
        break;
        


        
    
        default : console.log("Cas non pris en compte")
    }
    return imgTxt
}
}



function verifImpossible(bouton){

    if(ready){

        nbAffiche++;
        var ligne = bouton.substr(0,1);
        var colonne = bouton.substr(2, 1);
        console.log(ligne);
        console.log(colonne);
        
        tabJeuImpossible[ligne][colonne] = tabResultatImpossible[ligne][colonne];
        afficherTableauImpossible();

        if(nbAffiche>1) {

            ready = false;
            setTimeout(() => {
                //Verification entre les 2 img ici
                if (tabJeuImpossible[ligne][colonne] !== tabResultatImpossible[oldSelection[0]][oldSelection[1]]) {
                    tabJeuImpossible[ligne][colonne] = 0;
                    tabJeuImpossible[oldSelection[0]][oldSelection[1]] = 0;
                }
                else{
                    veriffin=veriffin+1
                    if(veriffin==200){
                        gagne()
                        popUpReplay.style.zIndex = '5';
                        bravo.style.opacity = '1';
                        img_bravo.style.opacity = '1';
                    }
                }
                afficherTableauImpossible();
                ready = true;
                nbAffiche = 0;
                oldSelection = [ligne, colonne];

            },2000)

        } else {
            oldSelection = [ligne, colonne];
        }

    }

}


function genereTableauAleatoireImpossible(){
    var tab = [];
    var nbImagePosition=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];

    for(var i = 0 ; i < 20 ; i++){
        var ligne = [];
        for (var j = 0 ; j < 20 ; j++){
            var fin = false;
            while(!fin){
                console.log(nbImagePosition[randomImage])
                var randomImage = Math.floor(Math.random() * 200);
                if (nbImagePosition[randomImage] < 2){
                    ligne.push(randomImage+1);
                    nbImagePosition[randomImage]++;
                    fin = true;
                }
            }
        }
        tab.push(ligne);
    }
    return tab;
}   



/* ------------------------------------------------------------------------------------------------------------------------- */





function timer(){

    souvms=document.getElementById('milisecond').textContent;
    souvs=document.getElementById('second').textContent;
    souvm=document.getElementById('minute').textContent;
    endi=0
    setTimeout(milisecond, 10);
    setTimeout(second, 1000);
    setTimeout(minute, 60000);
    setTimeout(end, 1800000);
}
function milisecond(){
    if(endi==1){
        document.getElementById('milisecond').innerHTML = "00";
        second()
        minute()
        return;
    }
    else if(endi==2){ 
        return;
    }
    else{
    souvms=parseInt(souvms)
    souvms=souvms+1
    if (souvms<10){
    souvms=("0"+souvms)}
    document.getElementById('milisecond').innerHTML = souvms;
    if (souvms>9){
        souvms=0
        document.getElementById('milisecond').innerHTML = "00";
        setTimeout(milisecond, 10);
    }
    else{
        setTimeout(milisecond, 10);
    }
}
}
function second(){
    if(endi==1){
        document.getElementById('second').innerHTML = "00";
        return;
    }
    else if(endi==2){ 
        return;
    }
    else{
    score=score-5
    souvs=parseInt(souvs)
    souvs=souvs+1
    if (souvs<10){
    souvs=("0"+souvs)}
    document.getElementById('second').innerHTML = souvs;
    if (souvs>59){
        souvs=0
        document.getElementById('second').innerHTML = "00";
        setTimeout(second, 1000);
    }
    else{
        setTimeout(second, 1000);
    }
}
}
function minute(){
    if(endi==1){ 
        document.getElementById('minute').innerHTML = "30";
        return;
    }
    else if(endi==2){ 
        return;
    }
    else{
    souvm=parseInt(souvm)
    souvm=souvm+1
    if (souvm<10){
    souvm=("0"+souvm)}
    document.getElementById('minute').innerHTML = souvm;
    setTimeout(minute, 60000);
    }
}
function gagne(){
    endi=2
    document.getElementById('score_player').innerHTML = score;
    return;
}

function end(){
    endi=1
    popUpReplay.style.zIndex = '5';
    dommage.style.opacity = '1';
    img_dommage.style.opacity = '1';
    return;
}

function apparitionPopUpReplay(){
    
}


buttonPlay.addEventListener('click', button_play);
buttonPlay.addEventListener('click', afficherTableauFacile);
buttonPlay.addEventListener('click', afficherTableauMoyen);
buttonPlay.addEventListener('click', afficherTableauExtreme);
buttonPlay.addEventListener('click', afficherTableauImpossible);
imgreplaycroix.addEventListener('click', fermerPopUp);

buttonPlay.addEventListener('click', timer);