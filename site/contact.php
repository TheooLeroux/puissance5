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
    <title>Contact</title>
    <link rel="stylesheet" href="assets/css/contact.css">
</head>

<body>

<?php
    require "view/header.inc.php";
?>


    <div class="flexBody01">
        <h1 class="connexion">NOUS CONTACTER</h1>
    </div>

    <div class="icon">
        <div> <br> <br> <br><br> <img
                src="https://media.discordapp.net/attachments/301039123160891402/1028248844703649882/mobile.png"
                alt="contact"> <br> <br> 06 09 78 34 57</div>
        <div> <br> <br> <br> <br> <img
                src="https://media.discordapp.net/attachments/301039123160891402/1028248843910918154/mail.png"
                alt="contact"> <br> <br> support@powerofmemory</div>
        <div> <br> <br> <br> <br> <img
                src="https://media.discordapp.net/attachments/301039123160891402/1028248844355502080/map.png"
                alt="contact"> <br> <br> Cergy - Coding Factory</div>
    </div>

    <!-- FORMULAIRE -->

    <div class="flexBody02">

        <form>

            <p class="texte_espace">ㅤ</p>
            <h1 class="titre-form">Formulaire de contact</h1>
            <p class="texte_espace">ㅤ </p>

            <div class="inputs">
                <input type="text" placeholder="Nom" required />
                <input type="email" placeholder="Mail" required>
                <input type="text" placeholder="Sujet" required>
                <input type="message" placeholder="Message" required>
            </div>

            <p class="texte_espace">ㅤ</p>

            <div>
                <button class="button_connexion" type="submit" formaction="memory.php">
                    Envoyer</button>
            </div>

            <p class="texte_espace">ㅤ</p>

        </form>

    </div>



</body>

<?php
require "view/footer.inc.php";
  ?>

</html>