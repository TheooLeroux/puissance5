<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jeu</title>
    <link rel="stylesheet" href="assets/Css/memory.css">
</head>

<body>

    <!-- DEBUT CODE HEADER -->

    <header>

        <div class="flexNav">
            <div>
                <p><img class="logo02"
                        src="https://media.discordapp.net/attachments/301039123160891402/1028264022467956766/LOGO.png"
                        alt=""></p>
            </div>
            <div>
                <nav>
                    <a href="index.php">ACCUEIL</a>
                    <a href="register.php">JEU</a>
                    <a href="scores.php">SCORES</a>
                    <a href="contact.php">NOUS CONTACTER</a>
                    <a href="myaccount.php"><img src="https://www.pngfind.com/pngs/b/110-1102927_profile-icon-png.png"
                            alt=""></a>
                </nav>
            </div>
        </div>

    </header>

    <!-- FIN CODE HEADER -->

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

    </div>

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
            body {
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            }

            * {
                box-sizing: border-box;
            }

            .openChatBtn {
                background-color: #bd5ef6;
                color: white;
                border-radius: 30px;
                padding: 16px 20px;
                border: none;
                font-weight: 500;
                font-size: 18px;
                cursor: pointer;
                opacity: 0.8;
                position: fixed;
                bottom: 23px;
                right: 28px;
                width: 280px;
            }

            .openChat {
                display: none;
                position: fixed;
                bottom: 0;
                right: 15px;
                border-radius: 30px;
                border: 3px solid #bd5ef6;
                z-index: 9;
            }

            form {
                max-width: 300px;
                padding: 10px;
                border-radius: 25px;
                background-color: #221f49;
            }

            form textarea {
                width: 100%;
                font-size: 18px;
                padding: 15px;
                margin: 5px 0 22px 0;
                border: none;
                font-weight: 500;
                background: #0D0B26;
                border-radius: 5px;
                color: white;
                resize: none;
                min-height: 200px;
            }

            form textarea:focus {
                background-color: #0D0B26;
                outline: none;
            }

            form .btn {
                background-color: rgb(34, 197, 107);
                font-size: medium;
                color: white;
                padding: 16px 20px;
                font-weight: bold;
                border: none;
                cursor: pointer;
                width: 100%;
                margin-bottom: 10px;
                opacity: 0.8;
                border-radius: 30px;
            }

            form .close {
                border-radius: 30px;
                background-color: #f25757;
            }

            form .btn:hover,
            .openChatBtn:hover {
                opacity: 1;
            }
        </style>
    </head>

    <body>
        <button class="openChatBtn" onclick="openForm()">Chat</button>
        <div class="openChat">
            <form>
                <h1>Chat</h1>
                <textarea placeholder="Ecrivez-ici..." name="msg" required></textarea>
                <button type="submit" class="btn">Envoyer</button>
                <button type="button" class="btn close" onclick="closeForm()">
                    Fermer
                </button>
            </form>
        </div>
        <script>
            document.querySelector(".openChatBtn").addEventListener("click", openForm);
            document.querySelector(".close").addEventListener("click", closeForm);
            function openForm() {
                document.querySelector(".openChat").style.display = "block";
            }
            function closeForm() {
                document.querySelector(".openChat").style.display = "none";
            }
        </script>
    </body>


    <!-- DEBUT CODE FOOTER -->

    <footer>

        <div class="information_footer">
            <h1>Information</h1>
            <h2>En cas de problèmes ou de questions, n'hésitez pas à nous contacter ! ♥</h2>
            <h2>ㅤ</h2>
            <h2><span>Tel :</span> 06 09 78 34 57 </h>
                <h2>ㅤ</h2>
                <h2><span>Email :</span> mathisbogoss@gmail.com </h>
                    <h2>ㅤ</h2>
                    <h2><span>Location :</span> Cergy - Coding Factory </h>
                        <h2>ㅤ</h2>

                        <p>
                            <a href="https://www.facebook.com/"><img
                                    src="https://media.discordapp.net/attachments/301039123160891402/1027325507244666951/facebook.png"
                                    alt=""></a>
                            <a href="https://www.twitter.com/"><img
                                    src="https://media.discordapp.net/attachments/301039123160891402/1027325509304078406/twitter.png"
                                    alt=""></a>
                            <a href="https://www.tiktok.com/"><img
                                    src="https://media.discordapp.net/attachments/301039123160891402/1027325508670730281/tiktok.png"
                                    alt=""></a>
                            <a href="https://www.pinterest.com/"><img
                                    src="https://media.discordapp.net/attachments/301039123160891402/1027325508272259152/pinterest.png"
                                    alt=""></a>
                            <a href="https://www.instagram.com/"><img
                                    src="https://media.discordapp.net/attachments/301039123160891402/1027325507617968230/insta.png"
                                    alt=""></a>
                        </p>

                        <p class="copyright_footer">Copyright © 2022 Tout droits réservés</p>
        </div>
        <div class="power_footer">
            <h1>Power Of Memory</h1>
            <h2><a href="memory.html"><span>♦</span> Jouer !</a></h>
                <h2>ㅤ</h2>
                <h2><a href="scores.html"><span>♦</span> Les scores</a></h>
                    <h2>ㅤ</h2>
                    <h2><a href="contact.html"><span>♦</span> Nous contacter</a></h>

        </div>

    </footer>


    <!-- FIN CODE FOOTER -->
</body>

</html>