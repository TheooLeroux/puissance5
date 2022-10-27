<?php
    
    require "includes/database.php";
    session_start();
?>



<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jeu</title>
    <link rel="stylesheet" href="assets/css/memory.css">
</head>



<body>
    <?php
require "view/header.inc.php";
?>



    <!-- BANNIERE -->

    <div class="flexBody01">
        <h1 class="connexion">A VOUS DE JOUER !</h1>
    </div>

    <!-- FORMULAIRE -->

    <div class="flexBody02">

        <video class="fullscreen" id="fullscreen" src="assets/Image/videofond.mp4" playsinline autoplay muted loop>
        </video>
        
          <div class="content">

                <div>
                    <p><img class="logo"
                            src="https://media.discordapp.net/attachments/301039123160891402/1033322636979216484/logohorizontal.png"
                            alt=""></p>
                </div>

                <div class="tableau">
                    <div id="resultat"></div>
                </div>

                        
                <div class="chrono">
                    <p><img src="https://media.discordapp.net/attachments/301039123160891402/1033698633310273597/Projet_sans_titre.gif" alt=""></p>
                    <button class="button_chrono" type="">
                    <div id="minute">00</div>m :  <div id="second">00</div>s :  <div id="milisecond">00</div>ms</button>
                </div>

            </div>


        <div id="popUpReplay" class="popUpReplay">

                <div class="haut_popupR">

                    <h1>Bravo !</h1>
                    <img src="https://media.discordapp.net/attachments/301039123160891402/1033737445193302096/u1F973.png" alt="">
                    <img id=imgreplaycroix src="https://media.discordapp.net/attachments/301039123160891402/1034877252787253308/croix.png" alt="">        

                </div>

                <p>Votre score est de : <span class="score_player"> 9min 56sec 28ms</span>.</p>

                <div class="bas_popupR">
                    
                    <form>
                    <button class="button_returnindex" type="submit" formaction="index.php" >
                        RETOURNER A L'ACCUEIL</button>
                    </form>


                    <form>
                    <button class="button_replay" type="submit" formaction="memory.php" >
                        REJOUER</button>
                    </form>
                    
                </div>

            </div>
                
        <div class="flexBody03" id="flexBody03">

            <video class="fullscreen02" src="assets/Image/videofondpopup.mp4" playsinline autoplay muted loop>
            </video>

                            <div class="popUpPlay">
                                

                                <div class="haut_popup">

                                    <h1>Choisissez votre thème :</h1>     

                                </div>

                                <div class="button_bas">

                                        <button id ="button_t01" class="button_theme01" type="" style="opacity: 1">
                                            Nourriture 🍕</button>

                                        <button id ="button_t02" class="button_theme02" type="" style="opacity: 1; transition : 0.5s">
                                            Smiley 🥰</button>

                                        <button id ="button_t03" class="button_theme03" type="" style="opacity: 1">
                                            Objet ✂️</button>
                                </div>

                                <h1 class="h1popupplay02">Choisissez votre niveau de difficulté :</h1>  

                                <div class="bas_popup">

                                        <button id ="button_facile" class="button_facile" type="">
                                        </button>

                                        <button id ="button_moyen" class="button_intermediaire" type="">
                                        </button>

                                        <button id ="button_extreme" class="button_extreme" type="">
                                        </button>

                                        <button id ="button_impossible" class="button_impossible" type="">
                                        </button>

                                </div>

                                
                                <button id="buttonPlay" class="button_valider" type="">
                                Lancer la partie</button>
                                <p id="text_erreur" style="opacity: 0">⚠️ Veuillez séléctionner tout les champs avant de lancer la partie.</p>

                        </div>
            </div>

            

    </div>

    <!-- CHAT -->
 

    <?php 
        //error_reporting(0);
        //$_SESSION['id'] = $user[0];
        
        //if(!empty($_POST['message'])){   
        //$pseudo = htmlspecialchars($_POST['id_Sender']);

        //    $message = nl2br(htmlspecialchars($_POST['message']));
        //    $insererMessage = $dbh->prepare('INSERT INTO Message(id_Sender, message)VALUES(?, ?)');
        //    $insererMessage->execute(array($name, $message));
        //    session_unset();


    ?>
    
    <!-- AFFICHAGE CHAT -->

    <div class="chat">
 
        <div class="header_chat">

            <div class="logo_chat">
            </div>

            <div class="text_chat">
                <p>Chat</p>
            </div>

        </div>
        
        <div class="body_chat">
            
            <div class="user_chat01">
                <p class="user_name01">Didier le réparateur</p>
                <p class="user_message01">🚨 LE CHAT EST EN PANNE j'ai coupé le mauvais fil ! 😅</p>
                <p class="time_message01">Aujourd'hui à 11h36</p>
            </div>

            <div class="user_chat02">
                <p class="user_name02">Moi</p>
                <p class="user_message02">Ohhh non zut alors 😥</p>
                <p class="time_message02">Aujourd'hui à 11h38</p>
            </div>

        </div>

        <div class="footer_chat">
            
            <form method="POST">

                <input type="text" placeholder="Ecrivez-ici..." name="message">
                <button class="button_chat" type="submit">
                Envoyer</button>
                
            </form>

        </div>

    </div>


</body>

<?php
require "view/footer.inc.php";
?>


<script src="assets/js/main.js"></script>



</html>
