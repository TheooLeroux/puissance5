<?php
require "includes/database.php";


session_start();

if (isset($_POST['email'])){
  $email = stripslashes($_REQUEST['email']); 
  $password = stripslashes($_REQUEST['password']);
  $query = $dbh->prepare('SELECT * FROM user WHERE email = :email and password=:password');
  $query->execute(['email' => $email, 'password' => $password]);
  $query = $query->fetch();
  if($query[1]==$email){
      $_SESSION['email'] = $email;
    header("Location: memory.php");
  }else{
    $message = "Le nom d'utilisateur ou le mot de passe est incorrect.";
  }
  
}
?>




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
    <link rel="stylesheet" href="assets/Css/login.css">
</head>

<body>

    <!-- DEBUT CODE HEADER -->

    <header>

        <div class="flexNav">
            <div>
                <p><img class="logo"
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
        <h1 class="connexion">CONNEXION</h1>
    </div>

    <!-- FORMULAIRE -->

    <div class="flexBody02">

        <form method="post" name="login">

            <h1>Connectez-vous</h1>
            <p class="texte_espace">ㅤ </p>

            <div class="inputs">

                <input type="email" placeholder="exemple@mail.com" name="email" required/>
                <input type="password" placeholder="Mot de passe" name="password" required/>
            </div>

            <p class="texte_espace">ㅤ</p>

            <div>
                <button class="button_connexion" type="submit" >
                    Connexion</button>
            </div>

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