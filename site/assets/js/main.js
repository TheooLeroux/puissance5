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
    if (niveauChoisi=="Facile"){
        Reduction=50
    }
    else if (niveauChoisi=="Moyen"){
        Reduction=20
    }
    else if (niveauChoisi=="Difficile"){
        Reduction=15
    }
    else{
        Reduction=5
    }
    
    if (niveauChoisi && themeChoisi != "") {

        console.log(niveauChoisi);
        flexBody03.style.opacity = '0'; 
        flexBody03.style.zIndex = '-10';
        fullscreen.style.opacity = '1';
        lancerPartie = 1;

    }else{
        TextError.style.opacity = '1';
    }
    score()
    
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
                txt += "<button id='carretabIDFacile' class='imagejeuFacile' style='background-image:url("+getImage(tabJeuFacile[i][j])+")'>";
            }
            
        }
        txt += "</div>";
        
    }
        
        divResultat.innerHTML = txt;
    }
}








function getImage(valeur){
    var imgTxt = "";
    if(themeChoisi=="Nourriture"){
        r=1
        while (1>0){
        if(valeur==r){
        imgTxt += "assets/Image/Cartes/Nourriture/"+r+".png";
        return imgTxt
        }
        else{
            r=r+1
        }
    }
    }

else if (themeChoisi=="Smiley"){
    r=1
        while (1>0){
        if(valeur==r){
        imgTxt += "assets/Image/Cartes/Smiley/"+r+".png";
        return imgTxt
        }
        else{
            r=r+1
        }
    }
}
else{
    r=1
        while (1>0){
        if(valeur==r){
        imgTxt += "assets/Image/Cartes/Objet/"+r+".png";
        return imgTxt
        }
        else{
            r=r+1
        }
    }
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
        var nbImagePosition=[];
        for(i=0;i<8;i++){
            nbImagePosition.push('0');
        }

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
                txt += "<button id='carretabIDMoyen' class='imagejeuMoyen' style='background-image:url("+getImage(tabJeuMoyen[i][j])+")'>";
            }
            
        }
        txt += "</div>";
        
    }
        
        divResultat.innerHTML = txt;
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
    var nbImagePosition=[];
    for(i=0;i<32;i++){
        nbImagePosition.push('0');
    }

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
                txt += "<button id='carretabIDExtreme' class='imagejeuExtreme' style='background-image:url("+getImage(tabJeuExtreme[i][j])+")'>";
            }
            
        }
        txt += "</div>";
        
    }
        
        divResultat.innerHTML = txt;
    }
}



function verifExtreme(bouton){

    if(ready){
        console.log(bouton)

        nbAffiche++;
        if(bouton.substr(1,1)=="-"){
            var ligne = bouton.substr(0,1);
        }
        else{
            var ligne = bouton.substr(0,2);
        }

        if(bouton.substr(1,1)=="-"){
            if(bouton.substr(3,1)=='undefined'){
                var colonne = bouton.substr(2,1);
            }
            else{
                var colonne = bouton.substr(2,2);
            }
        }
        else{
            if(bouton.substr(4,1)=='undefined'){
                var colonne = bouton.substr(3,1);
            }
            else{
                var colonne = bouton.substr(3,2);
            }
        }
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
    var nbImagePosition=[];
    for(i=0;i<72;i++){
        nbImagePosition.push('0');
    }

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
                txt += "<button id='carretabIDImpossible' class='imagejeuImpossible' style='background-image:url("+getImage(tabJeuImpossible[i][j])+")'>";
            }
            
        }
        txt += "</div>";
        
    }
        
        divResultat.innerHTML = txt;
    }
}



function verifImpossible(bouton){

    if(ready){

        nbAffiche++;
        if(bouton.substr(1,1)=="-"){
            var ligne = bouton.substr(0,1);
        }
        else{
            var ligne = bouton.substr(0,2);
        }

        if(bouton.substr(1,1)=="-"){
            if(bouton.substr(3,1)=='undefined'){
                var colonne = bouton.substr(2,1);
            }
            else{
                var colonne = bouton.substr(2,2);
            }
        }
        else{
            if(bouton.substr(4,1)=='undefined'){
                var colonne = bouton.substr(3,1);
            }
            else{
                var colonne = bouton.substr(3,2);
            }
        }
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
    var nbImagePosition=[];
    for(i=0;i<200;i++){
        nbImagePosition.push('0');
    }

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
    if (niveauChoisi=="Facile"){
    setTimeout(end, 150000);
    }
    if (niveauChoisi=="Moyen"){
        setTimeout(end, 500000);
        }
    if (niveauChoisi=="Extreme"){
         setTimeout(end, 1200000);
    }
    if (niveauChoisi=="Impossible"){
        setTimeout(end, 1800000);
    }
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
    score=score-Reduction
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
        document.getElementById('minute').innerHTML = "00";
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
    scorerecup()
    return;
}

function end(){
    if (endi==0){
    endi=1
    popUpReplay.style.zIndex = '5';
    dommage.style.opacity = '1';
    img_dommage.style.opacity = '1';
    }
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
