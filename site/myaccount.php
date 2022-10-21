<?php
require 'includes/database.php';

  if(isset($_POST['newEmail'])){
    $email = stripslashes($_POST['email']); 
    $password = stripslashes($_REQUEST['password']);
    $newPassword = stripslashes($_POST['newPassword']); 
    $newPasswordConfirmation = stripslashes($_POST['newPasswordConfirmation']);
    $newEmail = stripslashes($_POST['newEmail']); 
    $query = $dbh->prepare('SELECT * FROM user WHERE email = :email and password = :password');
    $query->execute(['email' => $email, 'password' => $password]);
    $query = $query->fetch();
    $newquery=$dbh->prepare('UPDATE user SET email=:newEmail WHERE id=:id');
    $newquery->execute(['newEmail' => $newEmail, 'id' => $query[0]]);
  }
  if(isset($_POST['newPassword'])){
    $email = stripslashes($_POST['email']); 
    $password = stripslashes($_REQUEST['password']);
    $newPassword = stripslashes($_POST['newPassword']); 
    $newPasswordConfirmation = stripslashes($_POST['newPasswordConfirmation']);
    if($newPassword == $newPasswordConfirmation){
    $query = $dbh->prepare('SELECT * FROM user WHERE email = :email and password = :password');
    $query->execute(['email' => $email, 'password' => $password]);
    $query = $query->fetch();
    $newquery=$dbh->prepare('UPDATE user SET password=:newPassword WHERE id=:id');
    $newquery->execute(['newPassword' => $newPassword, 'id' => $query[0]]);
    }
  }
?>









<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Espace</title>
    <link rel="stylesheet" href="assets/Css/myaccount.css">
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
        <h1 class="connexion">MON ESPACE</h1>
    </div>

    <!-- FORMULAIRE -->

    <div class="flexBody02">

        <form method = "post">

            <p class="texte_espace">ㅤ</p>
            <h1>Modifier votre email</h1>
            <p class="texte_espace">ㅤ </p>

            <div class="inputs">
            
                <input type="email" placeholder="Ancien Mail" name='email' required />
            
                <input type="email" placeholder="Nouveau Mail" name='newEmail' required />

                <input type="password" placeholder="Mot de passe" name='password' required />

                <input type="password" placeholder="Confirmer le mot de passe" name='NewPasswordConfirmation' required />
            </div>

            <p class="texte_espace">ㅤ</p>

            <div>
                <button type="submit" >
                    Valider le changement de l'Email</button>
            </div>

            <p class="texte_espace">ㅤ</p>

        </form>

        <p class="texte_espace">ㅤ</p>

        <form method = "post">

            <p class="texte_espace">ㅤ</p>
            <h1>Modifier votre mot de passe</h1>
            <p class="texte_espace">ㅤ </p>

            <div class="inputs">
                <input type="email" placeholder="Email" name='email' required />

                <input type="password" placeholder="Ancien mot de passe" name='password' required />
                
                <input type="password" placeholder="Nouveau mot de passe" name='newPassword' required />

                <input type="password" placeholder="Confirmer le mot de passe" name='newPasswordConfirmation' required />
            </div>

            <p class="texte_espace">ㅤ</p>

            <div>
                <button type="submit" >
                    Valider le changement du mot de passe</button>
            </div>

            <p class="texte_espace">ㅤ</p>

        </form>


    </div>




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
            <h2><a href="memory.php"><span>♦</span> Jouer !</a></h>
                <h2>ㅤ</h2>
                <h2><a href="scores.php"><span>♦</span> Les scores</a></h>
                    <h2>ㅤ</h2>
                    <h2><a href="contact.php"><span>♦</span> Nous contacter</a></h>

        </div>
    </footer>


    <!-- FIN CODE FOOTER -->
</body>

</html>