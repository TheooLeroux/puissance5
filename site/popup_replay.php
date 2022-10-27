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
    <link rel="stylesheet" href="assets/css/popup.css">
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

       <div class="popUpReplay">

            <div class="haut_popup">

                <h1>Bravo !</h1>
                <img src="https://media.discordapp.net/attachments/301039123160891402/1033737445193302096/u1F973.png" alt="">      

            </div>

            <p>Votre score est de : <span class="score_player"> 00min 00sec 00ms</span>.</p>

            <div class="bas_popup">

                <button class="button_returnindex" type="submit">
                    RETOURNER A L'ACCUEIL</button>

                <button class="button_replay" type="submit">
                    REJOUER</button>

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

</html>
