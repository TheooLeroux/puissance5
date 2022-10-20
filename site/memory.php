<?php
require "includes/database.php";
require "view/header.inc.php";
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


    <!-- BANNIERE -->

    <div class="flexBody01">
        <h1 class="connexion">A VOUS DE JOUER !</h1>
    </div>

    <!-- FORMULAIRE -->

    <div class="flexBody02">

        <div>
            <p><img class="logo"
                    src="https://media.discordapp.net/attachments/301039123160891402/1028620290638495804/LOGO02.png"
                    alt=""></p>
        </div>

        <div class="button_haut">
            <button class="button_niveau" type="">
                FACILE</button>

            <button class="button_theme01" type="">
                Nourriture 🍕</button>

            <button class="button_theme02" type="">
                Smiley 🥰</button>

            <button class="button_theme03" type="">
                Objet ✂️</button>

        </div>

        <p class="texte_espace">ㅤ</p>

        <table class="tableau">

            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                


            </tbody>

        </table>

        <p class="texte_espace">ㅤ</p>

        <div>
            <button class="button_valider" type="submit">
                Valider</button>
        </div>

        <p class="texte_espace">ㅤ</p>

    </div>


    <!-- CHAT -->

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
            <form>
                <input type="text" placeholder="Ecrivez-ici...">
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