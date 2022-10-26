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
    <link rel="stylesheet" href="assets/css/popup_play.css">

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
        error_reporting(0);
        $_SESSION['id'] = $user[0];
        
        if(!empty($_POST['message'])){   
        //$pseudo = htmlspecialchars($_POST['id_Sender']);

            $message = nl2br(htmlspecialchars($_POST['message']));
            $insererMessage = $dbh->prepare('INSERT INTO Message(id_Sender, message)VALUES(?, ?)');
            $insererMessage->execute(array($name, $message));
            session_unset();

        }

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
                <p class="user_name01">Jérémy</p>
                <p class="user_message01">Salut Mathis ça va ?</p>
                <p class="time_message01">Aujourd'hui à 11h36</p>
            </div>

            <div class="user_chat02">
                <p class="user_name02">Moi</p>
                <p class="user_message02">Oui nickel et toi !? 🥰</p>
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

<script src="assets/js/popup_play.js"></script>

</html>
